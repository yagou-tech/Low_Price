import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./app/components/Login/SignInScreen";
import SignUpScreen from "./app/components/Login/SignUpScreen";
import ForgetPassScreen from "./app/components/ForgetPassScreen";
import SuccessfullyScreen from "./app/components/Successfully";
import MainScreen from "./app/components/Layout/MainScreen";
import ProductDetailsScreen from "./app/components/ProductDetailsScreen";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import ProductsScreen from "./app/components/ProductsScreen";
import Confidentiality from "./app/components/Parametre/ConfidentialityScreen";
import MentionsLegales from "./app/components/Parametre/MentionsScreen";
import ParametreScreen from "./app/components/Parametre/ParametreScreen";
import CompteScreen from "./app/components/Compte/CompteScreen";
import AdresseLivraison from "./app/components/Commande/AdresseLivraison";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/redux/store";

export default function App() {
  const Stack = createStackNavigator();

  // État pour gérer l'icône actuelle
  const [isIconActive, setIsIconActive] = useState(false);

  // Fonction pour changer l'état de l'icône
  const toggleFavorite = () => {
    setIsIconActive(!isIconActive);
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="SignInScreen">
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgetPassScreen"
            component={ForgetPassScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SuccessfullyScreen"
            component={SuccessfullyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={({ route }) => ({
              headerStyle: { backgroundColor: "#f5f6fd" },
              title: null,
              headerRight: (props) => (
                <View style={styles.rightContainer}>
                  <TouchableOpacity
                    onPress={toggleFavorite}
                    style={styles.iconContoure}
                  >
                    <MaterialIcons
                      name={isIconActive ? "favorite" : "favorite-outline"}
                      size={24}
                      color={isIconActive ? "rgba(226, 6, 19, 1)" : "black"}
                      style={{ margin: 10 }}
                      onPress={props.onPress}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconContoure}>
                    <Feather
                      name="share-2"
                      size={24}
                      color="black"
                      style={{ margin: 10 }}
                      onPress={props.onPress}
                    />
                  </TouchableOpacity>
                </View>
              ),
              headerLeft: (props) => (
                <View style={styles.headerContainer}>
                  <AntDesign
                    name="left"
                    size={24}
                    color="black"
                    style={{ margin: 10 }}
                    onPress={props.onPress}
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="ProductsScreen"
            component={ProductsScreen}
            options={{
              title: "Tous les produits",
              headerRight: () => (
                <View style={styles.rightContainer}>
                  <View style={styles.filterContainer}>
                    <AntDesign
                      name="filter"
                      size={31}
                      color="#BBBBBB"
                      style={styles.filterIcon}
                    />
                  </View>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Profil"
            component={CompteScreen}
            options={() => ({
              title: "Paramètre Profil",
              headerLeft: (props) => {
                return (
                  <AntDesign
                    name="left"
                    size={24}
                    color="#28348A"
                    style={{ margin: 10 }}
                    onPress={props.onPress}
                  />
                );
              },
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: "bold",
                color: "#333",
                paddingRight: 50,
              },
            })}
          />
          <Stack.Screen
            name="Confidentiality"
            component={Confidentiality}
            options={() => ({
              title: "Règles et confidentialités",
              headerLeft: (props) => {
                return (
                  <AntDesign
                    name="left"
                    size={24}
                    color="#28348A"
                    style={{ margin: 10 }}
                    onPress={props.onPress}
                  />
                );
              },
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: "bold",
                color: "#333",
                paddingRight: 50,
              },
            })}
          />
          <Stack.Screen
            name="MentionsLegales"
            component={MentionsLegales}
            options={() => ({
              title: "Mentions légales",
              headerLeft: (props) => {
                return (
                  <AntDesign
                    name="left"
                    size={24}
                    color="#28348A"
                    style={{ margin: 10 }}
                    onPress={props.onPress}
                  />
                );
              },
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: "bold",
                color: "#333",
                paddingRight: 50,
              },
            })}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#fff",
    marginStart: 10,
  },
  rightContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconContainer: {
    justifyContent: "space-around",
  },
  rightIcon: {
    flexDirection: "row",
    width: "100%",
  },
  filterContainer: {
    marginEnd: 10,
    backgroundColor: "#fff",
    height: 46,
    width: 46,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
  iconContoure: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#fff",
    marginEnd: 10,
  },
});
