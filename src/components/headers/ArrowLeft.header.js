import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { IMAGES } from '../../assets'

const ArrowLeftHeader = ({onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image
                style={styles.icon}
                resizeMode='cover'
                source={IMAGES.arrowLeft.black}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 84,
        height: 84,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 24,
        height: 24
    }
})

export default ArrowLeftHeader;

