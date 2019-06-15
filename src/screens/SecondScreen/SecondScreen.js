import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  AsyncStorage
} from 'react-native';
import { IMAGES, FONTS } from "../../../assets";
import styles from './styles';
export default class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  _registerAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.input);
    this.props.navigation.navigate('ThirdScreen', {
      content: this.state.input,
    })
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={IMAGES.peopleImage}
              resizeMode='stretch'
              style={{ width: Dimensions.get('window').width, height: 589 }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Get moving with Uber</Text>
            <View style={styles.mobileContain}>
              <Text style={styles.text}>+84</Text>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid='transparent'
                placeholder='Enter your mobile number'
                placeholderTextColor='rgb(53,59,80)'
                onChangeText={(text) => this.setState({input: text})}
                onSubmitEditing={ this._registerAsync }
              />
            </View>
            <Text style={styles.textLink}>
              Or connect using a social account.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
