import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.userinfo}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s",
          }}
          style={styles.userimage}
        />
        <View>
          <Text style={{
            fontWeight: "bold",
            fontSize: 14,
            color: Colors.darkGrey,
          }}>Welcome,</Text>
          <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: Colors.black,
          }}>Om Dalbhanjan!</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}} />
      <Ionicons name="notifications-outline" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userimage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  userinfo: {
    flexDirection: "row",
    alignItems:"centre",
    gap:10,
  },
});
