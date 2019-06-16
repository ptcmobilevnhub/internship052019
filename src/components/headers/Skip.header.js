import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SkipHeader = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.container}>
        <Text style={styles.texts}>Skip here</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 84,
        paddingHorizontal: 30,
        alignSelf: 'baseline',
        justifyContent: 'center'
    },
    text: {
        padding: 30,
        fontSize: 18
    }
})

export default SkipHeader;