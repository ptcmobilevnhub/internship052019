import React, { PureComponent } from 'react'
import { Image, View, Text,Alert,ActivityIndicator} from 'react-native';
import {IMAGES} from '../../assets'

import styles from './Notification.screen.styles'

import {renderLogoHeader} from '../../components/';

const renderFooter = () =>{
    return null
    // return (
    //     <View style={{flexDirection:'row-reverse', margin:30}}>
    //         {ArrowRightFooter({onPress:this._onClickNext})}
    //     </View>
    // )
} 

const NotificationScreen = (props)=>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {renderLogoHeader()}
            </View>
            <Image 
                source = {IMAGES.notification}
                resizeMode='contain' 
                style={styles.image}
            />
            <Text 
                style={styles.textTitle} 
                numberOfLines={2}
            >Ride easy with real time trip updates</Text>
            <Text 
                style={styles.textDetail}
                numberOfLines={2}
            >Please enable push notifications from              uber when prompted</Text>
            {renderFooter()}
        </View>
    )
}
export {NotificationScreen as renderNotificationScreen}
