import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("window");

export default function ShopCreate_Ac2() {
  const [ShopName, SetShopNAme] = useState("");
  const [Address, setAddress] = useState("");
  const [Aadhaar, setAdhaar] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Create Account</Text>
      <Text style={styles.text2}>
        Sign up to post new jobs and get items delivered
      </Text>

      <TextInput
        style={styles.textinput}
        placeholder="Shop Name"
        keyboardType="default"
      />

      <TextInput
        style={styles.textinput}
        placeholder="Address"
        keyboardType="default"
      />

      <TextInput
        style={styles.textinput}
        placeholder="Aadhaar-Number"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.nextBtn}>
        <Text style={styles.nextStyle}>Create account</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    top: width / 3,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "red",
  },

  text2: {
    top: width / 2.4,
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
    top: width / 1.9,
    fontSize: 15,
  },

  nextBtn: {
    borderRadius: 12,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: 310,
    height: 50,
    top: width / 1.8,
  },

  nextStyle: {
    color: "white",
    fontSize: 21,
    fontFamily: "Roboto",
    textAlign: "center",
  },
});
