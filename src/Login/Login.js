import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import { Authcontext } from "../../api/Authcontext";
import Spinner from "react-native-loading-spinner-overlay";
const { height, width } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const { isLoading, login } = useContext(Authcontext);
  // useEffect(() =>{
  // google.accounts.id.initialize({
  //   client_id:" ";
  //   callback: handleCallbackResponse
  // })
  // }, []);
  return (
    <View style={styles.container}>
      <Spinner color="red" visible={isLoading} />
      <Text style={styles.text2}>Please enter your Email</Text>

      <TextInput
        //Add styles,defualt value,keyboard type for Username
        style={styles.input}
        keyboardType="default"
        placeholder="Email"
        value={username}
        onChangeText={(value) => setUsername(value)}
      />

      <TextInput
        //Add styles,secureTextEntry,keyboard type(optional) for Password
        style={styles.input}
        // secureTextEntry=[true]
        secureTextEntry={true}
        keyboardType="numeric"
        placeholder="Password"
        value={pass}
        onChangeText={(value) => setPass(value)}
      />

      {username == "" || pass == "" ? (
        <TouchableOpacity style={styles.nextBtndisable} disabled={true}>
          <Text style={styles.nextStyle}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.nextBtn1}
          onPress={() => login(username, pass)}
        >
          <Text style={styles.nextStyle}>Login</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.text3}>
        Don't have an account?{" "}
        <Text style={styles.underlineTextStyle1}>Create Account</Text>
      </Text>

      <Text style={styles.text4}>
        By login you agree with our{" "}
        <Text style={styles.underlineTextStyle1}>Terms and Conditions</Text>{" "}
        <Text>and</Text>{" "}
        <Text style={styles.underlineTextStyle1}>Privacy policy</Text>
      </Text>
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
  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white",
    padding: 8,
    width: 280,
    height: 50,
    margin: 10,
  },
  nextBtn1: {
    borderRadius: 20,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: width / 1.4,
    height: 60,
    bottom: -30,
  },
  text3: {
    fontSize: 13,
    // position: "absolute",
    top: width / 6,
    textAlign: "center",
  },
  underlineTextStyle1: {
    color: "#EE4E4E",
    textDecorationLine: "underline",
  },

  nextStyle: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },

  text2: {
    color: "red",
    fontSize: 30,
    bottom: width / 4.5,
  },
  text4: {
    fontSize: 13,
    //alignItems: "center",
    top: width / 1.6,
    flexDirection: "column",
    width: width / 1.2,
  },
  nextBtndisable: {
    borderRadius: 20,
    backgroundColor: "black",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: width / 1.4,
    height: 60,
    bottom: -30,
  },
});
