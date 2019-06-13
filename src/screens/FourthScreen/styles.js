import { StyleSheet } from "react-native";
import { FONTS } from "../../../assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 51,
    paddingBottom: 44,
    paddingHorizontal: 30,
    backgroundColor: "white"
  },
  mainContainer: {
    marginTop: 330,
    marginBottom: 210
  },
  name: {
    letterSpacing: -0.47,
    fontSize: 28,
    fontFamily: FONTS.Helvetica.Light
  },
  textInput: {
    height: 53,
    fontSize: 18,
    marginTop: 53,
    backgroundColor: "white",
    textAlign: "center",
    fontFamily: FONTS.Helvetica.Regular,
    opacity: 0.7,
    elevation: 20
  }
});

export default styles; 