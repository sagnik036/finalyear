import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";


export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  // useEffect(() =>{
  // google.accounts.id.initialize({
  //   client_id:" ";
  //   callback: handleCallbackResponse
  // })
  // }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Please enter your Email</Text>

      <TextInput
        //Add styles,defualt value,keyboard type for Username
        style={styles.input}
        keyboardType="default"
        placeholder="Email"
        onChangeText={(value) => setUsername(value)}
      />
      

      <TextInput
        //Add styles,secureTextEntry,keyboard type(optional) for Password
        style={styles.input}
        // secureTextEntry=[true]
        secureTextEntry={true}
        keyboardType="numeric"
        placeholder="Password"
        onChangeText={(value) => setPass(value)}
      />
      
      <TouchableOpacity style={styles.nextBtn1}>
        <Text style={styles.nextStyle}>login</Text>
        
      </TouchableOpacity>
      
      
      <Text style={styles.text3}>Don't have an account?{" "}
      <Text 
      onPress={() => navigation.navigate("1")}
      style={styles.underlineTextStyle1}>Create Account</Text>
      </Text>

      <Text style={styles.text4}>By login you agree with our{" "}
      <Text 
      onPress={() => navigation.navigate("1")}
      style={styles.underlineTextStyle1}>Terms and Conditions</Text>{" "}
      <Text >and</Text>{" "}
      <Text 
      onPress={() => navigation.navigate("1")}
      style={styles.underlineTextStyle1}>Privacy policy</Text>
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
    margin: 20,
    alignItems: "center",
    width: 280,
    height: 50,
    bottom: -30,
  },
  text3: {
    fontSize: 12,
    // position: "absolute",
    top:50,
    left: 10,
    textAlign:"center",
    
  },
  underlineTextStyle1: {
    flexDirection: "column",
    color: "#EE4E4E",
    textDecorationLine: "underline",
    
  },
  
  nextStyle:{
    color: "white",
    fontSize: 30
  },

  text2:{
    color:"red",
    fontSize: 30,
    top: -50,
  },
  text4: {
    flexDirection: "column",
    fontSize: 12,
    alignItems:"center",
    bottom: -150
    
  },
 
});
