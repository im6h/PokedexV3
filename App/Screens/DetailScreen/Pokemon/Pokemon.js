import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import colors from "../../../Themes/Colors";
class Pokemon extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: colors.Water,
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
        >
          <Text>{this.props.pokemon.num}</Text>
          <Text>{this.props.pokemon.name}</Text>
          <Image
            style={{ position: "absolute", height: 100, width: 100, top: 90 }}
            source={{ uri: this.props.pokemon.img }}
          />
        </View>
        <View
          style={{
            flex: 7,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 40,
            padding: 20
          }}
        >
          {/* Info pokemon */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "transparent",
              backgroundColor: "#F2F2F2",
              borderRadius: 24,
              justifyContent: "center",
              marginBottom: 10,
              padding: 20
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text>Weight</Text>
              <Text>{this.props.pokemon.weight}</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text>Height</Text>
              <Text>{this.props.pokemon.height}</Text>
            </View>
          </View>
          {/* Type pokemon */}
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "transparent",
              backgroundColor: "#F2F2F2",
              borderRadius: 24,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
              padding: 20,
              width: "100%"
            }}
          >
            <Text>Type</Text>
            <View style={{}}>
              <FlatList
                numColumns={4}
                data={this.props.pokemon.type}
                listKey={({ item }, i) => i.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{
                      borderWidth: 0.2,
                      borderColor: "transparent",
                      backgroundColor: colors[item],
                      borderRadius: 11,
                      marginRight: 4,
                      padding: 5
                    }}
                  >
                    <Text>{item}</Text>
                  </View>
                )}
              />
            </View>
          </View>
          {/* Weakness pokemon */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "transparent",
              backgroundColor: "#F2F2F2",
              borderRadius: 24,
              justifyContent: "center",
              marginBottom: 10,
              padding: 20,
              width: "100%"
            }}
          >
            <Text>Weaknesses</Text>
            <View style={{}}>
              <FlatList
                numColumns={4}
                data={this.props.pokemon.weaknesses}
                listKey={({ item }, i) => i.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{
                      borderWidth: 0.2,
                      borderColor: "transparent",
                      backgroundColor: colors[item],
                      borderRadius: 11,
                      marginRight: 4,
                      padding: 5
                    }}
                  >
                    <Text>{item}</Text>
                  </View>
                )}
              />
            </View>
          </View>
          {/* Stronger pokemon */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "transparent",
              backgroundColor: "#F2F2F2",
              borderRadius: 24,
              justifyContent: "center",
              marginBottom: 10,
              padding: 20
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text>Weight</Text>
              <Text>{this.props.pokemon.weight}</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text>Height</Text>
              <Text>{this.props.pokemon.height}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Pokemon;
