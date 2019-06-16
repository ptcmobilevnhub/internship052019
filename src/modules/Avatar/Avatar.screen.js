import React, { PureComponent } from 'react'
import { Image, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { IMAGES } from '../../assets'

import styles from './Avatar.screen.styles'
import { renderArrowLeftHeader, renderSkipHeader, renderArrowRightFooter } from '../../components'

export default class AvatarScreen extends PureComponent {

    // TODO Load image

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

    renderChooseImage = () => (
        <View style={styles.content}>
            <TouchableOpacity>
                <ImageBackground
                    style={styles.avatar}
                    source={IMAGES.profile}
                >
                    <Image source={IMAGES.camera} />
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
