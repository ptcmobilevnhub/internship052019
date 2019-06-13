import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../../assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },

  searchBox: {
    top: 0,
    position: "absolute",
    width: Dimensions.get("window").width
  },

  headerContainer: {
    height: 200,
    backgroundColor: "rgba(255,255,255,0.6)"
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 22,
    paddingRight: 17,
    marginLeft: 30,
    marginTop: -90,
    marginRight: 30,
    backgroundColor: "white",
    borderRadius: 10
  },
  resultWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    paddingLeft: 22,
    paddingRight: 17,
    paddingVertical: 24,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "white",
    borderRadius: 10
  },
  resultItem: {
    alignItems: "flex-start",
    marginLeft: 22
  },
  inputSearch: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: "rgb(53,59,80)",
    lineHeight: 32,
    fontFamily: FONTS.Montserrat.Regular
  },
  name: {
    fontSize: 16,
    color: "rgb(53,59,80)",
    lineHeight: 32,
    fontFamily: FONTS.Montserrat.Regular
  },
  address: {
    fontSize: 13,
    color: "rgb(53,59,80)",
    lineHeight: 32,
    opacity: 0.5,
    fontFamily: FONTS.Helvetica.Regular
  }
});

export default styles;
