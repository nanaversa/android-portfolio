import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={navigation}>
            <AntDesign name="bars" size={27} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.header_text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "blue",
  },
  icon: {
    left: 5,
    top: 32,
    position: "absolute",
  },
  header_text: {
    color: "#fff",
    alignSelf: "center",
    top: 33,
    fontSize: 20,
  },
});

export default Header;
