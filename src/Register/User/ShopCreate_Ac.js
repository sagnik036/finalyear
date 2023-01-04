import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-web";
import { Authcontext } from "../../../api/Authcontext";
const { height, width } = Dimensions.get("window");

export default function ShopCreate_Ac({ navigation }) {
  const [Name, SetName] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Pass, SetPass] = useState("");
  const [error, Seterror] = useState("");
  const [selected, setSelected] = React.useState("");

  const { isLoading, register } = useContext(Authcontext);

  const data = [
    { key: "1", value: "USER" },
    { key: "2", value: "DELIVERY BOY" },
  ];

  // validation = () => {
  //   if (Name === "" && Email === "" && Pass === "" && Phone === "") {
  //     Seterror("All fields are empty");
  //   } else if (Name === "") {
  //     Seterror("Name should not be empty");
  //   } else if (Name.length < 3) {
  //     Seterror("Invalid Name");
  //   } else if (FName === "") {
  //     Seterror("Empty Mail");
  //   } else if (Pass.length === 0) {
  //     Seterror("Password is empty");
  //   } else if (Pass.length < 6) {
  //     Seterror("Password should have more than 6 characters");
  //   } else if (Pass.indexOf(" ") >= 0) {
  //     Seterror("Password should not have whitespace");
  //   } else if (Phone.length != 10) {
  //     Seterror("Invalid Phone number");
  //   } else {
  //     navigation.navigate("2");
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Create Account</Text>
      <Text style={styles.text2}>
        Sign up to post new jobs and get items delivered
      </Text>

      <Text style={styles.Error}>{error}</Text>

      <TextInput
        style={styles.textinput}
        placeholder="User Name"
        value={Name}
        keyboardType="default"
        onChangeText={(value) => SetName(value)}
      />

      <TextInput
        style={styles.textinput}
        placeholder="First Name"
        value={FName}
        keyboardType="default"
        onChangeText={(value) => setFName(value)}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Last Name"
        value={LName}
        keyboardType="default"
        onChangeText={(value) => setLName(value)}
      />

      <View style={styles.dropdown}>
        <SelectList
          maxHeight={90}
          search={false}
          placeholder="Account type"
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
      </View>

      <TextInput
        style={styles.textinput}
        placeholder="Password"
        value={Pass}
        secureTextEntry={true}
        onChangeText={(value) => SetPass(value)}
      />

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() =>
          //register(Name, FName, LName, selected, Pass);
          navigation.navigate("home")
        }
      >
        <Text style={styles.nextStyle}>Create Account</Text>
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
  scroll: {
    marginHorizontal: 20,
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
  dropdown: {
    padding: 4,
    margin: 8,
    width: 310,
    top: width / 1.9,
    fontSize: 15,
  },
});
