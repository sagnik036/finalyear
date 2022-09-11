import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function ShopCreate_Ac({ navigation }) {
  const [Name, SetNAme] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, SetPass] = useState("");
  const [Phone, SetPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Create Account</Text>
      <Text style={styles.text2}>
        Sign up to post new jobs and get items delivered
      </Text>

      <TextInput
        style={styles.textinput}
        placeholder="Full Name"
        keyboardType="default"
      />

      <TextInput
        style={styles.textinput}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.textinput}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Phone-Number"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => {
          navigation.navigate("2");
        }}
      >
        <Text style={styles.nextStyle}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  text1: {
    top: 150,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "red",
  },

  text2: {
    top: 190,
    fontFamily: "serif",
    fontSize: 18.5,
    color: "grey",
  },

  textinput: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 310,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#D3D3D3",
    top: 210,
  },

  nextBtn: {
    borderRadius: 12,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: 310,
    height: 50,
    top: 230,
  },

  nextStyle: {
    color: "white",
    fontSize: 21,
    fontFamily: "Roboto",
  },
});
