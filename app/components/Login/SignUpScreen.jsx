import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { signup, selectLoading, selectError, selectUser } from '../../redux/AuthentificationSlice';
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUpScreen = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDate_of_birth] = useState(new Date());
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);

  const handleSignUp = async () => {
    // Reset errors
    setErrors({});
    try {
      const form = {
        first_name,
        last_name,
        email,
        date_of_birth: formatDisplayDate(date_of_birth), // Format DD/MM/YYYY
        telephone,
        password,
        password_confirmation,
      };
      console.log("Form Data:", JSON.stringify(form));
      await dispatch(signup(form)).unwrap();
      Alert.alert("Succès", "Inscription réussie. Veuillez vous connecter.");
      navigation.navigate("SignInScreen");
    } catch (error) {
      console.error("Signup Error:", error.message);
      setErrors(error.errors || {});
      Alert.alert("Erreur", error.message || "Erreur lors de l'inscription");
    }
  };

  const handleSignIn = () => {
    navigation.navigate("SignInScreen");
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date_of_birth;
    setShowDatePicker(Platform.OS === "ios");
    setDate_of_birth(currentDate);
  };

  const formatDisplayDate = (date) => {
    let tempDate = new Date(date);
    let day = tempDate.getDate().toString().padStart(2, "0");
    let month = (tempDate.getMonth() + 1).toString().padStart(2, "0");
    let year = tempDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.WelcomeContainer}>
          <Text style={styles.welcomeTitle}>Bienvenue</Text>
          <Text style={styles.welcomeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.loginItem}>
            <Text style={styles.loginTitle}>Prénom</Text>
            <Input
              placeholder="Brandone"
              value={first_name}
              onChangeText={setFirst_name}
              inputContainerStyle={styles.inputContainer}
            />
            {errors.first_name && (
              <Text style={styles.errorText}>{errors.first_name}</Text>
            )}
          </View>
          <View style={styles.loginItem}>
            <Text style={styles.loginTitle}>Nom</Text>
            <Input
              placeholder="Louis"
              value={last_name}
              onChangeText={setLast_name}
              inputContainerStyle={styles.inputContainer}
            />
            {errors.last_name && (
              <Text style={styles.errorText}>{errors.last_name}</Text>
            )}
          </View>
          <View style={styles.loginItem}>
            <Text style={styles.loginTitle}>Email</Text>
            <Input
              placeholder="brandonelouis@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              inputContainerStyle={styles.inputContainer}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
          <View style={styles.loginItem}>
            <Text style={styles.loginTitle}>Date de naissance</Text>
            <TouchableOpacity onPress={showDatepicker} style={styles.dateInput}>
              <Text style={styles.dateText}>
                {date_of_birth
                  ? formatDisplayDate(date_of_birth)
                  : "Sélectionner une date de naissance"}
              </Text>
            </TouchableOpacity>
            {errors.date_of_birth && (
              <Text style={styles.errorText}>{errors.date_of_birth}</Text>
            )}
            {showDatePicker && (
              <DateTimePicker
                value={date_of_birth}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.loginItem}>
            <Text style={styles.loginTitle}>Numéro téléphone</Text>
            <Input
              placeholder="téléphone"
              keyboardType="phone-pad"
              value={telephone}
              onChangeText={setTelephone}
              inputContainerStyle={styles.inputContainer}
            />
            {errors.telephone && (
              <Text style={styles.errorText}>{errors.telephone}</Text>
            )}
          </View>
          <View style={styles.loginItem}>
            <Text style={styles.loginTitle}>Mot de passe</Text>
            <Input
              placeholder="Password"
              value={password}
              secureTextEntry={!isPasswordVisible}
              onChangeText={setPassword}
              inputContainerStyle={styles.inputContainer}
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
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
          <View style={styles.loginItem}>
            <Text style={styles.loginTitle}>Confirmation du mot de passe</Text>
            <Input
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
              inputContainerStyle={styles.inputContainer}
              
            />
            {errors.password_confirmation && (
              <Text style={styles.errorText}>
                {errors.password_confirmation}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View>
          <Button
            title="S'INSCRIRE"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={handleSignUp}
            loading={loading}
          />
        </View>
        <View style={styles.signupContainer}>
          <Text>Vous avez déjà un compte?</Text>
          <Text style={styles.signup} onPress={handleSignIn}>
            Se connecter
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
    marginBottom: 20,
    marginTop: 20,
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
  loginItem: {},
  loginTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    marginStart: 18,
  },
  loginContainer: {
    marginBottom: 10,
  },
  inputContainer: {
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
  dateInput: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginBottom: 10,
    paddingStart: 25,
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
  bottomContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#28348A",
    borderRadius: 30,
    height: 60,
  },
  buttonContainer: {
    width: 290,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonTitle: {
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  signup: {
    color: "#28348A",
    fontWeight: "600",
    marginLeft: 5,
  },
  errorText: {
    color: "#E20613",
    paddingBottom: 10,
  },
});

export default SignUpScreen;