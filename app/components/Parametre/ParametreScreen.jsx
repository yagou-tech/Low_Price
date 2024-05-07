import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ParametreScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.paraItem}>
        <Text>Profil</Text>
        <AntDesign name="right" size={24} color="#158A91" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
    alignItems: "center",
  },
  paraItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 350,
    height: 60,
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
});

export default ParametreScreen;