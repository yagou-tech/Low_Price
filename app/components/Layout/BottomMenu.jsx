import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather, AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const BottomMenu = () => {
  const [selectedIcon, setSelectedIcon] = useState("home"); // Accueil est sélectionné par défaut
  const navigation = useNavigation();

  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setSelectedIcon("home");
          navigation.navigate('Home'); // Naviguez vers l'écran HomeScreen
        }}
      >
        <AntDesign
          name="home"
          size={24}
          color={selectedIcon === "home" ? "#28348A" : "#DADADA"}
        />
        <Text
          style={[
            styles.iconTitle,
            { color: selectedIcon === "home" ? "#28348A" : "#DADADA" },
          ]}
        >
          Accueil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setSelectedIcon("shopping-cart")}
      >
        <Feather
          name="shopping-cart"
          size={24}
          color={selectedIcon === "shopping-cart" ? "#28348A" : "#DADADA"}
        />
        <Text
          style={[
            styles.iconTitle,
            {
              color: selectedIcon === "shopping-cart" ? "#28348A" : "#DADADA",
            },
          ]}
        >
          Panier
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setSelectedIcon("user-alt");
          navigation.navigate('Compte'); // Naviguez vers l'écran CompteScreen
        }}
      >
        <FontAwesome5
          name="user-alt"
          size={24}
          color={selectedIcon === "user-alt" ? "#28348A" : "#DADADA"}
        />
        <Text
          style={[
            styles.iconTitle,
            { color: selectedIcon === "user-alt" ? "#28348A" : "#DADADA" },
          ]}
        >
          Mon compte
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setSelectedIcon("settings-sharp");
          navigation.navigate('Parametre');
        }}
      >
        <Ionicons
          name="settings-sharp"
          size={24}
          color={selectedIcon === "settings-sharp" ? "#28348A" : "#DADADA"}
        />
        <Text
          style={[
            styles.iconTitle,
            {
              color: selectedIcon === "settings-sharp" ? "#28348A" : "#DADADA",
            },
          ]}
        >
          Paramètre
        </Text>
      </TouchableOpacity>
      {/* Autres icônes de navigation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    width: "100%",
  },
  menuItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconTitle: {
    fontSize: 10,
    fontWeight: "300",
  },
});

export default BottomMenu;
