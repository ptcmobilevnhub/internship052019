import React, { Component } from 'react'
import {View, Image, Text, TextInput, ToastAndroid,TouchableOpacity} from 'react-native'
// import {IMAGES} from '../../assets'



import styles from './Verify.screen.styles'

const renderHeader = (onClickBack) =>{
    return null
}

const renderTextTittle = (phone) => {
    return (
        <Text style={styles.titleWrapper}>
            Enter the 4-digits code sent to you at {phone}.
            <Text 
                style={styles.titleQuestion}
            > Did you enter the correct number?</Text>
        </Text>
    )
}
const renderInputNumber = (verifyCode) => {
    
    const tmp = verifyCode||["0","0","0","0"]
    return (
        <View style= {styles.phoneWrapper}>
            {tmp.map((element,index) => (
                <TextInput
                    key = {index}
                    style = {styles.phoneInput}
                    value={element}
                    keyboardType={'numeric'}
                    editable = { verifyCode?false:true }
                />
            ))} 
        </View>
    )
}

const renderFooter = (onClickNext)=>{
    return (
        <TouchableOpacity 
        style= {styles.footerWrapper}
        >
            <Text style ={styles.footerText}>
                I didn't receive code
            </Text>
            {/* {ArrowRightFooter({onPress:onClickNext})} */}
        </TouchableOpacity>
    )
}

const VerifyScreen = (props) => {
    return (
        <View style={styles.container}>
            {renderHeader(props.onClickBack)}
            {renderTextTittle(props.phone)}
            {renderInputNumber(props.verifyCode)}
            {renderFooter(props.onClickNext)}
        </View>
    )
}

export {VerifyScreen as renderVerifyScreen}

