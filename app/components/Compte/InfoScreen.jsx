import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const InfoScreen = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemPress = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>Nom</Text>
        <Text style={styles.infoContent}>Makhtar Mbaye</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>Email</Text>
        <Text style={styles.infoContent}>mdm@gmail.com</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>Tél</Text>
        <Text style={styles.infoContent}>7700021200</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>Adresse</Text>
        <Text style={styles.infoContent}>Grand Mbao , Quartier Médine</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>Changer mot de passe</Text>
        <Text style={styles.infoContent}>********</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 100,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#0000000D",
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default InfoScreen;