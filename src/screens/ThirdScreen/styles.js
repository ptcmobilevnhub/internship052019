import { StyleSheet } from "react-native";
import { FONTS } from "../../../assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 29
  },
  parentText: {
    paddingRight: 50,
    fontSize: 18,
    marginTop: 113,
    fontFamily: FONTS.Helvetica.Light,
    color: "rgb(53,59,80)",
    letterSpacing: -0.3
  },
  childText: {
    fontSize: 18,
    color: "rgb(37,183,211)",
    fontFamily: FONTS.Helvetica.Light,
    letterSpacing: -0.3
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 54
  },
  noticeContainer: {
    marginTop: 100,
    marginBottom: 339,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    color: "rgb(38,151,172)",
    fontFamily: FONTS.Helvetica.Light,
    letterSpacing: -0.3
  }
});

export default styles;
