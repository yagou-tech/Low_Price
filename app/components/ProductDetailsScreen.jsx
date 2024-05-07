import React, { useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { Slides } from "./Slides";
import DetailsProduct from "./DetailsPoductView";

const ProductDetailsScreen = ({ route }) => {

  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Slides images={[product.image, product.image, product.image]} />
      {/* Autres éléments de votre écran */}
      {/* Contenu de vos détails de produit ici */}
      <DetailsProduct animHeaderValue={scrollOffsetY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
});

export default ProductDetailsScreen;