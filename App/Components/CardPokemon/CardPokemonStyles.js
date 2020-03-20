import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";
const style = StyleSheet.create({
  item: {
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    backgroundColor: colors.backgroundType,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  item__display: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 8
  },
  item__text: {
    textAlign: "center",
    color: "#110A0A",
    fontSize: 11
  }
});
export default style;
