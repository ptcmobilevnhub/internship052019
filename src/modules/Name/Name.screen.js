import React, { PureComponent } from 'react'
import { Text, View ,TextInput} from 'react-native'

import styles from './Name.screen.styles'

export default class NameScreen extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            text:this.props.name
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

    renderTextTittle = ()=>{
        return (
            <Text style={styles.title}>Enter your Name</Text>
        )
    }

    renderInputName = ()=>{
        return (
            <TextInput
            style={styles.input}
            onChangeText = {(text)=> this.setState({text})}
            value = {this.state.text} 
            editable = {true}/>
        )
    }

    renderFooter = (onClickNext) =>{
        return null
        // return (
        //     <View style={{flexDirection:'row-reverse', margin:30}}>
        //         {ArrowRightFooter({onPress:this._onClickNext})}
        //     </View>
        // )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader(this.props.onClickBack,this.props.onClickSkip)}
                <View style={styles.contentWrapper}>
                    {this.renderTextTittle()}
                    {this.renderInputName()}
                </View>
                {this.renderFooter(this.props.onClickNext)}
            </View>
        )
    }
}
