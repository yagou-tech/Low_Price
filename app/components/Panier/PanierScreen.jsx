import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PanierSection from './PanierSection';
import CommandeSection from './CommandeSection';
import FavorisSection from './FavorisSection';

const PanierScreen = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Mon panier'); // Initialisé à "Informations personnelles"

  const handleMenuItemPress = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <View style={styles.container}>
        {/* Menu */}
        <View style={styles.menu}>
          {/* Option: Mon panier */}
          <TouchableOpacity
            style={[styles.menuItem, {paddingStart: 20}, selectedMenuItem === 'Mon panier' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Mon panier')}
          >
            <Text style={[styles.menuItemText, selectedMenuItem === 'Mon panier' ? styles.menuTextSelected : null]}>Mon panier</Text>
          </TouchableOpacity>

          {/* Option: Mes commandes */}
          <TouchableOpacity
            style={[styles.menuItem, selectedMenuItem === 'Mes commandes' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Mes commandes')}
          >
            <Text style={[styles.menuItemText, selectedMenuItem === 'Mes commandes' ? styles.menuTextSelected : null]}>Mes commandes</Text>
          </TouchableOpacity>

          {/* Option: Favoris */}
          <TouchableOpacity
            style={[styles.menuItem, {paddingEnd: 20}, selectedMenuItem === 'Favoris' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Favoris')}
          >
            <Text style={[styles.menuItemText, selectedMenuItem === 'Favoris' ? styles.menuTextSelected : null]}>Favoris</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transition}></View>

        {/* Conditional content display based on selectedMenuItem */}
        {selectedMenuItem === 'Mon panier' && (
          <PanierSection />
        )}
        {selectedMenuItem === 'Mes commandes' && (
          <CommandeSection />
        )}
        {selectedMenuItem === 'Favoris' && (
          <FavorisSection />
        )}
        <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menu: {
    flexDirection: 'row',
    marginTop: 50,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    paddingBottom: 15,
  },
  transition: {
    height: 10,
    backgroundColor: "#f5f6fd",
  },
  footer: {
    flex: 1,
    height: 20,
    backgroundColor: "#f5f6fd",
  },
  menuItemSelected: {
    borderBottomColor: '#007bff',
    borderBottomWidth: 2,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
  },
  menuTextSelected: {
    fontWeight: "600",
    color: "#28348A",
  },
});

export default PanierScreen;