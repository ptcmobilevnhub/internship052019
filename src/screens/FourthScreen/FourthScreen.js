import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import { IMAGES, FONTS } from "../../../assets";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './styles';
export default class FourthScreen extends Component {
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
                onPress={() => navigation.navigate("FifthScreen")}
              >
                Skip here
              </Text>
            }
          />
          <View style={styles.mainContainer}>
            <Text style={styles.name}>Enter your Name</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Shadhin arafat"
              placeholderTextColor="rgb(53,59,80)"
            />
          </View>
          <Footer
            FooterRight={<Image source={IMAGES.arrowRightBlack} />}
            navigation={navigation}
            place="FifthScreen"
          />
        </View>
      </ScrollView>
    );
  }
}


