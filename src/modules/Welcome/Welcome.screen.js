import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';


import {renderLogoHeader} from '../../components'
import { IMAGES } from '../../assets';
import styles from './Welcome.screen.styles';

const renderWelcomeImage = () => {
    return (
        <Image
            style={styles.welcomeImage}
            resizeMode={'contain'}
            source={IMAGES.welcome.image}
        />
    );
};

const renderWelcomeSlogan = () => {
    return (
        <Text style={styles.textSlogan}
        >Your ride, on demand</Text>
    )
};

const renderWelcomeText = () => {
    return (
        <Text style={styles.textDescribe}
        >Whether you're headed to work, the airport, or out on the town, Uber connects you with reliable ride in minutes. One tap and a car comes directly to you.</Text>
    )
};

const renderRegisterButton = (onClickRegisterbyPhone) => {
    return (
        <TouchableOpacity
            onPress={onClickRegisterbyPhone}
            style={styles.touchableOpacity}
        >
            <Text style={styles.buttonText}>Register by Phone</Text>
            <Image source={IMAGES.arrowRight.white} />
        </TouchableOpacity>
    )
};

const WelcomeScreen = (props) => {
    return (
        <View style={styles.container}>
            {renderLogoHeader(46)}
            {renderWelcomeImage()}
            {renderWelcomeSlogan()}
            {renderWelcomeText()}
            {renderRegisterButton(props.onClick)}
        </View>
    )

};

export default WelcomeScreen
