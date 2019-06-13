import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
export default class Header extends Component {

  checkHeaderLeftNavigation = (place) => {
    if (place == '') {
      return;
    }
    else {
      this.props.navigation.goBack();
    }
  };

  checkHeaderRightNavigation = (place) => {
    if (place == '') {
      return;
    }
    else {
      this.props.navigation.navigate(place)
    }
  };

  render() {
    const { place } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.checkHeaderLeftNavigation(place)}>
          {this.props.HeaderLeft}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.checkHeaderRightNavigation(place)}>
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
