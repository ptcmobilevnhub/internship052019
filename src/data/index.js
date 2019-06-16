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

// const putTokentoMemory = async (userToken) => {
//     try {
//         await AsyncStorage.setItem('userToken',userToken.userToken)
//     } catch (e) {
//         console.log('error: ',error)
//         this._onErrorHandler(e)
//     }
// }
// getTokentoMemory 
// deleteToken


export {getVerifyCodeFromAPI, getTokenFromAPI}