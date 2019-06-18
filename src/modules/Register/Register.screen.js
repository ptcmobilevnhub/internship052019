import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { IMAGES } from '../../assets';
import styles from './Register.screen.styles'

const renderRegisterImage = () => {
    return (
        <View style={styles.imageRegister}>
            <Image
                resizeMode="contain"
                source={IMAGES.register.image}
            />
        </View>
    )
};
const renderTextTittle = () => {
    return (
        <Text style={styles.textTittle}>Get moving with Uber</Text>
    )
};
const renderInputPhone = (phone, onSubmit) => {
    return (
        <View style={styles.inputPhoneContainer}>
            <View style={styles.textPhoneArea}>
                <Text>+880</Text>
            </View>
            <View style={styles.inputPhone}>
                <TextInput
                    value={phone||null}
                    onSubmitEditing={onSubmit}
                    style={{ textAlign: 'center', }}
                    placeholder="Enter your mobile number"
                    keyboardType={'phone-pad'}
                />
            </View>
        </View>
    )
};
const renderTextLinkSocial = () => {
    return (
        <TouchableOpacity>
            <Text style={styles.textLinkSocial}>Or connect using a social account</Text>
        </TouchableOpacity>
    )
};
const RegisterScreen = (props) => {
    if (props.error != null) {
        Alert.alert(
            'Error',
            props.error,
            [
                {
                    text: 'Cancel',
                    onPress: props.onCancel,
                    style: 'cancel',
                },
                { text: 'Retry', onPress: props.onRetry },
            ],
        );
    }
    return props.isLoading ? (
        <View style={styles.loading}>
            <ActivityIndicator />
        </View>
    ) : (
            <View style={styles.container}>
                {renderRegisterImage()}
                {renderTextTittle()}
                {renderInputPhone(props.phone, props.onSubmit)}
                {renderTextLinkSocial()}
            </View>
        )
};

export { RegisterScreen as renderRegisterScreen }