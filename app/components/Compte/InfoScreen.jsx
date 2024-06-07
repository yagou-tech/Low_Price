import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectLoading, selectError } from '../../redux/AuthentificationSlice';
import { getUserProfile } from '../../redux/UserProfileSlice';

const InfoScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (user) {
      // Si l'utilisateur est authentifié, récupérez les informations de profil utilisateur
      dispatch(getUserProfile());
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert('Erreur', error);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#28348A" />
      ) : (
        <>
          <InfoItem title="Nom" content={`${user.first_name} ${user.last_name}`} />
          <InfoItem title="Email" content={user.email} />
          <InfoItem title="Téléphone" content={user.telephone} />
          <InfoItem title="Adresse" content={user.addresses && user.addresses.length > 0 ? user.addresses[0].addresse : "Pas d'adresse enregistrée"} />
          <InfoItem title="Changer mot de passe" content="********" />
        </>
      )}
    </View>
  );
};

const InfoItem = ({ title, content }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoTitle}>{title}</Text>
    <Text style={styles.infoContent}>{content}</Text>
  </View>
);

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
  infoContent: {
    paddingStart: 10,
  },
});

export default InfoScreen;