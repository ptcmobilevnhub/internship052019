import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Header extends Component {

  checkHeaderLeftNavigation = (place, navigation) => {
    if (place == '') {
      return;
    }
    else {
      navigation.goBack(null);
    }
  };

  checkHeaderRightNavigation = async (place, navigation) => {
    if (place == '') {
      return;
    }
    else if (place == 'RegisterScreen'){
      await AsyncStorage.clear();
      navigation.navigate('RegisterScreen');
    }
    else {
      navigation.navigate(place);
    }
  };

  render() {
    const { place, navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.checkHeaderLeftNavigation(place, navigation)}>
          {this.props.HeaderLeft}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.checkHeaderRightNavigation(place, navigation)}>
          {this.props.HeaderRight}
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
});
