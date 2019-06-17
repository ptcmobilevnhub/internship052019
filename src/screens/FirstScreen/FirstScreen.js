import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { IMAGES, FONTS } from "../../../assets";
import styles from './styles'
export default class FirstScreen extends Component {

  renderImage = () => {
    return (
      <View>
        <Image source={IMAGES.logo} />
        <Image
          style={styles.welcomeImage}
          source={IMAGES.welcomeImage}
          resizeMode="stretch"
        />
      </View>
    );
  };

  renderContent = () => {
    return (
      <View>
        <Text style={styles.welcomeTitle}>Your ride, on demand</Text>
        <Text style={styles.welcomeContent}>
          Whether you’re headed to work, the airport, or out on the town, Uber
          connects you with a reliable ride in minutes. One tap and a car
          comes directly to you.
        </Text>
      </View>
    );
  };

  renderButton = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("SecondScreen")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Register with Phone</Text>
          <Image source={IMAGES.arrowRightWhite} resizeMode="cover" />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderImage()}
          {this.renderContent()}
          {this.renderButton()}
        </View>
      </ScrollView>
    );
  }
}


