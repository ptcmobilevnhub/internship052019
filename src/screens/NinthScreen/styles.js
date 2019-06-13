import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../../assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingTop: 40
  },

  name: {
    fontSize: 16,
    fontFamily: FONTS.Helvetica.Light,
    color: "black",
    lineHeight: 16
  },
  number: {
    marginRight: 5,
    fontSize: 13.4,
    fontFamily: FONTS.Helvetica.Light,
    color: "black",
    lineHeight: 16,
    opacity: 0.57
  },
  savedAddressTitle: {
    fontSize: 24,
    marginTop: 45,
    marginBottom: 21,
    lineHeight: 36,
    fontFamily: FONTS.Helvetica.Light,
    color: "black"
  },
  savedAddressesItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23
  },
  savedAddressesItemIconContainer: {
    backgroundColor: "rgb(248,248,249)",
    height: 37,
    width: 37,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  },
  savedAddressesItemIcon: {
    width: 22,
    height: 20
  },
  savedAddressesItemTitle: {
    paddingTop: 10,
    fontSize: 18,
    color: "black",
    lineHeight: 16,
    fontFamily: FONTS.Helvetica.Light
  },
  savedAddressesItemAddress: {
    fontSize: 13,
    lineHeight: 16,
    color: "black",
    fontFamily: FONTS.Helvetica.Light,
    opacity: 0.57
  },
  nearbyTitle: {
    paddingTop: 5,
    marginBottom: 10,
    fontSize: 18,
    color: "black",
    lineHeight: 16,
    fontFamily: FONTS.Helvetica.Light
  },
  nearbyContainer: {
    backgroundColor: "rgba(37,55,64,0.36)",
    height: 180,
    borderRadius: 10
  },
  nearbyItemTitle: {
    marginTop: 120,
    marginLeft: 19,
    marginBottom: 4,
    color: "white",
    fontSize: 18,
    fontFamily: FONTS.Helvetica.Regular
  },
  nearbyItemAddress: {
    marginLeft: 19,
    color: "white",
    fontSize: 14,
    fontFamily: FONTS.Helvetica.Light
  },
  friendNearbyContainer: {
    width: 129,
    height: 167,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 1,
    marginBottom: 73,
    elevation: 5
  },
  friendNearbyTitle: {
    paddingTop: 5,
    marginTop: 33,
    marginBottom: 10,
    fontSize: 18,
    color: "black",
    lineHeight: 16,
    fontFamily: FONTS.Helvetica.Light
  },
  avatarFriend: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 20
  },
  friendNearbyItemTitle: {
    paddingTop: 3,
    marginLeft: 15,
    fontSize: 18,
    color: "black",
    lineHeight: 16,
    fontFamily: FONTS.Helvetica.Light
  },
  friendNearbyItemDetail: {
    marginLeft: 15,
    fontSize: 13.4,
    color: "black",
    lineHeight: 16,
    opacity: 0.57,
    fontFamily: FONTS.Helvetica.Light
  },
  tabContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12
  }
});

export default styles;
