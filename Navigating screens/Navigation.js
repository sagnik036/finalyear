import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopCreate_Ac from "../src/Register/User/ShopCreate_Ac";
import ShopCreate_Ac2 from "../src/Register/User/ShopCreate_Ac2";
import Signin from "../src/Login/Signin";
import Prelog from "../src/Prelog";
import Login from "../src/Login/Login";
import React, { useContext } from "react";
import { Authcontext } from "../api/Authcontext";
import Home from "../src/Postlogin/Home";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const { userInfo } = useContext(Authcontext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.access_token ? (
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
