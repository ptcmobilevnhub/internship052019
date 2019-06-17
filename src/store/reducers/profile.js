import { SAVE_PHONE, SAVE_NAME } from '../actions/actionTypes';

const initialState = {
    phone: '',
    name: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {      
        case SAVE_PHONE:
            return {
                ...state,
                phone: action.phoneNumber,
            };
        case SAVE_NAME:
            return {
                ...state,
                name: action.name
            };
    }
    return state;
};

export default reducer;