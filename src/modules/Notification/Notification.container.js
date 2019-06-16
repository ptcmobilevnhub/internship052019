import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {renderNotificationScreen} from './Notification.screen'

export default class NotificationContainer extends Component {

    data = {
        onClickNext:()=>{null}
    }
    render() {
        return renderNotificationScreen(this.data)
    }
}
