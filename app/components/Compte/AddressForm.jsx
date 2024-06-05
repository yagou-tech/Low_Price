import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import CustomButton from '../../utils/CustomButton';

const AddressForm = ({ newAddress, setNewAddress, isUpdating, handleAddAddress, handleUpdateAddress, setIsFormVisible }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.modalTitle}>{isUpdating ? "Mettre à jour l'adresse" : "Ajouter une nouvelle adresse"}</Text>
      <Input
        placeholder="Prénom"
        value={newAddress.first_name}
        onChangeText={(value) => setNewAddress({ ...newAddress, first_name: value })}
      />
      <Input
        placeholder="Nom"
        value={newAddress.last_name}
        onChangeText={(value) => setNewAddress({ ...newAddress, last_name: value })}
      />
      <Input
        placeholder="Commune"
        value={newAddress.addresse}
        onChangeText={(value) => setNewAddress({ ...newAddress, addresse: value })}
      />
      <Input
        placeholder="Ville"
        value={newAddress.zone}
        onChangeText={(value) => setNewAddress({ ...newAddress, zone: value })}
      />
      <Input
        placeholder="Quartier"
        value={newAddress.quartier}
        onChangeText={(value) => setNewAddress({ ...newAddress, quartier: value })}
      />
      <Input
        placeholder="Adresse Complète"
        value={newAddress.complement_addresse}
        onChangeText={(value) => setNewAddress({ ...newAddress, complement_addresse: value })}
      />
      <Input
        placeholder="Numéro de téléphone 1"
        value={newAddress.telephone1}
        onChangeText={(value) => setNewAddress({ ...newAddress, telephone1: value })}
      />
      <Input
        placeholder="Numéro de téléphone 2"
        value={newAddress.telephone2}
        onChangeText={(value) => setNewAddress({ ...newAddress, telephone2: value })}
      />
      <CustomButton
        text={isUpdating ? "Mettre à jour" : "Ajouter"}
        buttonStyle={{
          backgroundColor: "#28348A",
          width: "100%",
        }}
        onPress={isUpdating ? handleUpdateAddress : handleAddAddress}
      />
      <TouchableOpacity onPress={() => setIsFormVisible(false)}>
        <Text style={styles.cancelText}>Annuler</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cancelText: {
    color: "#28348A",
    marginTop: 10,
    textAlign: 'center',
  },
});

export default AddressForm;