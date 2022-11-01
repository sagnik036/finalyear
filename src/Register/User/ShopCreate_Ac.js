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

export default function ShopCreate_Ac({ navigation }) {
  const [Name, SetName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, SetPass] = useState("");
  const [Phone, SetPhone] = useState("");
  const [error, Seterror] = useState("");

  validation = () => {
    if (Name === "" && Email === "" && Pass === "" && Phone === "") {
      Seterror("All fields are empty");
    } else if (Name === "") {
      Seterror("Name should not be empty");
    } else if (Name.length < 3) {
      Seterror("Invalid Name");
    } else if (Email === "") {
      Seterror("Empty Mail");
    } else if (Pass.length === 0) {
      Seterror("Password is empty");
    } else if (Pass.length < 6) {
      Seterror("Password should have more than 6 characters");
    } else if (Pass.indexOf(" ") >= 0) {
      Seterror("Password should not have whitespace");
    } else if (Phone.length != 10) {
      Seterror("Invalid Phone number");
    } else {
      navigation.navigate("2");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Create Account</Text>
      <Text style={styles.text2}>
        Sign up to post new jobs and get items delivered
      </Text>

      <Text style={styles.Error}>{error}</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Full Name"
        keyboardType="default"
        onChangeText={(value) => SetName(value)}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value) => SetPass(value)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Phone-Number"
        keyboardType="numeric"
        onChangeText={(value) => SetPhone(value)}
      />

      <TouchableOpacity style={styles.nextBtn} onPress={validation}>
        <Text style={styles.nextStyle}>Next</Text>
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
    //justifyContent: "center",
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
  Error: {
    color: "red",
    textAlign: "center",
    top: width / 2,
    fontSize: 15,
  },
});
