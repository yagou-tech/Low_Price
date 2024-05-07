import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const IncrementDecrementInput = () => {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <AntDesign name="minus" size={14} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={value.toString()}
        onChangeText={(text) => setValue(parseInt(text) || 0)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={increment}>
        <AntDesign name="plus" size={14} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#C4C4C4",
    paddingHorizontal: 10,
    width: 90,
    height: 32,
  },
  input: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    padding: 5,
  },
});

export default IncrementDecrementInput;