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
      flexDirection: "row",
      marginTop: 288,
      marginBottom: 248,
      paddingHorizontal: 71,
      justifyContent: "center",
      alignItems: "center"
    },
    uploadText: {
      fontSize: 28,
      fontFamily: FONTS.Helvetica.Light,
      color: "rgb(53,59,80)",
      marginLeft: 35
    },
    camera: {
      marginLeft: 47,
      marginRight: 46,
      marginTop: 50,
      marginBottom: 51
    }
  });

export default styles;
