import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


const ParametreScreen = () => {

  const navigation = useNavigation();

  const handleLogout = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SignInScreen");
  };

  const handleConfidentiality = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("Confidentiality");
  };

  const handleParametre = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("Profil");
  };

  const handleMentionsLegales = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("MentionsLegales");
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.paraItem} onPress={handleParametre}>
        <Text>Profil</Text>
        <AntDesign name="right" size={24} color="#158A91" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.paraItem} onPress={handleConfidentiality}>
        <Text>Règles et confidentialités</Text>
        <AntDesign name="right" size={24} color="#158A91" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.paraItem} onPress={handleMentionsLegales}>
        <Text>Mentions legales</Text>
        <AntDesign name="right" size={24} color="#158A91" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.paraItem} onPress={handleLogout}>
        <Text>Se déconnecter</Text>
        <Ionicons name="log-out-outline" size={24} color="#158A91" />
      </TouchableOpacity>
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