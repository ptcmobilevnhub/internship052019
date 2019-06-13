import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  ImageBackground
} from "react-native";
import { IMAGES, FONTS } from "../../../assets";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './styles';
export default class SixthScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header
            navigation={navigation}
            HeaderLeft={<Image source={IMAGES.arrowLeftBlack} />}
            HeaderRight={
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: FONTS.SFProText.Regular,
                  color: "rgb(53,59,80)"
                }}
                onPress={() => navigation.navigate("SeventhScreen")}
              >
                Skip here
              </Text>
            }
          />
          <View style={styles.mainContainer}>
            <ImageBackground
              source={IMAGES.iconBlur}
              style={{ width: 145, height: 144 }}
            >
              <Image style={styles.camera} source={IMAGES.iconCamera} />
            </ImageBackground>
            <Text style={styles.uploadText}>Upload profile picture</Text>
          </View>
          <Footer
            FooterRight={<Image source={IMAGES.arrowRightBlack} />}
            navigation={navigation}
            place="SeventhScreen"
          />
        </View>
      </ScrollView>
    );
  }
}
