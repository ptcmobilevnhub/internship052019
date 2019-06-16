import React, { PureComponent } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { IMAGES } from '../../assets'

import styles from './Gender.screen.styles'

import { renderArrowLeftHeader, renderSkipHeader, renderArrowRightFooter } from '../../components'

export default class GenderScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            gender: '',
        }
    }

    renderHeader = () => {
        return (
            <View style={styles.header}>
                {renderArrowLeftHeader({ onPress: this.props.onClickBack })}
                {renderSkipHeader({ onPress: this.props.onClickSkip })}
            </View>
        )
    }

    renderFooter = () => {
        return (
            <View style={styles.footer}>
                {renderArrowRightFooter({ onPress: this.props.onClickNext })}
            </View>
        )
    }

    onPressGender = (gender) => () => {
        this.setState({
            gender: gender
        })
    }
    renderGenderItem = (source, gender) => {
        const style = this.state.gender == gender ? styles.genderChosen : {}
        return (
            <View style={{ ...style, ...styles.gender }}>
                <TouchableOpacity
                    style={styles.imageWrapper}
                    onPress={this.onPressGender(gender)}>
                    <Image style={styles.imageGender} resizeMode="cover" source={source}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container} >
                {this.renderHeader()}
                <View style={styles.contentWrapper}>
                    {this.renderGenderItem(IMAGES.male, 'male')}
                    {this.renderGenderItem(IMAGES.female, 'female')}
                </View>
                {this.renderFooter()}
            </View>
        )
    }
}
