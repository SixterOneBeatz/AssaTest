import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useGetElementsQuery } from "../../services/mockApiService";
import { Element } from "../../models/Element";

const ListScreen = () => {
  const { data, error, isLoading } = useGetElementsQuery();

  const renderItem = ({ item }: { item: Element }) => (
    <TouchableOpacity style={listStyles.listItem}>
      <Text style={listStyles.listItemText}>{item.name}</Text>
      <Image
        source={{ uri: item.avatar }}
        style={listStyles.listItemImage}
        defaultSource={require("../../assets/contact.png")}
      />
    </TouchableOpacity>
  );

  return (
    <View style={listStyles.container}>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <View style={listStyles.loadingContainer}>
          <Image
            source={require("../../assets/loading.gif")}
            style={listStyles.loadingImage}
          />
        </View>
      ) : data ? (
        <FlatList
          data={data}
          keyExtractor={(item: Element, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  );
};

export default ListScreen;

const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  listItemText: {
    color: "#333333",
    fontSize: 16,
  },
  listItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImage: {
    width: 50,
    height: 50,
  },
});
