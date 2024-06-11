import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import InfoScreen from './InfoScreen';
import AddressScreen from './AddressScreen';
import PointsScreen from './PointsScreen';
import { fetchAddresses } from '../../redux/addressesSlice';

const CompteScreen = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Informations personnelles');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.accessToken);

  const handleMenuItemPress = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleReloadAddresses = () => {
    dispatch(fetchAddresses(token));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mon compte</Text>
          <Image source={require('../../assets/avatar.jpg')} style={styles.profileImage} />
        </View>

        <View style={styles.menu}>
          <TouchableOpacity
            style={[styles.menuItem, selectedMenuItem === 'Informations personnelles' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Informations personnelles')}
          >
            <Text style={styles.menuItemText}>Informations personnelles</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, selectedMenuItem === 'Mes adresses' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Mes adresses')}
          >
            <Text style={styles.menuItemText}>Mes adresses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, selectedMenuItem === 'Mes points' ? styles.menuItemSelected : null]}
            onPress={() => handleMenuItemPress('Mes points')}
          >
            <Text style={styles.menuItemText}>Mes points</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transition}></View>

        {selectedMenuItem === 'Informations personnelles' && (
          <InfoScreen />
        )}
        {selectedMenuItem === 'Mes adresses' && (
          <AddressScreen onMount={handleReloadAddresses} />
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
    justifyContent: "space-around",
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