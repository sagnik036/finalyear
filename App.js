import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopCreate_Ac from "./src/Register/User/ShopCreate_Ac";
import ShopCreate_Ac2 from "./src/Register/User/ShopCreate_Ac2";
import Signin from "./src/Login/Signin";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="1" component={ShopCreate_Ac} />
        <Stack.Screen name="2" component={ShopCreate_Ac2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
