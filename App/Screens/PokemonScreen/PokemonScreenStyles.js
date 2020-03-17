import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";
const style = StyleSheet.create({
  pokedexScreen: {
    flex: 1
  },
  pokedexText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10
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
  },
  item__display: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10
  },
  item__text: {
    textAlign: "center",
    color: "black",
    fontSize: 12
  },
  item__color: {
    textAlign: "center",
    color: "white",
    fontSize: 12
  }
});
export default style;