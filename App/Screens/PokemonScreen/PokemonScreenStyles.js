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
    margin: 5,
    width: "45%",
    height: 100,
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
    justifyContent: "center"
  },
  item__text: {
    textAlign: "center",
    color: "#110A0A",
    fontSize: 11
  }
});
export default style;
