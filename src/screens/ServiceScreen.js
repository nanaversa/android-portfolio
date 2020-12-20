import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;

const images = [
  require("../assets/tech1.jpg"),
  require("../assets/tech2.jpg"),
  require("../assets/tech1.jpg"),
];

import Header from "../component/Header";

const ServiceScreen = ({ navigation }) => {
  const [active, setActive] = useState("0");

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    console.log(slide);
    console.log(active);

    if (slide !== active) {
      setActive({ active: slide });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Services " navigation={() => navigation.openDrawer()} />

      <View style={{ top: 10 }}>
        <Text style={styles.product}>Products</Text>
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={change}
      >
        <Image source={images[0]} style={styles.img} />
        <Image source={images[1]} style={styles.img} />
        <Image source={images[2]} style={styles.img} />
        {/* {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.img} />
        ))} */}
      </ScrollView>

      <View style={styles.dotView}>
        {images.map((i, k) => {
          return (
            <Text
              key={k}
              style={k == active ? styles.active_dot : styles.dot}
            ></Text>
          );
        })}
      </View>

      {/* <View style={styles.right}>
        <TouchableOpacity onPress={() => alert("right")}>
          <AntDesign name="right" size={27} color="blue" />
        </TouchableOpacity>
      </View> */}

      {/* <View style={styles.left}>
        <TouchableOpacity onPress={() => alert("left")}>
          <AntDesign name="left" size={27} color="blue" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.more}>
        <TouchableOpacity>
          <Text style={styles.more_text}>more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "blue",
  },
  product: {
    fontSize: 20,
    color: "blue",
    marginHorizontal: 5,
    top: 25,
  },
  img: {
    width: 310,
    height: 300,
    margin: 5,
    resizeMode: "cover",
    top: 30,
  },
  right: {
    color: "blue",
    alignSelf: "flex-end",
    bottom: 36,
    right: 70,
    backgroundColor: "#888",
  },
  left: {
    fontSize: 27,
    bottom: 65,
    left: 70,
    backgroundColor: "#888",
    width: 30,
  },
  more: {
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#888",
    borderRadius: 10,
  },
  more_text: {
    padding: 10,
    color: "#fff",
  },
  dotView: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#888",
    bottom: 80,
    margin: 3,
  },
  active_dot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "red",
    bottom: 80,
    margin: 3,
    color: "red",
  },
});

export default ServiceScreen;
