const initialState = {
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zip: '',
    errors: {}, cars: [{ plate: '', state: '' }], vehicleListConfirmed: false
};

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD': return { ...state, [action.field]: action.value };
        case 'SET_ERROR': return { ...state, errors: { ...state.errors, [action.field]: action.value } };
        case 'CONFIRM_VEHICLES': return { ...state, vehicleListConfirmed: action.value === true };
        case 'ADD_CAR': return { ...state, cars: [...state.cars, { plate: '', state: '' }], vehicleListConfirmed: false };
        case 'UPDATE_CAR': return { ...state, cars: state.cars.map((car, index) => index === action.index ?
            { ...car, [action.field]: action.value } : car), vehicleListConfirmed: false };
        case 'REMOVE_CAR': return { ...state, cars: state.cars.filter((_, index) => index !== action.index), vehicleListConfirmed: false };
        default: return state;
    }
}

module.exports = { initialState, formReducer };
