import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";
const style = StyleSheet.create({
  cardPokemon: {
    flex: 1
  },
  item: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 160,
    height: 105,
    backgroundColor: colors.backgroundType,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  }
});
export default style;
