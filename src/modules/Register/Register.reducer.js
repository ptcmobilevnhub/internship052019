const ADD_PHONE = 'ADD_PHONE'
const initialState = {}

export default function registerReducer(state = initialState, action) {
    const returnState = state
    switch (action.type) {
        case ADD_PHONE:
            returnState = {...state,phone:action.phone}
            break;
        default:
            break;
    }
    return returnState
}