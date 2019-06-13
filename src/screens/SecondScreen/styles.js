import { StyleSheet } from "react-native";
import { FONTS } from "../../../assets";

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 0.5
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingTop: 41,
    paddingBottom: 52
  },
  title: {
    fontSize: 28,
    color: "rgb(53,59,80)",
    fontFamily: FONTS.Helvetica.Light,
    letterSpacing: -0.47
  },
  mobileContain: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 53,
    marginBottom: 54
  },
  textInput: {
    height: 53,
    fontSize: 18,
    marginRight: 30,
    backgroundColor: "white",
    textAlign: "center",
    fontFamily: FONTS.Helvetica.Regular,
    opacity: 1,
    elevation: 20
  },
  text: {
    paddingLeft: 8,
    paddingRight: 14,
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 23,
    fontSize: 18,
    alignItems: "center",
    color: "rgb(53,59,80)",
    fontFamily: FONTS.Helvetica.Regular,
    opacity: 0.7
  },
  textLink: {
    color: "rgb(38,151,172)",
    fontSize: 18,
    marginRight: 30,
    letterSpacing: -0.3,
    fontFamily: FONTS.Helvetica.Light
  }
});

export default styles;
