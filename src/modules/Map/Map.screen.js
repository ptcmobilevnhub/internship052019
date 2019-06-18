import React, { PureComponent } from 'react';
import { Image, View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../assets';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './Map.screen.styles'

import { renderLogoHeader, renderProfileHeader } from '../../components'

export default class MapsScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.savedAddresses = [
            {
                icon: '',
                title: 'Bdlive24.com',
                address: 'Hourse 57, road-8, Block-D, niketon, Gulshan'
            },
            {
                icon: '',
                title: 'Daffodil internationalUniversity',
                address: 'Mirpur Rd, Dhanmondi 32 Bustop'
            }
        ];

    }

    renderHeader = () => {
        return (
            <View style={styles.header}>
                <View style={styles.logo}>{renderLogoHeader(35)}</View>
                {renderProfileHeader({ onPress: this.props.onPressProfile })}
            </View>
        )
    }

    renderAddressSection = () => {
        return (
            <View style={styles.addressSection}>
                <FlatList
                    vertical
                    data={this.savedAddresses}
                    renderItem={this.renderAddressItem}
                    keyExtractor={(item) => item.title}
                />
            </View>
        );
    };

    renderAddressItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={this.props.onPressAddress} style={styles.addressItem}>
                <View style={styles.addressIcon}>
                    <Image resizeMode='cover' source={IMAGES.location} />
                </View>
                <View
                    style={styles.addressTextWrapper}
                >
                    <Text style={styles.addressTextTitle}>
                        {item.title}
                    </Text>
                    <Text style={styles.addressTextDetail}>
                        {item.address}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    renderMapView = () => (
        <View style={styles.mapsContainer}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                zoomEnabled={true}
                scrollEnabled={true}
            >
            </MapView>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <View style={styles.content}>
                    {this.renderMapView()}
                    <View>
                        <View style={styles.searchWrapper}>
                            <TouchableOpacity onPress={this.props.onDiscovery}>
                                <View style={styles.discoveryIcon} />
                            </TouchableOpacity>
                            <TextInput placeholder="Where to ?"
                                style={styles.searchInput} />
                        </View>
                        {this.renderAddressSection()}
                    </View>
                </View>
            </View>
        )
    }
}
