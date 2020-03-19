import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  cardGeneration: {
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  imageThumbnail: {
    width: 100,
    height: 50
  }
});

export default style;
