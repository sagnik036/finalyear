import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Log in</Text>
      <TouchableOpacity style={styles.nextBtn1}>
        <Text style={styles.nextStyle}>Email</Text>
      </TouchableOpacity>
      <Text style={styles.text2}>Or</Text>
      <TouchableOpacity style={styles.nextBtn2}>
        <Text style={styles.nextStyle}>Phone number</Text>
      </TouchableOpacity>
      <Text style={styles.text3}>Don't have an account? </Text>
      <TouchableOpacity
        style={styles.CreateAccountUnderline}
        onPress={() => {
          navigation.navigate("1");
        }}
      >
        <Text style={styles.underlineTextStyle}>Create account</Text>
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
    justifyContent: "center",
  },

  text1: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: "25%",
    color: "#EE4E4E",
  },

  nextBtn1: {
    borderRadius: 12,
    backgroundColor: "#EE4E4E",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: 310,
    height: 60,
    bottom: 30,
  },

  nextStyle: {
    color: "white",
    fontSize: 25,
    position: "relative",
  },

  text2: {
    fontSize: 15,
    position: "relative",
    bottom: "4%",
  },

  nextBtn2: {
    borderRadius: 12,
    backgroundColor: "#EE4E4E",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: 310,
    height: 60,
    bottom: 30,
  },

  text3: {
    fontSize: 12,
    position: "absolute",
    bottom: 335,
    left: 100,
  },

  underlineTextStyle: {
    fontSize: 12,
    color: "#EE4E4E",
    textDecorationLine: "underline",
    bottom: 18,
    right: -70,
  },
});
