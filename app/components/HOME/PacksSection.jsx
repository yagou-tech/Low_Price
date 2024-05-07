import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// Exemple de données de produits
const productsData = [
  {
    id: 1,
    name: "Pack Ramadan MEGA",
    price: "6 050",
    image: require("../../assets/panier.png"),
  },
  {
    id: 2,
    name: "Pack Ramadan MEGA",
    price: "6 050",
    image: require("../../assets/panier.png"),
  },
  {
    id: 3,
    name: "Pack Ramadan MEGA",
    price: "6 050",
    image: require("../../assets/panier.png"),
  },
  {
    id: 4,
    name: "Pack Ramadan MEGA",
    price: "6 050",
    image: require("../../assets/panier.png"),
  },
  // Ajoutez d'autres produits selon vos besoins
];

const PackSection = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      {/* Image du produit */}
      <Image source={item.image} style={styles.productImage} />
      {/* Nom du produit */}
      <Text style={styles.productName}>{item.name}</Text>
      {/* Prix du produit */}
      <Text style={styles.productPrice}>{item.price} FCFA</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.packTitle}>Nos packs</Text>
      {/* Liste des produits */}
      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={(product) => product.id.toString()}
        numColumns={2} // Pour afficher deux cartes par ligne
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#f5f6fd",
    width: "100%",
  },
  packTitle: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
  },
  productsList: {
    paddingHorizontal: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 5,
  },
  productName: {
    fontSize: 10,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "700",
  },
});

export default PackSection;
