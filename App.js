import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  SnapshotViewIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  // const [first, setfirst] = React.useState("");
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 96 }}>Hi How can i help you</Text> */}
      <View>
        <Text
          style={{
            // width: 300,
            // flex:1,
            marginTop: 50,
            textAlign: "center",
            backgroundColor: "#9c3af2",
            fontSize: 25,
            color: "white",
            borderWidth: 2,
            borderColor: "#a73ee8",
            padding: 8,
            // margin: 25,
          }}
        >
          N0ted
        </Text>
      </View>
      <View style={styles.input}>
        <TextInput
          onChangeText={(text) => onChangeText(text)}
          value={text}
          placeholder="Add New Note"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>Click</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.data}>
        <Text style={styles.card}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 14,
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    height: 50,
    width: 150,
    backgroundColor: "#5271ff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    elevation: 3,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#a73ee8",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 25,
  },
  data: {
    borderTopWidth: 1,
    borderTopColor: "black",
    marginTop: 25,
    paddingVertical: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    width: 120,
    padding: 12,
    borderRadius: 10,
  },
});
// const btnStyles = StyleSheet.create({
//   button: {
//     flex: 1,
//     width: 200,
//     backgroundColor: "white",
//     alignItems: "center",
//     // justifyContent: "center",
//   },
// });
