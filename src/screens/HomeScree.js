import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import TitleComponent from "../component/TittleComponent";
import { EvilIcons } from "@expo/vector-icons";
import data from "../component/data";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const images = {
  ratings: {
    1: require("../assets/5Star.jpg"),
  },
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
      pagingEnabled
    >
      <View style={styles.main_img}>
        <FlatList
          data={data}
          renderItem={({ item }) => <View style={styles.img}>{item.img}</View>}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
      <View style={{ flex: 1 }}>
        <TitleComponent
          header="Food App"
          secondary="Recipe"
          rating={5}
          content="This is a restaurant app which is developed to serve as an easy means by which individuals can order food via the internet...."
        />
        <Image
          source={images.ratings[1]}
          style={{
            width: 50,
            height: 10,
            left: 30,
            bottom: 227,
          }}
        />
      </View>

      <View style={styles.btnMore}>
        <TouchableOpacity onPress={() => alert("hi")}>
          <Text style={styles.btnText}>More Projects</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main_img: {
    height: 350,
    backgroundColor: "#65615d",
    margin: 7,
    borderRadius: 7,
    flex: 1,
  },
  btnMore: {
    backgroundColor: "#394AEC",
    alignSelf: "center",
    bottom: 8,
    borderRadius: 10,
    flex: 1,
  },
  btnText: {
    fontSize: 18,
    padding: 10,
    color: "#eee",
  },
  img: {
    marginRight: 7,
  },
});

export default HomeScreen;
