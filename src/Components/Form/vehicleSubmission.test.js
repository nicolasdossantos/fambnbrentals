const { prepareVehicleSubmission } = require('./vehicleSubmission');
const { formReducer, initialState } = require('./formState');
const { inspectVehicleRows } = require('./vehicleFields');

test('one confirmed vehicle keeps its plate format, normalizes state, and sends only string fields', () => {
    const result = prepareVehicleSubmission([{ plate: ' Abc / 123 ', state: ' quebec ' }], true);
    expect(result).toEqual({ car1Plate: 'Abc / 123', car1State: 'QUEBEC', vehicleListConfirmation: 'confirmed_complete' });
    expect(result.vehicleCount).toBeUndefined();
});

test('one vehicle requires confirmation and blank extras never count as another vehicle', () => {
    const cars = [{ plate: 'ABC', state: 'pa' }, { plate: ' ', state: '' }];
    expect(() => prepareVehicleSubmission(cars, false)).toThrow(/confirm/i);
    const result = prepareVehicleSubmission(cars, true);
    expect(result.car2Plate).toBeUndefined();
    expect(result.car1State).toBe('PA');
});

test('two blank rows cannot bypass the existing form UI minimum', () => {
    expect(() => prepareVehicleSubmission([{ plate: '', state: ' ' }, { plate: ' ', state: '' }], false)).toThrow(/at least one/i);
    expect(inspectVehicleRows([{ plate: ' ', state: '' }, { plate: '', state: ' ' }]).vehicles).toHaveLength(0);
});

test('partial plate/state rows are rejected even alongside a complete vehicle', () => {
    for (const car of [{ plate: 'ABC', state: '' }, { plate: ' ', state: 'pa' }]) {
        expect(() => prepareVehicleSubmission([car], true)).toThrow(/plate.*state/i);
        expect(() => prepareVehicleSubmission([{ plate: 'GOOD', state: 'pa' }, car], true)).toThrow(/plate.*state/i);
    }
});

test('two complete cars need no single-car prompt and empty rows are compacted', () => {
    const data = prepareVehicleSubmission([{ plate: 'A', state: 'pa' }, { plate: '', state: '' }, { plate: 'B', state: 'ny' }], false);
    expect(data.vehicleListConfirmation).toBe('not_required');
    expect(data.car2Plate).toBe('B');
    expect(data.car2State).toBe('NY');
});

test('vehicle edits, additions and removals each reset a prior confirmation', () => {
    const confirmed = { ...initialState, cars: [{ plate: 'ABC', state: 'PA' }], vehicleListConfirmed: true };
    for (const action of [{ type: 'UPDATE_CAR', index: 0, field: 'plate', value: 'OTHER' }, { type: 'ADD_CAR' }, { type: 'REMOVE_CAR', index: 0 }]) {
        expect(formReducer(confirmed, action).vehicleListConfirmed).toBe(false);
    }
    expect(formReducer(initialState, { type: 'CONFIRM_VEHICLES', value: true }).vehicleListConfirmed).toBe(true);
});
