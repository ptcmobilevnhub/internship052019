import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import { IMAGES, FONTS } from "../../../assets";
import styles from "./styles";
export default class NinthScreen extends Component {

  

  renderMap = () => {
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: 10.76023,
          longitude: 106.614128,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 10.76023,
            longitude: 106.614128,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          pinColor="green"
        />
      </MapView>
    );

  };

  renderHeader = (navigation) => {
    return (
      <View style={styles.headerContainer}>
        <Header
          place='RegisterScreen'
          navigation={navigation}
          HeaderLeft={
            <Image
              style={{ marginLeft: 30, marginTop: 37, marginBottom: 37 }}
              source={IMAGES.logo}
            />
          }
          HeaderRight={
            <Image
              style={{
                width: 35,
                height: 35,
                marginRight: 30,
                marginTop: 37,
                marginBottom: 37
              }}
              source={IMAGES.iconMen}
            />
          }
        />
      </View>
    );

  }

  renderInputWrapper = (navigation) => {
    return (
      <View style={styles.inputWrapper}>
        <Icon name="square" size={20} color="rgb(53,59,80)" />
        <TextInput style={styles.inputSearch} placeholder="Where to?" onSubmitEditing={() => navigation.navigate('NinthScreen')} />
      </View>
    );
  }

  renderResultWrapper = () => {
    return (
      <View>
        <View style={styles.resultWrapper}>
          <Icon name="map-marker" size={22} color="rgb(53,59,80)" />
          <View style={styles.resultItem}>
            <Text style={styles.name}>Bdlive24.com</Text>
            <Text style={styles.address}>
              Hourse 57, road-8, Block-D, niketon, Gulshan
              </Text>
          </View>
        </View>
        <View style={styles.resultWrapper}>
          <Icon name="map-marker" size={22} color="rgb(53,59,80)" />
          <View style={styles.resultItem}>
            <Text style={styles.name}>Daffodil internationalUnerversity</Text>
            <Text style={styles.address}>Mirpur Rd, Dhanmondi 32 Bustop</Text>
          </View>
        </View>
      </View>

    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {this.renderMap()}
        <View style={styles.searchBox}>
          {this.renderHeader(navigation)}
          {this.renderInputWrapper(navigation)}
          {this.renderResultWrapper()}
        </View>
      </View>
    );
  }
}
