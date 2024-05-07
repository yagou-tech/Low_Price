import React from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet } from "react-native";
import { productsData } from "./data";
import { Feather, MaterialIcons } from '@expo/vector-icons';

const ProductsScreen = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
        {/* Image du produit */}
        <Image source={item.image} style={styles.productImage} />
        {/* Icon de favoris */}
        <MaterialIcons name="favorite-outline" size={24} color="#BBBBBB" style={styles.favoriteIcon} />
        {/* Nom du produit */}
        <Text style={styles.productName}>{item.name}</Text>
        {/* Prix du produit */}
        <Text style={styles.productPrice}>{item.price} FCFA</Text>
    </View>

  );

  return (
    <View style={styles.container}>
      {/* Barre de recherche en haut */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="#BBBBBB" />
          <TextInput style={styles.searchInput} placeholder="Chercher un produit" />
        </View>
      </View>
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
  searchBarContainer: {
    flexDirection: "row",
    paddingTop: 15,
    alignItems: "center",
    paddingStart: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 64,
    paddingHorizontal: 10,
    marginBottom: 5,
    width: 345,
    height: 40,
    backgroundColor: "#fff",
    shadowOpacity: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#00000008',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    fontSize: 10,
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
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 168,
    height: 192,
    paddingBottom: 20,
  },
  productImage: {
    width: "70%",
    height: 125,
    resizeMode: "cover",
    marginBottom: 5,
    alignItems: "center",
  },
  productName: {
    fontSize: 10,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "700",
  },
  favoriteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  
});

export default ProductsScreen;
