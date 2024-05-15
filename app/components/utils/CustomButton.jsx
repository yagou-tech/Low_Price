import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff', // Couleur par défaut du bouton
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#28348A",
  },
  text: {
    color: '#fff', // Couleur par défaut du texte du bouton
    fontSize: 16,
  },
});

export default CustomButton;