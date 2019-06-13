import React, { Component } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { IMAGES, FONTS } from "../../../assets";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './styles';
export default class FifthScreen extends Component {
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
                onPress={() => navigation.navigate("SixthScreen")}
              >
                Skip here
              </Text>
            }
          />
          <View style={styles.mainContainer}>
            <Image source={IMAGES.iconMen} />
            <Image source={IMAGES.iconWoman} />
          </View>
          <Footer
            FooterRight={<Image source={IMAGES.arrowRightBlack} />}
            navigation={navigation}
            place="SixthScreen"
          />
        </View>
      </ScrollView>
    );
  }
}