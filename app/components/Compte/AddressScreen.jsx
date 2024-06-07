import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "../../utils/CustomButton";
import { fetchAddresses, addAddress, updateAddress } from "../../redux/addressesSlice";
import AddressForm from "./AddressForm";

const AddressScreen = ({ onMount }) => {
  const dispatch = useDispatch();
  const { addresses, loading, error, isLoaded } = useSelector((state) => state.addresses);
  const token = useSelector((state) => state.auth.accessToken);

  const [newAddress, setNewAddress] = useState({
    first_name: "",
    last_name: "",
    addresse: "",
    zone: "",
    quartier: "",
    complement_addresse: "",
    telephone1: "",
    telephone2: ""
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentAddressId, setCurrentAddressId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchAddresses(token));
    }
  }, [dispatch, isLoaded, token]);

  useEffect(() => {
    if (onMount) {
      onMount();
    }
  }, [onMount]);

  const handleAddAddress = async () => {
    try {
      console.log("Nouvelle adresse à ajouter :", newAddress);
      await dispatch(addAddress({ token, newAddress })).unwrap();
      setNewAddress({
        first_name: "",
        last_name: "",
        addresse: "",
        zone: "",
        quartier: "",
        complement_addresse: "",
        telephone1: "",
        telephone2: ""
      });
      setIsFormVisible(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'adresse :", error);
      Alert.alert("Erreur", "Erreur lors de l'ajout de l'adresse");
    }
  };

  const handleUpdateAddress = async () => {
    try {
      await dispatch(updateAddress({ token, id: currentAddressId, updatedAddress: newAddress })).unwrap();
      setNewAddress({
        first_name: "",
        last_name: "",
        addresse: "",
        zone: "",
        quartier: "",
        complement_addresse: "",
        telephone1: "",
        telephone2: ""
      });
      setIsUpdating(false);
      setCurrentAddressId(null);
      setIsFormVisible(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'adresse :", error);
      Alert.alert("Erreur", "Erreur lors de la mise à jour de l'adresse");
    }
  };

  const handleEditPress = (id, address) => {
    setNewAddress(address);
    setIsUpdating(true);
    setCurrentAddressId(id);
    setIsFormVisible(true);
  };

  const handleOpenForm = () => {
    setNewAddress({
      first_name: "",
      last_name: "",
      addresse: "",
      zone: "",
      quartier: "",
      complement_addresse: "",
      telephone1: "",
      telephone2: ""
    });
    setIsFormVisible(true);
  };

  const renderAddressItem = ({ item, index }) => (
    <View key={item.id || index} style={styles.addressContainer}>
      <View style={styles.addressItem}>
        <Text style={styles.addressTitle}>Adresse {index + 1}</Text>
        <FontAwesome name="edit" size={24} color="#28348A" onPress={() => handleEditPress(item.id, item)} />
      </View>
      <View style={styles.addressItem}>
        <Text style={styles.addressContent}>
          {item.addresse}, {item.zone}, {item.quartier}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Chargement de vos adresses...</Text>
      ) : addresses && addresses.length > 0 ? (
        <FlatList
          data={addresses}
          renderItem={renderAddressItem}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        />
      ) : (
        <Text style={styles.loadingText}>Aucune adresse trouvée</Text>
      )}
      <View style={{ alignItems: "center" }}>
        <CustomButton
          text="Ajouter une adresse"
          buttonStyle={{
            backgroundColor: "#28348A",
            width: "85%",
          }}
          onPress={handleOpenForm}
        />
      </View>
      {isFormVisible && (
        <AddressForm
          newAddress={newAddress}
          setNewAddress={setNewAddress}
          isUpdating={isUpdating}
          handleAddAddress={handleAddAddress}
          handleUpdateAddress={handleUpdateAddress}
          setIsFormVisible={setIsFormVisible}
        />
      )}
      <View style={styles.ajoutAddress}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fd",
    paddingBottom: 100,
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: 'red',
  },
  addressContainer: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 50,
    marginBottom: 20,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  addressContent: {
    fontSize: 14,
  },
  ajoutAddress: {
    paddingBottom: 250,
  },
});

export default AddressScreen;