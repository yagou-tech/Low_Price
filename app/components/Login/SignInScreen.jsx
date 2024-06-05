// SignInScreen.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectLoading, selectError, selectUser } from '../../redux/AuthentificationSlice';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigation.navigate("MainScreen");
    }
  }, [user, navigation]);

  const handleLogin = async () => {
    try {
      await dispatch(login(email, password));
      setEmail('');
      setPassword('');
    } catch (err) {
      Alert.alert('Erreur', err.message);
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const handleForget = () => {
    navigation.navigate("ForgetPassScreen");
  };

  const togglePasswordVisibility = () => {
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
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text style={styles.loginTitle}>Mot de passe</Text>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            inputContainerStyle={styles.inputContainerStyle}
            rightIcon={
              <MaterialIcons
                name={isPasswordVisible ? "visibility" : "visibility-off"}
                style={styles.icon}
                size={24}
                color="black"
                onPress={togglePasswordVisibility}
              />
            }
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
      <View style={styles.forgetPasswordContainer}>
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
            loading={loading}
          />
        </View>
        <View style={styles.signupContainer}>
          <Text>Vous n’avez pas de compte ?</Text>
          <Text style={styles.signup} onPress={handleSignUp}>
            S'inscrire
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
  },
  icon: {
    position: "absolute",
    top: 10,
    left: -40,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
  },
  forgetPasswordContainer: {
    marginBottom: 30,
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
  error: {
    color: 'red',
  },
});

export default SignInScreen;