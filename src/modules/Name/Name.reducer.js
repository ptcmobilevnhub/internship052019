const ADD_NAME_STARTED = 'ADD_NAME_STARTED'

const initialState = {
    userData:{},
    isLoading: false,
    error: null
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NAME_STARTED:
            return {
                ...state,
                userData:{
                    ...state.userData,
                    name:action.name
                }
            }
        default:
            return state
    }
}


export const addName = (name) => {
    return dispatch => {
        dispatch(addNameStarted(name));
    };
};
  
const addNameStarted = (name) => ({
    type: ADD_PHONE_STARTED,
    name
});