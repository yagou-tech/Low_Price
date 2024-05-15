import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // État pour gérer la visibilité du mot de passe

  const handleLogin = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("MainScreen");
  };
  const handleSignUp = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SignUpScreen");
  };
  const handleForget = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("ForgetPassScreen");
  };

  const togglePasswordVisibility = () => {
    // Fonction pour changer la visibilité du mot de passe
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.WelcomeContainer}>
        <Text style={styles.welcomeTitle}>Bienvenue</Text>
        <Text style={styles.welcomeDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.loginTitle}>Email</Text>
          <Input
            placeholder="Brandonelouis@gmail.com"
            inputContainerStyle={styles.inputContainerStyle}
          />
        </View>
        <View>
          <Text style={styles.loginTitle}>Mot de passe</Text>
          <Input
            placeholder="Password"
            secureTextEntry={!isPasswordVisible} // Utilisez l'état pour déterminer la visibilité du mot de passe
            inputContainerStyle={styles.inputContainerStyle}
            rightIcon={
              <MaterialIcons
                name={isPasswordVisible ? "visibility" : "visibility-off"} // Changez l'icône en fonction de l'état
                style={styles.icon}
                size={24}
                color="black"
                onPress={togglePasswordVisibility} // Appeler la fonction pour changer la visibilité du mot de passe
              />
            }
          />
        </View>
        <Text style={styles.forgetPassword} onPress={handleForget}>
          Mot de passe oublié ?
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Button
            title="SE CONNECTER"
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            titleStyle={styles.buttonTitleStyle}
            onPress={handleLogin}
          />
        </View>
        <View style={styles.signupContainer}>
          <Text>Vous n’avez pas de compte ?</Text>
          <Text style={styles.signup} onPress={handleSignUp}>
            S ‘inscrire
          </Text>
        </View>
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

  loginTitle: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 15,
    marginStart: 18,
  },
  loginContainer: {
    marginBottom: 10,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    width: "100%",
    height: 60,
    borderRadius: 20,
    paddingStart: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 0,
  },
  icon: {
    position: "absolute",
    top: 10,
    left: -40,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  forgetPassword: {
    textAlign: "right",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    marginStart: 10,
    color: "#E20613",
  },
  bottomContainer: {
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#28348A",
    borderRadius: 30,
    height: 60,
  },
  buttonContainerStyle: {
    width: 290,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonTitleStyle: {
    fontWeight: "700",
    fontSize: 14,
    margin: 5,
  },
});

export default SignInScreen;