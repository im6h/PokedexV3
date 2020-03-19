import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";
const style = StyleSheet.create({
  searchBar: {
    height: 40,
    width: 230,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: "transparent",
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: colors.backgroundType,
    paddingLeft: 10,
    paddingRight: 10
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  inputSearch: {
    flex: 8.5
  },
  iconSearch: {
    flex: 1.5
  }
});
export default style;
