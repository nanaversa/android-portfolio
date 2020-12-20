import React, { useState } from "react";

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";

import Follow from "../component/Follow";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileScreen = ({ navigation }) => {
  const [app_count, set_app_Count] = useState(10);
  const [app_followers, set_app_Followers] = useState(140);
  const [app_following, set_app_Following] = useState(34);
  const [modalVisible, setModalVisible] = useState(false);
  const followBTn = () => {
    // set_app_Count(app_count + 1);
    // set_app_Followers(app_followers + 1);
    // set_app_Following(app_following + 1);

    Alert.alert(
      "Follow Versa?",
      "My alert msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("Ok pressed") },
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView style={styles.content}>
      <Image style={styles.topImg} source={require("../assets/galaxy1.png")} />
      <Image style={styles.circle} source={require("../assets/messi1.jpg")} />

      <Follow
        appreciation="Appreciation"
        followers="Followers"
        following="Following"
        app_count={app_count}
        app_followers={app_followers}
        app_following={app_following}
      />

      <View style={styles.rectangle}>
        <Text style={styles.about_header}>About Versa</Text>
        <Text style={styles.about_content}>
          Initial dimensions are set before runApplication is called so they
          should be available before any other require's are run, but may be
          updated later.
        </Text>

        <TouchableOpacity
          style={styles.follow_btn}
          onPress={() => {
            followBTn();
          }}
        >
          <Text style={styles.follow_text}>FOLLOW</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    margin: 8,
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "stretch",
  },
  content: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    height: windowHeight,
    width: windowWidth,
  },
  topImg: {
    height: 200,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    width: windowWidth,
  },

  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#76b7f9",
    alignSelf: "center",
    bottom: 140 / 2,
  },
  rectangle: {
    width: windowWidth,
    height: 150,
    flex: 1,
    backgroundColor: "#394AEC",
  },
  about_header: {
    fontSize: 18,
    color: "#FFF",
    left: 5,
  },
  about_content: {
    fontSize: 14,
    color: "#FFF",
    margin: 5,
  },
  follow_btn: {
    backgroundColor: "#fff",
    height: 30,
    width: 110,
    alignSelf: "center",
    top: 15,
    borderRadius: 8,
  },
  follow_text: {
    padding: 6,
    alignSelf: "center",
    color: "#394AEC",
    fontSize: 14,
  },
});

export default ProfileScreen;
