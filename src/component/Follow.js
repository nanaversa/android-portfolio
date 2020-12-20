import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Follow = ({
  appreciation,
  following,
  followers,
  app_count,
  app_followers,
  app_following,
}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.row_text}>{appreciation}</Text>
      <Text style={styles.app_count}>{app_count}</Text>

      <Text style={styles.row_text}>{followers}</Text>
      <Text style={styles.app_followers}>{app_followers}</Text>

      <Text style={styles.row_text}>{following}</Text>
      <Text style={styles.app_following}>{app_following}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  row_text: {
    borderBottomWidth: 1,
    color: "#bbb",
    fontSize: 11,
    marginVertical: 5,
    borderBottomColor: "#bbb",
  },
  app_count: {
    right: 64,
    fontSize: 18,
    bottom: 17,
    color: "#3477EA",
  },
  app_followers: {
    right: 55,
    fontSize: 18,
    bottom: 17,
    color: "#3477EA",
  },
  app_following: {
    right: 48,
    fontSize: 18,
    bottom: 17,
    color: "#3477EA",
  },
});

export default Follow;
