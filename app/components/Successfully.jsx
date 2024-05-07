import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";

const SuccessfullyScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SignInScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.WelcomeContainer}>
        <Text style={styles.welcomeTitle}>Avec succès</Text>
        <Text style={styles.welcomeDescription}>
          Votre mot de passe a été mis à jour, veuillez changer votre mot de
          passe régulièrement pour éviter que cela ne se produise
        </Text>
      </View>
      <View style={styles.forgetImage}>
        <Image source={require("../assets/successfullmail.png")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="RÉINITIALISER LE MOT DE PASSE"
          buttonStyle={{
            backgroundColor: "#28348A",
            borderRadius: 30,
            height: 60,
          }}
          containerStyle={{
            width: 317,
            marginHorizontal: 50,
            marginVertical: 10,
            fontSize: 14,
          }}
          titleStyle={{ fontWeight: "700", fontSize: 14, margin: 5 }}
          onPress={() => handleSubmit()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  WelcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },
  welcomeDescription: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
  },
  forgetImage: {
    alignItems: "center",
    marginBottom: 50,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
});

export default SuccessfullyScreen;
