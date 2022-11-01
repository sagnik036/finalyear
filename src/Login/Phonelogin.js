import { 
  View, 
  Text, 
  Dimensions, 
  TextInput, 
  TouchableOpacity,
  StatusBar, 
  StyleSheet, } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get("window");

export default function Phonelogin() {
  const [Phonenumber, setPhonenumber] = useState("");
  return (
    <View style={styles.container}>
    <Text style={styles.text1}>Please enter your phone number</Text>
    <Text style={styles.text2}>We will send you an verification code to your phone number</Text>
    <TextInput
        //Add styles,defualt value,keyboard type for Phone number
        style={styles.textinput}
        placeholder="Phone Number"
        onChangeText={(value) => setPhonenumber(value)}
        keyboardType= 'numeric'
        value={Phonenumber}
    />
    <TouchableOpacity style={styles.nextBtn} onPress={()=>console.log("Pressed")}>
        <Text style={styles.nextStyle}>Next</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
    },

    text1: {
        fontSize: 35,
        fontWeight: "700",
        width: width / 1.1,
        //position: "absolute",
        top: width / 5,
        color: "black",
      },
      
    text2: {
        fontSize: 18,
        fontWeight: "100",
        width: width / 1.1,
        //position: "relative",
        top: width / 4,
        color: "black",
      },

    textinput: {
        borderWidth: 1,
        shadowColor: 'red',
        elevation: 5,
        borderColor: "red",
        padding: 8,
        margin: 10,
        width: 310,
        height: 50,
        borderRadius: 12,
        backgroundColor: "white",
        top: width / 2.5,
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
        top: width / 1.2,
      },

    nextStyle: {
        color: "white",
        fontSize: 21,
        fontFamily: "Roboto",
        textAlign: "center",
      },
});