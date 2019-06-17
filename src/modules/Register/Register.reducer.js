import { getVerifyCodeFromAPI } from "../../data";

const ADD_PHONE_STARTED = 'ADD_PHONE_STARTED'
const ADD_PHONE_SUCCESS = 'ADD_PHONE_SUCCESS'
const ADD_PHONE_FAILURE = 'ADD_PHONE_FAILURE'
const CANCEL_REGIST = 'CANCEL_REGIST'
const ADD_NAME = 'ADD_NAME'
const ADD_GENDER = 'ADD_GENDER'

const initialState = {
    userData: {},
    isLoading: false,
    error: null
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PHONE_STARTED:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    phone: action.phone
                },
                isLoading: true
            }
        case ADD_PHONE_SUCCESS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    verifyCode: action.verifyCode
                },
                error: null,
                isLoading: false,
            }
        case ADD_PHONE_FAILURE:
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        case CANCEL_REGIST:
            return initialState
        case ADD_NAME:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.name
                },
                error: null,
                isLoading: false,
            }
        case ADD_GENDER:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    gender: action.gender
                },
                error: null,
                isLoading: false,
            }

        default:
            return state
    }
}

const addPhoneStarted = (phone) => ({
    type: ADD_PHONE_STARTED,
    phone
});

const addPhoneSuccess = response => ({
    type: ADD_PHONE_SUCCESS,
    verifyCode: response.verifyCode
});
const addPhoneFailure = error => ({
    type: ADD_PHONE_FAILURE,
    error
});

export const addPhone = (phone, ownProps) => {
    return dispatch => {
        dispatch(addPhoneStarted(phone));
        getVerifyCodeFromAPI(phone,
            response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(function (verifyCode) {
                    dispatch(addPhoneSuccess(verifyCode))
                    ownProps.navigation.navigate('Verify')
                });
            },
            err => { dispatch(addPhoneFailure(err.message)) })
    };
};

export const onCancelRegist = () => {
    return dispatch => {
        dispatch({ type: CANCEL_REGIST });
    }
}

export const addName = (name, ownProps) => {
    return dispatch => {
        dispatch({
            type: ADD_NAME,
            name: name
        });
        ownProps.navigation.navigate('ChooseGender')
    };
};

export const addGender = (gender, ownProps) => {
    return dispatch => {
        dispatch({
            type: ADD_GENDER,
            gender: gender
        });
        ownProps.navigation.navigate('Avatar')
    };
};

