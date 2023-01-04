import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Log in</Text>

      <TouchableOpacity style={styles.nextBtn1}>
        <Text style={styles.nextStyle}>Phone number</Text>
      </TouchableOpacity>

      <Text style={styles.text2}>Or</Text>

      <TouchableOpacity
        style={styles.nextBtn2}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.nextStyle}>Username</Text>
      </TouchableOpacity>

      <Text style={styles.text3}>
        Don't have an account?{" "}
        <Text
          style={styles.underlineTextStyle}
          onPress={() => navigation.navigate("1")}
        >
          Create account
        </Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    fontSize: 30,
    fontWeight: "bold",
    //position: "absolute",
    bottom: width / 5,
    color: "red",
    textAlign: "center",
  },

  nextBtn1: {
    borderRadius: 12,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: width / 1.25,
    height: 60,
    bottom: width / 10,
  },

  nextStyle: {
    color: "white",
    fontSize: 25,
    //position: "absolute",
    textAlign: "center",
    width: width,
  },

  text2: {
    fontSize: 15,
    //position: "relative",
    bottom: width / 10,
  },

  nextBtn2: {
    borderRadius: 12,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: width / 1.25,
    height: 60,
    bottom: width / 10,
  },

  text3: {
    fontSize: 14,
    //position: "absolute",
    textAlign: "center",
    bottom: width / 15,
    //bottom: 335,
    //left: 85,
    //width: width / 1.71,
  },

  underlineTextStyle: {
    fontSize: 14,
    color: "red",
    textDecorationLine: "underline",
  },
});
