import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const PointsScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.addressItem}>
          <Text style={styles.addressTitle}>Adresse 1</Text>
          <FontAwesome name="edit" size={24} color="#28348A" />
        </View>
        <View style={styles.addressItem}>
          <Text style={styles.addressContent}>Grand Mbao , Quartier Médine</Text>
        </View>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.addressItem}>
          <Text style={styles.addressTitle}>Adresse 2</Text>
          <FontAwesome name="edit" size={24} color="#28348A" />
        </View>
        <View style={styles.addressItem}>
          <Text style={styles.infoTitle}>Grand Mbao , Quartier Médine</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fd",
    paddingBottom: 100,
  },
  addressContainer: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 50,
    marginBottom: 20,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default PointsScreen;
