import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { IMAGES } from '../../assets'

const ArrowRightFooter = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Image
                source={IMAGES.arrowRight.black}
                resizeMode='cover'
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f8f8f8',
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 30,
        height: 30
    }
})

export default ArrowRightFooter;

