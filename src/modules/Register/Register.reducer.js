import { getVerifyCodeFromAPI, getTokenFromAPI, pushTokentoMemory } from "../../data";

const ADD_PHONE_STARTED = 'ADD_PHONE_STARTED'
const ADD_PHONE_SUCCESS = 'ADD_PHONE_SUCCESS'
const ADD_PHONE_FAILURE = 'ADD_PHONE_FAILURE'
const CANCEL_REGIST = 'CANCEL_REGIST'
const ADD_NAME = 'ADD_NAME'
const ADD_GENDER = 'ADD_GENDER'
const ADD_AVATAR_URL = 'ADD_AVATAR_URL'
const ADD_TOKEN_STARTED = 'ADD_TOKEN_STARTED'
const ADD_TOKEN_SUCCESS = 'ADD_TOKEN_SUCCESS'
const ADD_TOKEN_FAILURE = 'ADD_TOKEN_FAILURE'

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
        case ADD_AVATAR_URL:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    avatar: action.avatar
                },
                error: null,
                isLoading: false,
            }
        case ADD_TOKEN_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case ADD_TOKEN_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
            }
        case ADD_TOKEN_FAILURE:
            return {
                ...state,
                isLoading: true,
                error: action.error
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

export const addAvatarUrl = (url, ownProps) => {
    return dispatch => {
        dispatch({
            type: ADD_AVATAR_URL,
            avatar: url
        });
        ownProps.navigation.navigate('NotifiPermision')
    };
};


const addTokenStarted = () => ({
    type: ADD_TOKEN_STARTED,
});

const addTokenSuccess = () => ({
    type: ADD_TOKEN_SUCCESS,
});
const addTokenFailure = error => ({
    type: ADD_TOKEN_FAILURE,
    error
});
export const addToken = (userData, ownProps) => {
    return dispatch => {
        dispatch(addTokenStarted());
        getTokenFromAPI(userData,
            response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(async (response) => {
                    await pushTokentoMemory(response.userToken)
                    await dispatch(addTokenSuccess(response))
                    await ownProps.navigation.navigate('AuthLoading')
                });
            },
            err => { dispatch(addTokenFailure(err.message)) })
    };
}
