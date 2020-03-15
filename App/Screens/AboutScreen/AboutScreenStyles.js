import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  content: {
    flex: 1,
    padding: 0
  },
  contentTitle: {
    flex: 2,
    flexDirection: "column",
    paddingLeft: 20,
    marginTop: 40,
    justifyContent: "center"
  },
  contentBody: {
    flex: 8,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "transparent",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: "#0B9FF2",
    padding: 15
  },
  contentBodyAbout: {
    flex: 3
  },
  contentBodyInfo: {
    flex: 9
  },
  contentBodyFooter: {
    flex: 1
  }
});
export default style;
