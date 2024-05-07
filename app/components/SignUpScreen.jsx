import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";

const SignInScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SignInScreen");
  };

  const handleSignIn = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SignInScreen");
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
        <View style={styles.loginItem}>
          <Text style={styles.loginTitle}>Nom</Text>
          <Input
            placeholder="Brandone Louis"
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
        <View style={styles.loginItem}>
          <Text style={styles.loginTitle}>Email</Text>
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
        <View style={styles.loginItem}>
          <Text style={styles.loginTitle}>Mot de pass</Text>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            inputContainerStyle={{
              borderBottomWidth: 0,
              width: "100%",
              height: 60,
              borderRadius: 20,
              paddingStart: 20,
              backgroundColor: "#fff",
              borderBottomWidth: 0,
            }}
            rightIcon={
              <MaterialIcons
                name="visibility-off"
                style={styles.icon}
                size={24}
                color="black"
              />
            }
          />
        </View>
        <Text style={styles.forgetPassword}>Mot de passe oublié ?</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Button
            title="S'INSCRIRE"
            buttonStyle={{
              backgroundColor: "#28348A",
              borderRadius: 30,
              height: 60,
            }}
            containerStyle={{
              width: 290,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "700", fontSize: 14, margin: 5 }}
            onPress={() => handleLogin()}
          />
        </View>
        <View style={styles.signupContainer}>
          <Text>You don't have an account yet ?</Text>
          <Text style={styles.signup} onPress={handleSignIn}>Sign in</Text>
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
    fontWeight: "600",
    marginBottom: 20,
  },
  welcomeDescription: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
  },
  loginItem: {
    marginBottom: -10,
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
});

export default SignInScreen;
