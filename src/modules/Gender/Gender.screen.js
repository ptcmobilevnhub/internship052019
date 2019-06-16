import React, { PureComponent } from 'react'
import { Image, View ,TouchableOpacity} from 'react-native'
import {IMAGES} from '../../assets'

import styles from './Gender.screen.styles'

// import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
// import SkipHeader from '../navigation/headers/Skip.header'
// import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'

export default class GenderScreen extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            gender:'',
        }
    }

    
    renderHeader = (onClickBack, onClickSkip)=>{
        return null
        // return (
        //     <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
        //         {ArrowLeftHeader({onPress: this._onClickBack})}
        //         {SkipHeader({onPress: this._onClickSkip})}
        //     </View>
        // )
    }

    // _onClickNext = ()=>{
    //     const tranferData = this.state.gender == ""?{
    //         userData:this.userData
    //     } :{userData:{
    //         ...this.userData,
    //         gender:this.state.gender
    //     } }
    //     this.props.navigation.navigate('Avatar',tranferData);
    // }
    renderFooter = (onClickNext) =>{
        return null
        // return (
        //     <View style={{flexDirection:'row-reverse', margin:30}}>
        //         {ArrowRightFooter({onPress:this._onClickNext})}
        //     </View>
        // )
    }
    onPressGender = (gender)=>()=>{
        this.setState({
            gender:gender
        })
    }
    renderGenderItem = (source, gender)=>{
        const style = this.state.gender == gender? styles.genderChosen:{}
        return(
            <View style={{...style,...styles.gender}}>
                <TouchableOpacity
                    style={styles.imageWrapper}
                    onPress={this.onPressGender(gender)}>
                    <Image style={styles.imageGender}  resizeMode="cover" source={source}></Image>
                </TouchableOpacity>
            </View>
        )
    }
 
    render() {
        return (
            <View style={styles.container} >
                {this.renderHeader(this.props.onClickBack,this.props.onClickSkip)}
                <View style={styles.contentWrapper}>
                    {this.renderGenderItem(IMAGES.male,'male')}
                    {this.renderGenderItem(IMAGES.female,'female')}    
                </View>
                {this.renderFooter(this.props.onClickNext)}
            </View>
        )
    }
}
