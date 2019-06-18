import React, { Component } from 'react'
import { Text, View } from 'react-native'

import DiscoveryScreen from './Discovery.screen'

export default class DiscoveryContainer extends Component {
    render() {
        data = {
            onClickBack:()=>{this.props.navigation.goBack()}
        }
        return (
            <DiscoveryScreen {...data}/>
        )
    }
}
