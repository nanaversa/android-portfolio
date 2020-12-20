import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-vector-icons/Entypo";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AboutScreen from "./src/screens/AboutScreen";
import HomeScreen from "./src/screens/HomeScree";
import ServiceScreen from "./src/screens/ServiceScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ContactScreen from "./src/screens/ContactScreen";

// const AppSwitchNavigator = createSwitchNavigator({
//   Home: HomeScreen,
//   About: AboutScreen,
// });

const drawerContentComponents = (props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#abcd" }}>
    <View style={{ height: 140, alignSelf: "center", marginTop: 10 }}>
      <Image
        source={require("./src/assets/messi1.jpg")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          alignSelf: "center",
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="home" color={tintColor} size={23} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="user" color={tintColor} size={22} />
        ),
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "black",
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
  }
);

const AppStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign
              name="bars"
              size={27}
              style={{ margin: 5 }}
              color="white"
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => alert("i love you")}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={27}
              color="white"
            />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
      };
    },
  }
);

const MainDrawer = createDrawerNavigator(
  {
    Dashboard: AppStackNavigator,
    Services: ServiceScreen,
    Contact: ContactScreen,
    About: AboutScreen,
  },

  {
    contentComponent: drawerContentComponents,
  }
);

const AppNavigator = createAppContainer(MainDrawer);

const App = () => {
  return <AppNavigator />;
};

export default App;
