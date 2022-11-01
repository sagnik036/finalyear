import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopCreate_Ac from "./src/Register/User/ShopCreate_Ac";
import ShopCreate_Ac2 from "./src/Register/User/ShopCreate_Ac2";
import Signin from "./src/Login/Signin";
import Prelog from "./src/Prelog";
import Login from "./src/Login/Login";
import Phonelogin from "./src/Login/Phonelogin";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="Prelogin"
          component={Prelog}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="1"
          component={ShopCreate_Ac}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="2"
          component={ShopCreate_Ac2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="phonelogin"
          component={Phonelogin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
