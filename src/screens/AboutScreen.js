import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

import Header from "../component/Header";
import { AntDesign } from "@expo/vector-icons";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header title="About " />

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <AntDesign name="bars" size={27} color="#fff" style={styles.icon} />
      </TouchableOpacity>
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
    marginBottom: 470,
  },
});

export default AboutScreen;
