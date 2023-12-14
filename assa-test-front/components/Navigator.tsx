import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import TasksScreen from "./screens/TasksScreen";
import ListScreen from "./screens/ListScreen";
import {
  HOME_SCREEN_NAME,
  LIST_SCREEN_NAME,
  TASKS_SCREEN_NAME,
} from "../shared/constants";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={HOME_SCREEN_NAME} component={HomeScreen} />
        <Stack.Screen name={TASKS_SCREEN_NAME} component={TasksScreen} />
        <Stack.Screen name={LIST_SCREEN_NAME} component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
