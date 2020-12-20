import { Image } from "react-native";
import React from "react";

const data = [
  {
    name: "ignatius#1",
    img: (
      <Image
        source={require("../assets/4.jpg")}
        style={{ width: 295, height: 345, borderRadius: 5 }}
      />
    ),
    rating: 5,
  },
  {
    name: "ignatius#2",
    img: (
      <Image
        source={require("../assets/2.jpg")}
        style={{ width: 295, height: 345, borderRadius: 5 }}
      />
    ),
    rating: 4,
  },
  {
    name: "ignatius#3",
    img: (
      <Image
        source={require("../assets/3.jpg")}
        style={{ width: 295, height: 345, borderRadius: 5 }}
      />
    ),
    rating: 3,
  },
  //   {
  //     name: "ignatius#4",
  //     img: (
  //       <Image
  //         source={require("../assets/1.jpg")}
  //         style={{ width: 295, height: 295, borderRadius: 5 }}
  //       />
  //     ),
  //   },
];

module.exports = data;
