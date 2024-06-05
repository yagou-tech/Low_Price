import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ProductsScreen = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://lowpriceclone.euleukcommunication.sn/api/product"
      );
      setProducts(response.data); // Assurez-vous que la réponse contient bien les produits
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      setLoading(false);
    }
  };

  const navigateToProductDetails = (product) => {
    navigation.navigate("ProductDetails", { product });
  };
  
  const renderProductItem = ({ item }) => {
    const imageUrl =
        item.images && item.images.length > 0
          ? `https://lowpriceclone.euleukcommunication.sn/storage/${item.images[0].image}`
          : null;
  
    return (
      <TouchableOpacity style={styles.productContainer} onPress={() => navigateToProductDetails(item)}>
        {/* Image du produit */}
        <Image source={{ uri: imageUrl }} style={styles.productImage} />
        {/* Icon de favoris */}
        <MaterialIcons name="favorite-outline" size={24} color="#BBBBBB" style={styles.favoriteIcon} />
        {/* Nom du produit */}
        <Text style={styles.productName}>{item.name}</Text>
        {/* Prix du produit */}
        <Text style={styles.productPrice}>{item.prix} FCFA</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#28348A" />
      </View>
    );
  }

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
        data={products} // Utilisation de l'état products
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
    maxWidth: 175,
    paddingBottom: 20,
  },
  productImage: {
    width: "100%",
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsScreen;