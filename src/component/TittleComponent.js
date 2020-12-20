import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleComponent = ({ header, secondary, content, rating, reviews }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{header}</Text>
      <Text style={styles.second}>{secondary}</Text>
      <Text style={styles.rating}>{rating} (234)</Text>

      <View
        style={{
          height: 200,
          top: 85,
          borderBottomWidth: 0.3,
          flex: 1,
        }}
      >
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    left: 30,
    fontSize: 22,
    fontWeight: "bold",
    top: 10,
  },
  second: {
    fontSize: 19,
    top: 60,
    left: 30,
  },
  content: {
    fontSize: 15,
    left: 30,
    color: "#484039",
    letterSpacing: 1.5,
    bottom: 30,
    marginRight: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  rating: {
    left: 90,
    bottom: 12,
    marginRight: 7,
  },
});

export default TitleComponent;
