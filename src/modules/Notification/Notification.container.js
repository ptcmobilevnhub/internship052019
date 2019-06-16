import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {renderNotificationScreen} from './Notification.screen'

export default class NotificationContainer extends Component {
    render() {
        return renderNotificationScreen()
    }
}
