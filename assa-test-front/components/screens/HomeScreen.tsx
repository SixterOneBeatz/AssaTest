import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LIST_SCREEN_NAME, TASKS_SCREEN_NAME } from "../../shared/constants";
import { useGlobalStyles } from "../../shared/globalStyles";

const HomeScreen = () => {
  const styles = useGlobalStyles();
  const navigation = useNavigation();

  const goToTasksScreen = () => navigation.navigate(TASKS_SCREEN_NAME as never);
  const goToListScreen = () => navigation.navigate(LIST_SCREEN_NAME as never);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToTasksScreen}>
        <Text style={styles.buttonText}>{TASKS_SCREEN_NAME}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToListScreen}>
        <Text style={styles.buttonText}>{LIST_SCREEN_NAME}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
