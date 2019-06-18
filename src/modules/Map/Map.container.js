import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

import MapScreen from './Map.screen'

export default class MapContainer extends Component {
    render() {

        data = {
            onDiscovery : ()=>{this.props.navigation.navigate('Discovery')},
            onPressProfile: async () => {
                try {
                  await AsyncStorage.removeItem('userToken')
                } catch(e) {
                  console.log('Error remove UserToken', e)
                }
                console.log('Done.')
                this.props.navigation.navigate('AuthLoading')
            }

            
        }
        return (
            <MapScreen {...data}/>
        )
    }
}
