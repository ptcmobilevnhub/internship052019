import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { IMAGES, FONTS } from "../../../assets";
import styles from './styles';
import {
  savePhone
} from "../../store/actions/index";

import { connect } from 'react-redux';
class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  _registerAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.input);
    this.props.navigation.navigate('ThirdScreen');
  };

  phoneHandler = () => {
    this.props.onSavePhone(this.state.input);
  };


  renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={IMAGES.peopleImage}
          resizeMode='stretch'
          style={{ width: Dimensions.get('window').width, height: 589 }}
        />
      </View>
    );
  };

  renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get moving with Uber</Text>
        <View style={styles.mobileContain}>
          <Text style={styles.text}>+84</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid='transparent'
            placeholder='Enter your mobile number'
            placeholderTextColor='rgb(53,59,80)'
            onChangeText={(text) => this.setState({ input: text })}
            onEndEditing={this.phoneHandler}
            onSubmitEditing={this._registerAsync}
            value={this.state.input}
          />
        </View>
        <Text style={styles.textLink}>
          Or connect using a social account.
            </Text>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderImage()}
          {this.renderContent()}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    phone: state.profile.phone
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSavePhone: phone => dispatch(savePhone(phone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);