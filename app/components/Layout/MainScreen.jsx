import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../HOME/HomeScreen";
import BottomMenu from "./BottomMenu";
import LeftMenu from "./LeftMenu";
import CompteScreen from "../Compte/CompteScreen";
import ParametreScreen from "../Parametre/ParametreScreen";
import { AntDesign } from "@expo/vector-icons";
import PanierScreen from "../Panier/PanierScreen";
import AdresseLivraison from "../Commande/AdresseLivraison";
import { useNavigation } from "@react-navigation/native";
import PaiementScreen from "../Commande/PaiementScreen";
import ResumeScreen from "../Commande/ResumeScreen";

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("Panier");
  };
  const handleBackAddress = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("AdresseLivraison");
  };
  const handleBackPaiement = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("PaiementScreen");
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        drawerContent={(props) => <LeftMenu {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Panier"
          component={PanierScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Compte"
          component={CompteScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Parametre"
          component={ParametreScreen}
          options={{
            title: null,
            headerLeft: (props) => (
              <View style={styles.headerContainer}>
                <AntDesign
                  name="left"
                  size={20}
                  color="black"
                  style={{ margin: 10 }}
                  onPress={props.onPress}
                />
                <Text style={styles.paraTitle}>Paramètre</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="AdresseLivraison"
          component={AdresseLivraison}
          options={{
            title: "Annuler",
            headerLeft: () => (
              <View style={styles.headerContainer}>
                <AntDesign
                  name="close"
                  size={24}
                  color="#28348A"
                  style={{ marginStart: 15 }}
                  onPress={handleBack}
                />
              </View>
            ),
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.5)",
            },
          }}
        />
        <Drawer.Screen
          name="PaiementScreen"
          component={PaiementScreen}
          options={{
            title: "Annuler",
            headerLeft: () => (
              <View style={styles.headerContainer}>
                <AntDesign
                  name="close"
                  size={24}
                  color="#28348A"
                  style={{ marginStart: 15 }}
                  onPress={handleBackAddress}
                />
              </View>
            ),
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.5)",
            },
          }}
        />
        <Drawer.Screen
          name="ResumeScreen"
          component={ResumeScreen}
          options={{
            title: "Résumé",
            headerLeft: () => (
              <View style={styles.headerContainer}>
                <AntDesign
                  name="left"
                  size={24}
                  color="#28348A"
                  style={{ marginStart: 15 }}
                  onPress={handleBackPaiement}
                />
              </View>
            ),
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.5)",
            },
          }}
        />
      </Drawer.Navigator>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paraTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default MainScreen;
