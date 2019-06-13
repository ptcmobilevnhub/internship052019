import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { IMAGES, FONTS } from "../../../assets";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './styles';
export default class ThirdScreen extends Component {
  render() {
    const header = <Image source={IMAGES.arrowLeftBlack} />;
    const { navigation } = this.props;
    const content = navigation.getParam('content', 'NO-CONTENT');
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header HeaderLeft={header} navigation={navigation} />
          <Text style={styles.parentText}>
            Enter the 4-digit code sent to you at {content}.
            <Text style={styles.childText}>
              did you enter the correct number?
            </Text>
          </Text>
          <View style={styles.codeContainer}>
            <TextInput
              style={{
                width: 60,
                textAlign: "center",
                fontSize: 18,
                opacity: 0.7
              }}
              placeholder="1"
              placeholderTextColor="rgb(53,59,80)"
            />
            <TextInput
              style={{
                width: 60,
                textAlign: "center",
                fontSize: 18,
                opacity: 0.7
              }}
              placeholder="2"
              placeholderTextColor="rgb(53,59,80)"
            />
            <TextInput
              style={{
                width: 60,
                textAlign: "center",
                fontSize: 18,
                opacity: 0.7
              }}
              placeholder="3"
              placeholderTextColor="rgb(53,59,80)"
            />
            <TextInput
              style={{
                width: 60,
                textAlign: "center",
                fontSize: 18,
                opacity: 0.7
              }}
              placeholder="4"
              placeholderTextColor="rgb(53,59,80)"
            />
          </View>
          <View style={styles.noticeContainer}>
            <Text style={styles.text}>I didn't receive code</Text>
            <Footer
              FooterRight={<Image source={IMAGES.arrowRightBlack} />}
              navigation={navigation}
              place="FourthScreen"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}