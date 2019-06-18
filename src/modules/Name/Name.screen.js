import React, { PureComponent } from 'react'
import { Text, View, TextInput } from 'react-native'

import styles from './Name.screen.styles'

import { renderArrowLeftHeader, renderSkipHeader, renderArrowRightFooter } from '../../components'

export default class NameScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.name
        }
    }

    renderHeader = (onClickBack, onClickSkip) => {
        return (
            <View style={styles.header}>
                {renderArrowLeftHeader({ onPress: onClickBack })}
                {renderSkipHeader({ onPress: onClickSkip })}
            </View>
        )
    }

    renderTextTittle = () => {
        return (
            <Text style={styles.title}>Enter your Name</Text>
        )
    }

    renderInputName = () => {
        return (
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                editable={true} />
        )
    }

    renderFooter = (onClickNext) => {
        return (
            <View style={styles.footer}>
                {renderArrowRightFooter({ onPress: onClickNext(this.state.text) })}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader(this.props.onClickBack, this.props.onClickSkip)}
                <View style={styles.contentWrapper}>
                    {this.renderTextTittle()}
                    {this.renderInputName()}
                </View>
                {this.renderFooter(this.props.onClickNext)}
            </View>
        )
    }
}
