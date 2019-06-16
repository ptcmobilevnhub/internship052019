import React, { PureComponent } from 'react'
import { Image, View ,Text, ImageBackground, TouchableOpacity } from 'react-native'
import {IMAGES} from '../../assets'

import styles from './Avatar.screen.styles'


export default class GenderScreen extends PureComponent {

    // TODO Load image

    renderHeader = ()=>{
        return null
        // return (
        //     <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
        //         {ArrowLeftHeader({onPress: this._onClickBack})}
        //         {SkipHeader({onPress: this._onClickSkip})}
        //     </View>
        // )
    }

    renderFooter = () =>{
        return null
        // return (
        //     <View style={{flexDirection:'row-reverse', margin:30}}>
        //         {ArrowRightFooter({onPress:this._onClickNext})}
        //     </View>
        // )
    }


    renderChooseImage = ()=>(
        <View style={styles.content}>
            <TouchableOpacity>
                <ImageBackground 
                    style={styles.avatar} 
                    source={IMAGES.profile}
                >
                    <Image source={IMAGES.camera}/>
                </ImageBackground >
            </TouchableOpacity>
            <Text style={styles.text} numberOfLines={3}>
                Upload          profile picture
            </Text>
        </View>
        
    )

 
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderChooseImage()}
                {this.renderFooter()}
            </View>
        )
    }
}
