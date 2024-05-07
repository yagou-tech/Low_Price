import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <MaterialIcons name="search" size={24} color="black" />
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default SearchBar;