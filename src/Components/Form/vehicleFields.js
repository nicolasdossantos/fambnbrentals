function inspectVehicleRows(cars) {
    const rows = cars.map(car => {
        if (typeof car.plate !== 'string' || typeof car.state !== 'string') throw new Error('Invalid vehicle fields');
        return { plate: car.plate.trim(), state: car.state.trim().toUpperCase() };
    });
    return { rows, vehicles: rows.filter(car => car.plate || car.state),
        incompleteIndex: rows.findIndex(car => Boolean(car.plate) !== Boolean(car.state)) };
}

function resolveVehicleConfirmation(count, value) {
    value = typeof value === 'string' ? value.trim() : value;
    if (value === undefined || value === '' || value === 'legacy_unconfirmed') return 'legacy_unconfirmed';
    if (count === 1 && value === 'confirmed_complete') return value;
    if (count !== 1 && value === 'not_required') return value;
    throw new Error('Vehicle list confirmation does not match the listed vehicles');
}

module.exports = { inspectVehicleRows, resolveVehicleConfirmation };
