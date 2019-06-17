import AsyncStorage from '@react-native-community/async-storage';

const getVerifyCodeFromAPI = async (phone,responseHandle,errorHandle)=>{
    return fetch('https://demo4820430.mockable.io/user/verify',
    {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone:phone,
        })
    }).then(responseHandle).catch(errorHandle)
}

const getTokenFromAPI = async (userData,responseHandle,errorHandle)=>{
    return fetch('https://demo4820430.mockable.io/user/token',
    {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userData
        })
    }).then(responseHandle).catch(errorHandle)
}

const pushTokentoMemory = async (userToken) => {
    console.log('token user push', userToken)
    try {
        await AsyncStorage.setItem('userToken',userToken)
    } catch (e) {
        console.log('error: ',error)
        this._onErrorHandler(e)
    }
}

export {getVerifyCodeFromAPI, getTokenFromAPI, pushTokentoMemory}