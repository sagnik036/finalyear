import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
        //Add styles,defualt value,keyboard type for Username
        placeholder="Username"
        onChangeText={(value) => setUsername(value)}
      />

      <TextInput
        //Add styles,secureTextEntry,keyboard type(optional) for Password
        placeholder="Password"
        onChangeText={(value) => setPass(value)}
      />

      <TouchableOpacity
      /* Add styles here */
      >
        <Text>Login button goes here</Text>
      </TouchableOpacity>
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

  /* ADD ALL THE CSS here */
});
