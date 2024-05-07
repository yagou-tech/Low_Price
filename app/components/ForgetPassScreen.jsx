import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";

const ForgetPassScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SuccessfullyScreen");
  };
  const handleSignIn = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SignInScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.WelcomeContainer}>
        <Text style={styles.welcomeTitle}>Mot de passe oublié ?</Text>
        <Text style={styles.welcomeDescription}>
          Pour réinitialiser votre mot de passe, vous avez besoin de votre
          e-mail ou de votre numéro de téléphone portable qui peut être
          authentifié
        </Text>
      </View>
      <View style={styles.forgetImage}>
        <Image source={require("../assets/forgetpassword.png")} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <Input
          placeholder="Brandonelouis@gmail.com"
          inputContainerStyle={{
            borderBottomWidth: 0,
            width: "100%",
            height: 60,
            borderRadius: 20,
            paddingStart: 20,
            backgroundColor: "#fff",
            borderBottomWidth: 0,
          }}
        />
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
        <Button
          title="RETOUR CONNEXION"
          buttonStyle={{
            backgroundColor: "#D6CDFE",
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
          onPress={() => handleSignIn()}
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
  inputTitle: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 15,
    marginStart: 18,
  },
  buttonContainer: {
    alignItems: "center",
  },
});

export default ForgetPassScreen;
