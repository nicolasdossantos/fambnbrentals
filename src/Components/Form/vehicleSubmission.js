const { inspectVehicleRows } = require('./vehicleFields');

function prepareVehicleSubmission(cars, confirmed) {
    const inspected = inspectVehicleRows(cars);
    if (inspected.incompleteIndex !== -1) throw new Error('Each listed vehicle needs both a license plate and a state/province');
    // Preserve the existing form UI policy; the backend still accepts no-car legacy forms for review.
    if (!inspected.vehicles.length) throw new Error('Please enter at least one car');
    if (inspected.vehicles.length === 1 && !confirmed) throw new Error('Please confirm this is your complete vehicle list, or add another car');
    const fields = { vehicleListConfirmation: inspected.vehicles.length === 1 ? 'confirmed_complete' : 'not_required' };
    inspected.vehicles.forEach((car, index) => {
        fields[`car${index + 1}Plate`] = car.plate;
        fields[`car${index + 1}State`] = car.state;
    });
    return fields;
}

module.exports = { prepareVehicleSubmission };
