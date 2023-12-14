import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  Modal,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";
import { Task } from "../../models/Task";
import { useSelector, useDispatch } from "react-redux";
import { addTask, resetTasks } from "../../redux/globalSlice";
import { RootState } from "../../redux/store";

const TasksScreen = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setErrorMessage("");
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== "") {
      dispatch(addTask({ name: newTaskName }));
      setNewTaskName("");
      toggleModal();
    } else {
      setErrorMessage("Task name cannot be empty!");
    }
  };

  const renderItem = ({ item }: { item: Task }) => (
    <TouchableOpacity style={tasksStyles.taskItem}>
      <Text style={tasksStyles.taskItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={tasksStyles.container}>
      <TouchableOpacity style={tasksStyles.button} onPress={toggleModal}>
        <Text style={tasksStyles.buttonText}>New Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item: Task, index) => index.toString()}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={tasksStyles.modalContainer}>
          <View style={tasksStyles.modalContent}>
            <TextInput
              placeholder="Task Name"
              value={newTaskName}
              onChangeText={(text) => setNewTaskName(text)}
              style={tasksStyles.input}
            />
            <Text style={tasksStyles.errorText}>{errorMessage}</Text>
            <Button title="Add Task" onPress={handleAddTask} />
            <Button title="Cancel" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TasksScreen;

const tasksStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  taskItem: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  taskItemText: {
    color: "#333333",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    marginBottom: "1%",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
});
