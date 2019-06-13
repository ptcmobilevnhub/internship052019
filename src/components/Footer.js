import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export default class Footer extends Component {
  render() {

    const { place } = this.props;

    return (
      <View>
        {this.props.FooterLeft}
        <TouchableOpacity style={styles.footer}  onPress={() => this.props.navigation.navigate(place)}>
          {this.props.FooterRight}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "white",
    elevation: 5
  }
});
