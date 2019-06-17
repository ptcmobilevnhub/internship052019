import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import { IMAGES, FONTS } from '../../../assets';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './styles';
import { connect } from 'react-redux';

class ThirdScreen extends Component {

  renderHeader = () => {
    const header = <Image source={IMAGES.arrowLeftBlack} />;
    return <Header HeaderLeft={header} navigation={this.props.navigation} />;
  };

  renderInstruction = () => {
    return (
      <Text style={styles.parentText}>
        Enter the 4-digit code sent to you at {this.props.phone}.
            <Text style={styles.childText}>
          did you enter the correct number?
            </Text>
      </Text>
    );
  };

  renderTextCode = () => {
    return (
      <View style={styles.codeContainer}>
        <TextInput
          style={{
            width: 60,
            textAlign: 'center',
            fontSize: 18,
            opacity: 0.7
          }}
          placeholder='1'
          placeholderTextColor='rgb(53,59,80)'
        />
        <TextInput
          style={{
            width: 60,
            textAlign: 'center',
            fontSize: 18,
            opacity: 0.7
          }}
          placeholder='2'
          placeholderTextColor='rgb(53,59,80)'
        />
        <TextInput
          style={{
            width: 60,
            textAlign: 'center',
            fontSize: 18,
            opacity: 0.7
          }}
          placeholder='3'
          placeholderTextColor='rgb(53,59,80)'
        />
        <TextInput
          style={{
            width: 60,
            textAlign: 'center',
            fontSize: 18,
            opacity: 0.7
          }}
          placeholder='4'
          placeholderTextColor='rgb(53,59,80)'
        />
      </View>
    );
  };

  renderNotice = () => {
    return (
      <View style={styles.noticeContainer}>
        <Text style={styles.text}>I didn't receive code</Text>
        <Footer
          FooterRight={<Image source={IMAGES.arrowRightBlack} />}
          navigation={this.props.navigation}
          place='FourthScreen'
        />
      </View>
    );
  };

  render() {
    
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderInstruction()}
          {this.renderTextCode()}
          {this.renderNotice()}
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

export default connect(mapStateToProps)(ThirdScreen);