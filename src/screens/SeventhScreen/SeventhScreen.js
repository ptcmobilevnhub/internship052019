import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions
} from "react-native";
import { IMAGES, FONTS } from "../../../assets";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './styles';
export default class SeventhScreen extends Component {

  renderHeader = () => {
    return (
      <Header
        HeaderLeft={
          <Image style={styles.logoContainer} source={IMAGES.logo} />
        }
      />
    );
  };

  renderContent = () => {
    return (
      <View>
        <Image
          source={IMAGES.cityImage}
          resizeMode="stretch"
          style={styles.imageContainer}
        />
        <Text style={styles.title}>
          Ride easy with real time trip updates
          </Text>
        <Text style={styles.content}>
          Please enable push notifications from uber when prompted
          </Text>
      </View>
    );
  };

  renderFooter = (navigation) => {
    return (
      <View style={{ marginRight: 30 }}>
        <Footer
          FooterRight={<Image source={IMAGES.arrowRightBlack} />}
          navigation={navigation}
          place="EighthScreen"
        />
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter(navigation)}
        </View>
      </ScrollView>
    );
  }
}
