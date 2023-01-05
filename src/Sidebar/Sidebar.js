import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from "react-native-paper";

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <Button
        textColor="#FF0606"
        style={styles.logout}
        onPress={() => navigation.navigate()}
      >
        Log out
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    logout: {
        position: "absolute",
        width: 87,
        height: 45,
        left: 50,
        bottom: 142,
        borderRadius: 15,
        borderColor: "#FF0606",
        borderWidth: 2,
    },
})