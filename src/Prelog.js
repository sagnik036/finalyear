import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import React from "react";

export default function Prelog({ navigation }) {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "Andriod" ? "padding" : "height"}
        style={styles.container}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/delivery-man-riding-red-scooter-illustration_9845-14.jpg?w=2000",
          }}
          style={styles.image}
        />

        <Text style={styles.Job}>Find the right job for you </Text>

        <Text style={styles.delivertext}>
          Make your products delivered from anytime anywhere
        </Text>
        <View style={styles.view2}>
          <Text style={styles.account}>Already have an acount?</Text>
          <TouchableOpacity>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.CreateAccount}
          onPress={() => navigation.navigate("1")}
        >
          <Text style={styles.textStyle}>Create Account</Text>
          <StatusBar style="auto" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  image: {
    height: 250,
    width: 400,
    marginBottom: 300,
  },
  Job: {
    position: "absolute",
    top: 450,
    fontWeight: "bold",
    fontSize: 31,
    fontFamily: "notoserif",
    textAlign: "center",
    letterSpacing: -0.085,
    lineHeight: 58,
    fontStyle: "normal",
  },
  delivertext: {
    position: "absolute",
    left: 22,
    top: 526,
    fontFamily: "sans-serif-light",
    //fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    letterSpacing: -0.085,
  },
  account: {
    color: "#9C9A9A",
    fontFamily: "sans-serif-light",
    fontSize: 16,
    top: -40,
    right: 40,
  },
  login: {
    color: "red",
    textDecorationLine: "underline",
    top: -60,
    left: 135,
  },
  view2: {
    top: 10,
    justifyContent: "center",
    alignContent: "center",
    right: -18,
  },
  CreateAccount: {
    borderRadius: 12,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: 310,
    height: 50,
  },
  textStyle: {
    color: "white",
    fontSize: 21,
    fontFamily: "Roboto",
  },
});
