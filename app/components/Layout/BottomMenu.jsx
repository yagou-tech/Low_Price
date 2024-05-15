import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather, AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';

const BottomMenu = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      switch (route.name) {
        case 'Home':
          setSelectedIcon('home');
          break;
        case 'Panier':
          setSelectedIcon('shopping-cart');
          break;
        case 'Compte':
          setSelectedIcon('user-alt');
          break;
        case 'Parametre':
          setSelectedIcon('settings-sharp');
          break;
        default:
          setSelectedIcon('home');
          break;
      }
    }
  }, [isFocused, route.name]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      // Lorsqu'un utilisateur fait un retour en arrière, vérifions si l'écran précédent est celui qui devrait avoir l'icône active
      switch (route.name) {
        case 'Home':
          setSelectedIcon('home');
          break;
        case 'Panier':
          setSelectedIcon('shopping-cart');
          break;
        case 'Compte':
          setSelectedIcon('user-alt');
          break;
        case 'Parametre':
          setSelectedIcon('settings-sharp');
          break;
        default:
          setSelectedIcon('home');
          break;
      }
    });

    return unsubscribe;
  }, [navigation, route.name]);

  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setSelectedIcon("home");
          navigation.navigate('Home');
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
        onPress={() => {
          setSelectedIcon("shopping-cart");
          navigation.navigate('Panier');
        }}
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
          navigation.navigate('Compte');
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