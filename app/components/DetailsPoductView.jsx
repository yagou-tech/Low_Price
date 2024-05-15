import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity, Animated } from 'react-native';
import IncrementDecrementInput from './utils/IncrementDecrementInput';
import { FontAwesome } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;

const Header_Max_Height = windowHeight / 2;
const Header_Min_Height = windowHeight / 3;

const DetailsProduct = ({animHeaderValue}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Min_Height, Header_Max_Height],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: animateHeaderHeight,
          },
        ]}
      >
        <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}
        >
        {/* Contenu de vos détails de produit ici */}
        <Text>Livraison gratuite</Text>
        <Text>4.8</Text>
        <Text>Pampers</Text>
        <View>
          <View>
            <Text>Référence</Text>
            <Text>11000002</Text>
          </View>
          <View>
            <Text>État</Text>
            <Text>Nouveau produit</Text>
          </View>
        </View>
        <Text>Livraison gratuite</Text>
        <Text>4.8</Text>
        <Text>Pampers</Text>
        <Text style={styles.priceItem}>990 FCFA</Text>
        <View style={styles.quantityContainer}>
          <IncrementDecrementInput />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Acheter</Text>
          </TouchableOpacity>
        </View>
        <Text>Caractéristiques</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliqu am at pulvinar placerat ullamcorper tempus semper purus amet. Aliquam, consectetur dui quis viverra tincidunt lectus ut urna. Eros semper proin nunc nulla. Rhon</Text>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFF',
    elevation: 4, // Ombre pour une apparence flottante
  },
  priceItem: {
    fontSize: 23.09,
    fontWeight: "700",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  applyButton: {
    backgroundColor: "#28348A",
    borderRadius: 30,
    paddingVertical: 10,
    marginStart: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 202,
    height: 47,
  },
  applyButtonText: {
    color: "white",
    fontSize: 17.32,
    fontWeight: "600",
  },
});

export default DetailsProduct;