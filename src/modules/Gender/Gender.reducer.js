const ADD_GENDER_STARTED = 'ADD_GENDER_STARTED'

const initialState = {
    userData:{},
    isLoading: false,
    error: null
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_GENDER_STARTED:
            return {
                ...state,
                userData:{
                    ...state.userData,
                    gender:action.gender
                }
            }
        default:
            return state
    }
}


export const addGender = (gender) => {
    return dispatch => {
        dispatch(addGenderStarted(gender));
    };
};
  
const addGenderStarted = (gender) => ({
    type: ADD_GENDER_STARTED,
    gender
});