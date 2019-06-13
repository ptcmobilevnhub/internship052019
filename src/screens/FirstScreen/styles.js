import { StyleSheet } from 'react-native';
import { FONTS } from '../../../assets';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 30,
      paddingTop: 38,
      paddingBottom: 43,
      backgroundColor: "white"
    },
    welcomeImage: {
      width: "100%",
      height: 340,
      marginTop: 72
    },
    welcomeTitle: {
      lineHeight: 43,
      fontSize: 26,
      color: "black",
      fontFamily: "",
      marginTop: 54,
      marginBottom: 19,
      fontFamily: FONTS.Helvetica.Light
    },
    welcomeContent: {
      lineHeight: 16,
      fontSize: 13,
      color: "black",
      marginBottom: 113,
      fontFamily: FONTS.Helvetica.Light
    },
    buttonContainer: {
      height: 50,
      backgroundColor: "black",
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 10,
      paddingHorizontal: 25,
      justifyContent: "space-evenly"
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      alignItems: "center",
      paddingLeft: 33,
      fontFamily: FONTS.Poppins.SemiBold
    }
  });


export default styles;