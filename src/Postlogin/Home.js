import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { Button, IconButton } from "react-native-paper";
const { height, width } = Dimensions.get("window");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
       <IconButton
        icon="menu"
        iconColor="black"
        mode= "contained"
        size={35}
        style={styles.nav}
        onPress={() => navigation.navigate("sidebar")}
        >
      </IconButton>
      <IconButton
        icon="bell"
        iconColor="white"
        mode= "contained"
        size={14}
        style={styles.notification}
        >
      </IconButton>
      <Text style={styles.name}>N.D Mukhesh</Text>
      <Text style={styles.SName}>
        Owner of
        <Text style={styles.S2name}> Med Pharm</Text>
      </Text>
      <Text style={styles.Sdetail}>
        Medicine Store{"    "}
        <Text>In Kudghat</Text>
      </Text>

      <Image
        style={styles.profilepic}
        source={{
          uri: "https://images.news18.com/ibnlive/uploads/2021/10/gus-fring--16336703954x3.jpg",
        }}
      />

      <Text style={styles.CurrentPost}>Current Post</Text>

      <Text style={styles.currentdetail}>No posts yet</Text>

      <Button
        icon="pencil"
        mode="elevated"
        textColor="white"
        style={styles.postjob}
        onPress={() => navigation.navigate("Job Details")}
      >
        Post
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    position: "absolute",
    left: 10,
    top: 10,
    bottom: 88,
    backgroundColor: "white",
    justifyContent: 'center',
    padding: 1,
    borderRadius: 50,
    alignItems: 'center',
  },
  notification: {
    position: "absolute",
    right: 10,
    top: 20,
    bottom: 88,
    backgroundColor: "red",
    justifyContent: 'center',
    padding: 1,
    borderRadius: 50,
    alignItems: 'center',
  },
  name: {
    position: "absolute",
    alignItems: "center",
    display: "flex",
    width: 117,
    height: 21,
    left: 118,
    top: 166,
    fontSize: 18,
    color: "#0F0F0F",
    fontWeight: "900",
  },
  SName: {
    position: "absolute",
    alignItems: "center",
    display: "flex",
    width: 182,
    height: 21,
    left: 118,
    top: 195,
    fontSize: 18,
    color: "#5C5C5C",
    fontWeight: "400",
  },
  S2name: {
    color: "#241E20",
    fontWeight: "600",
  },
  Sdetail: {
    position: "absolute",
    alignItems: "center",
    display: "flex",
    width: 200,
    //height: 16,
    left: 118,
    top: 218,
    fontSize: 14,
    color: "#5C5C5C",
    fontWeight: "300",
  },
  profilepic: {
    position: "absolute",
    width: 60,
    height: 60,
    left: 42,
    top: 170,
    borderRadius: 50,
    //borderColor: "red",
  },
  CurrentPost: {
    position: "absolute",
    alignItems: "center",
    display: "flex",
    width: 113,
    height: 21,
    left: 30,
    bottom: 550,
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
  currentdetail: {
    position: "relative",
    alignItems: "center",
    display: "flex",
    width: 280,
    height: 500,
    left: 62,
    top: 200,
    fontSize: 20,
    color: "#5C5C5C",
    fontWeight: "200",
  },
  postjob: {
    position: "absolute",
    width: 87,
    height: 41,
    right: 32,
    bottom: 142,
    borderRadius: 7,
    elevation: 50,
    backgroundColor: "#FF0606",
  },
});
