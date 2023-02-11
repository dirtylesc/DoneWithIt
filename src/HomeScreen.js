import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BoyScreen from "./BoyScreen";
import GirlScreen from "./GirlScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="GD"
          options={{
            tabBarIcon: () => <Text>👧</Text>,
          }}
          component={BoyScreen}
        />
        <Tab.Screen
          name="GC"
          options={{
            tabBarIcon: () => <Text>🧑‍🦱</Text>,
          }}
          component={GirlScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
