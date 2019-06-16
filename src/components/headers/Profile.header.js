import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'
import { IMAGES } from '../../assets'

const ProfileHeader = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
        >
            {props.name ? (
                <View style={styles.infor}>
                    <Text style={styles.name}>{props.name}</Text>
                    <View style={styles.star}>
                        <Text style={styles.textStar}>
                            {props.point}
                        </Text>
                        <Image source={IMAGES.star} />
                    </View>
                </View>) : null
            }
            <Image
                style={styles.avatar}
                resizeMode='cover'
                source={props.image || IMAGES.profile_small}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        alignSelf: "baseline",
        height: 84,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infor: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        marginRight:15
    },
    name: {
        color: 'black',
        fontSize: 15
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStar: {
        fontSize: 11,
        marginRight: 3
    },
    avatar: {
        width: 35,
        height: 35
    }
})

export default ProfileHeader;

