import React, { PureComponent } from 'react';
import { Image, View ,TextInput, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../assets';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// import AsyncStorage from '@react-native-community/async-storage';

import styles from './Map.screen.styles'

export default class MapsScreen extends PureComponent {
    constructor(props){
        super(props);
        this.savedAddresses = [
            {
              icon: '',
              title: 'Bdlive24.com',
              address: 'Hourse 57, road-8, Block-D, niketon, Gulshan'
            },
            {
              icon: '',
              title: 'Daffodil internationalUniversity',
              address: 'Mirpur Rd, Dhanmondi 32 Bustop'
            }
        ];
      
    }
    _onPress=()=>{
        this.props.navigation.navigate('Discovery',{
            userData:this.userData
        })
    }
    
    _onLogOut = async () => {
        console.log('logout');
        try {
            await AsyncStorage.removeItem('userToken')
            console.log('done')
        } catch (e) {
            console.log(e)
        }
    }
    

    _onPressProfile = async ()=>{
        await this._onLogOut()
        this.props.navigation.navigate('AuthLoading') 
    }

    _renderHeader = ()=>{
        return(
            <View style = {{height: 90,flexDirection:'row', justifyContent:'space-between',
            backgroundColor:'rgba(0,0,0,0)'}}>
                <Image style={{margin:30,height:35,width:107}} resizeMode='contain' source={IMAGES.logo}/>
                <TouchableOpacity onPress ={this._onPressProfile}>
                    <Image style={{margin:30,width:35,height:35}} resizeMode='cover' source={IMAGES.profile_small}/>

                </TouchableOpacity>
                </View>
        )
    }

    renderAddressSection = () => {
        return (
            <View style={{marginHorizontal:30, backgroundColor:'white',borderBottomEndRadius:6,
            borderBottomStartRadius:6}}>

            <FlatList
                vertical
                data={this.savedAddresses}
                renderItem={this.renderAddressItem}
                keyExtractor={(item) => item.title}
            />
            </View>
        );
    };
    
    renderAddressItem = ({ item }) => {
        return (
            <View style={{marginVertical:12,flexDirection:'row'}}>
                <View style = {{width:16, height:16, marginHorizontal:20,marginTop:5,}}>
                    <Image resizeMode='cover' source={IMAGES.location}/>
                </View>
                <View
                    style={{ flex:1,}}
                >
                    <Text style = {{color:'black',fontSize: 16}}>
                    {item.title}
                    </Text>
                    <Text style={{fontSize:13}}>
                    {item.address}
                    </Text>
                </View>
            </View>
        );
    };

    renderMapView = () => (
        <View style={styles.mapsContainer}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            zoomEnabled={true}
            scrollEnabled={true}
            >
            </MapView>
        </View>
    )
 
    render() {
        return (
            <View style = {styles.container}>
                {this._renderHeader()}
                <View style = {styles.content}>
                    {this.renderMapView()}
                    <View>
                        <View style = {styles.searchWrapper}>
                            <TouchableOpacity onPress ={this._onPress}>
                                <View style = {styles.discoveryIcon}/>
                            </TouchableOpacity>
                            <TextInput placeholder="Where to ?"
                            style={styles.searchInput}/>
                        </View>
                        {this.renderAddressSection()}
                    </View>                    
                </View>
            </View>
        )
    }
}
