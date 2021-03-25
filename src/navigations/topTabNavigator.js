import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Completed, Pending } from "../screens";
import { COLORS, FONTS } from "../constants";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const tabBarOptions = {
    style: {
      elevation: 0,
      backgroundColor: COLORS.white,
      marginTop: 40,
    },
    labelStyle: {
      color: COLORS.primary,
      ...FONTS.body2,
      fontWeight: "600",
      lineHeight: 20,
      textAlign: "left",
    },
    indicatorStyle: {
      backgroundColor: "rgba(9, 132, 227, 0.2)",
      width: 123,
      height: 60,
      borderRadius: 21,
    },
    indicatorContainerStyle: { alignItems: "center" },
  };

  return (
    <Tab.Navigator
      initialRouteName="Pending"
      tabBarOptions={{
        style: {
          elevation: 0,
          backgroundColor: COLORS.white,
          marginTop: 40,
        },
        labelStyle: {
          color: COLORS.primary,
          ...FONTS.body2,
          fontWeight: "600",
          lineHeight: 20,
          marginBottom: 10,
          alignSelf: "center",
          textTransform: "capitalize",
        },
        indicatorStyle: {
          backgroundColor: "rgba(9, 132, 227, 0.2)",
          height: 60,
          borderRadius: 21,
        },
      }}
    >
      <Tab.Screen
        name="Pending"
        component={Pending}
        options={{ tabBarLabel: "Pending" }}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        options={{ tabBarLabel: "Completed" }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
