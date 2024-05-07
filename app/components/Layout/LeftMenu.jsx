import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const LeftMenu = () => {

  const navigation = useNavigation();

  const handleLogout = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("SignInScreen");
  };

  return (
    <View style={styles.menuContainer}>
      {/* Contenu 1 */}
      <View style={styles.menuItem1}>
        <Image source={require('../../assets/Icons-Menu-Burger.png')} />
        <Text style={styles.menuText1}>Menu</Text>
      </View>
      {/* Contenu 2 */}
      <View style={styles.menuItem2}>
        <View style={styles.item}>
          <FontAwesome name="users" size={24} color="#3AADFF" style={styles.iconContainer} />
          <Text style={styles.itemText}>Signaler un problème</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome5 name="unlock-alt" size={24} color="#3AADFF" style={styles.iconContainer} />
          <Text style={styles.itemText}>Changer mot de passe</Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="public" size={24} color="#3AADFF" style={styles.iconContainer} />
          <Text style={styles.itemText}>Nous contacter</Text>
        </View>
      </View>
      {/* Contenu 3 */}
      <View style={styles.menuItem3}>
        <Text style={styles.menuText3} onPress={handleLogout}>Déconnexion</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingStart: 20,
  },
  menuItem1:{
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 30,
  },
  menuItem2: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "center",
  },
  iconContainer: {
    width: 30,
  },
  itemText: {
    paddingStart: 20,
    fontSize: 14,
    fontWeight: "400",
    color: "#8A8A8A",
  },
  menuItem3: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  menuText1: {
    fontSize: 14,
    color: "#3AADFF",
    fontWeight: "400",
    paddingStart: 20,
  },
  menuText3: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3AADFF",
  },
});

export default LeftMenu;