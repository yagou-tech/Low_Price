import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InfoScreen from './InfoScreen'; // Importez le composant InfoScreen
import AddressScreen from './AddressScreen';
import PointsScreen from './PointsScreen';

const CompteScreen = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Informations personnelles'); // Initialisé à "Informations personnelles"

  const handleMenuItemPress = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <View style={styles.container}>
      {/* En-tête avec "Mon compte" et la photo de profil */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mon compte</Text>
          {/* Ajoutez votre photo de profil ici */}
          <Image source={require('../../assets/avatar.jpg')} style={styles.profileImage} />
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          {/* Option: Informations personnelles */}
          <TouchableOpacity
            style={[styles.menuItem, selectedMenuItem === 'Informations personnelles' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Informations personnelles')}
          >
            <Text style={styles.menuItemText}>Informations personnelles</Text>
          </TouchableOpacity>

          {/* Option: Mes adresses */}
          <TouchableOpacity
            style={[styles.menuItem, selectedMenuItem === 'Mes adresses' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Mes adresses')}
          >
            <Text style={styles.menuItemText}>Mes adresses</Text>
          </TouchableOpacity>

          {/* Option: Mes points */}
          <TouchableOpacity
            style={[styles.menuItem, selectedMenuItem === 'Mes points' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Mes points')}
          >
            <Text style={styles.menuItemText}>Mes points</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transition}></View>

        {/* Conditional content display based on selectedMenuItem */}
        {selectedMenuItem === 'Informations personnelles' && (
          <InfoScreen />
        )}
        {selectedMenuItem === 'Mes adresses' && (
          <AddressScreen />
        )}
        {selectedMenuItem === 'Mes points' && (
          <PointsScreen />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  headerContainer: {
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 70,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    paddingBottom: 15,
  },
  transition: {
    height: 20,
    backgroundColor: "#f5f6fd",
  },
  menuItemSelected: {
    borderBottomColor: '#007bff',
    borderBottomWidth: 2,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 12,
  },
});

export default CompteScreen;