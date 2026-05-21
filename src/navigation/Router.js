import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
  House,
  Compass,
  User,
} from "lucide-react-native";

import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Profile from "../screens/Profile";
import WorkoutDetail from "../screens/WorkoutDetail";
import Search from "../screens/Search";
import AddWorkoutPlan from "../screens/AddWorkoutPlan";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";

import { colors } from "../../assets/theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue(),
        tabBarInactiveTintColor: colors.grey(),

        tabBarStyle: {
          height: 100,
          paddingBottom: 10,
          paddingTop: 10,
          position: "absolute",
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: "Pjs-SemiBold",
        },
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <House color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Compass color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <User color={color} size={22} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="WorkoutDetail"
        component={WorkoutDetail}
        options={{
          headerShown: false,

          animationEnabled: true,

          gestureEnabled: true,

          gestureDirection: "horizontal",

          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      <Stack.Screen
        name="SearchPage"
        component={Search}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AddWorkoutPlan"
        component={AddWorkoutPlan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

export default Router;