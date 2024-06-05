import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const InfoScreen = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer le token d'authentification stocké localement
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          // Si un token est trouvé, effectuez une requête pour récupérer les informations du profil utilisateur
          getUserProfile(token);
        } else {
          Alert.alert("Erreur", "Aucun token d'authentification trouvé");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du token d'authentification :",
          error
        );
        Alert.alert(
          "Erreur",
          "Erreur lors de la récupération du token d'authentification"
        );
      }
    };

    getToken();
  }, []);

  // Fonction pour récupérer les informations du profil utilisateur
  const getUserProfile = async (token) => {
    try {
      const response = await axios.get(
        "https://lowpriceclone.euleukcommunication.sn/api/auth/user-profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserInfo(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations du profil utilisateur :",
        error
      );
      Alert.alert(
        "Erreur",
        "Erreur lors de la récupération des informations du profil utilisateur"
      );
    }
  };

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Nom</Text>
            <View style={styles.Name}>
              <Text style={styles.infoContent}>{userInfo.first_name}</Text>
              <Text style={styles.infoContent}>{userInfo.last_name}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Email</Text>
            <Text style={styles.infoContent}>{userInfo.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Téléphone</Text>
            <Text style={styles.infoContent}>{userInfo.telephone}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Adresse</Text>
            <Text style={styles.infoContent}>
              {userInfo.addresses[0] ? (
                userInfo.addresses[0].addresse
              ) : (
                <Text>Pas d'adresse enreistree</Text>
              )}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Changer mot de passe</Text>
            <Text style={styles.infoContent}>********</Text>
          </View>
        </>
      ) : (
        
        <View>
          <Text>Chargement des informations du profil utilisateur...</Text>
          <ActivityIndicator size="large" color="#28348A" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 100,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#0000000D",
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  Name: {
    flexDirection: "row",
  },
  infoContent: {
    paddingStart: 10,
  },
});

export default InfoScreen;
