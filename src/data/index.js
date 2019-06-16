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
export {getVerifyCodeFromAPI}