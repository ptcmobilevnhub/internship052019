import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../../assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 62
  },
  logoContainer: {
    marginLeft: 30,
    marginTop: 38,
    backgroundColor: "white"
  },
  imageContainer: {
    marginTop: 159,
    width: Dimensions.get("window").width
  },
  title: {
    marginTop: 72,
    marginLeft: 30,
    fontSize: 28,
    fontFamily: FONTS.Helvetica.Light,
    color: "black",
    lineHeight: 36
  },
  content: {
    marginTop: 18,
    marginBottom: 62,
    marginLeft: 30,
    marginRight: 100,
    fontSize: 13.4,
    fontFamily: FONTS.Helvetica.Light,
    color: "black",
    lineHeight: 16
  }
});

export default styles;
