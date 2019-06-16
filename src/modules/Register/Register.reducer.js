import { getVerifyCodeFromAPI } from "../../data";

const ADD_PHONE_STARTED = 'ADD_PHONE_STARTED'
const ADD_PHONE_SUCCESS = 'ADD_PHONE_SUCCESS'
const ADD_PHONE_FAILURE = 'ADD_PHONE_FAILURE'

const initialState = {
    userData:{},
    isLoading: false,
    error: null
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PHONE_STARTED:
            return {
                ...state,
                userData:{
                    ...state.userData,
                    phone:action.phone},
                isLoading:true
            }
        case ADD_PHONE_SUCCESS:
            return {
                ...state,
                userData:{
                    ...state.userData,
                    verifyCode:action.verifyCode
                },
                isLoading:false,
            }
        case ADD_PHONE_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:action.error
            }
        default:
            return state
    }
}


export const addPhone = (phone) => {
    return dispatch => {
        dispatch(addPhoneStarted(phone));
        getVerifyCodeFromAPI(phone,
            response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
            
                response.json().then(function(verifyCode) {
                    dispatch(addPhoneSuccess(verifyCode))
                });
            }, 
            err => {dispatch(addPhoneFailure(err.message))})
    };
};
  
const addPhoneStarted = (phone) => ({
    type: ADD_PHONE_STARTED,
    phone
});
  
const addPhoneSuccess = verifyCode => ({
    type: ADD_PHONE_SUCCESS,
    verifyCode
});
const addPhoneFailure = error => ({
    type: ADD_PHONE_FAILURE,
    error
});