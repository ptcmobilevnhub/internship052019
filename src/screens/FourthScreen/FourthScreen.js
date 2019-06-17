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
import {
  saveName
} from "../../store/actions/index";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
class FourthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  _registerAsync = async () => {
    await AsyncStorage.setItem('userName', this.state.input);
    this.props.navigation.navigate('FifthScreen');
  };

  nameHandler = () => {
    const name = this.state.input;
    if (name  == ''){
      this.setState({
        input: 'Shadhin arafat'
      });
      this.props.onSaveName('Shadhin arafat');
    }
    else{
      this.props.onSaveName(this.state.input);
    }
    
  };

  renderHeader = (navigation) => {
    return (
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
    );
  };

  renderTextInput = () => {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.name}>Enter your Name</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Shadhin arafat"
          placeholderTextColor="rgb(53,59,80)"
          onChangeText={(text) => this.setState({ input: text })}
          onEndEditing={this.nameHandler}
          onSubmitEditing={this._registerAsync}
          value={this.state.input}
        />
      </View>
    );

  };

  renderFooter = (navigation) => {
    return (
      <Footer
        FooterRight={<Image source={IMAGES.arrowRightBlack} />}
        navigation={navigation}
        place="FifthScreen"
      />
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderHeader(navigation)}
          {this.renderTextInput()}
          {this.renderFooter(navigation)}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.profile.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveName: name => dispatch(saveName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FourthScreen);


