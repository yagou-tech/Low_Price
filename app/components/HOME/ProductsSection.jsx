import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { categories, productsData } from "../data";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, item === selectedCategory && styles.selectedCategory]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text style={[styles.categoryText, item === selectedCategory && styles.selectedText]}>{item}</Text>
    </TouchableOpacity>
  );

  const filteredProducts = selectedCategory === "Tout" ? productsData : productsData.filter(product => product.category === selectedCategory);

  const navigateToProductDetails = (product) => {
    navigation.navigate('ProductDetails', { product }); // Passer le produit complet
  };
  

  return (
    <View style={styles.container}>
      {/* Header des catégories */}
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
      />

      {/* Liste horizontale des produits */}
      <FlatList
        horizontal
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productContainer} onPress={() => navigateToProductDetails(item)}>
            <Text style={styles.newText}>Nouveau</Text>
            <View style={styles.cardContent}>
              {/* Image du produit */}
              <Image source={item.image} style={styles.productImage} />
              {/* Nom du produit */}
              <Text style={styles.productName}>{item.name}</Text>
              {/* Prix du produit */}
              <Text style={styles.productPrice}>{item.price} FCFA</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productsList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#f5f6fd",
    width: "100%",
    top: -20,
  },
  categoryContainer: {
    paddingBottom: 10,
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  selectedCategory: {
    backgroundColor: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF4062",
  },
  selectedText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF4062",
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#2F3933",
  },
  productsList: {
    paddingVertical: 10,
  },
  productContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 128,
  },
  newText: {
    fontSize: 8,
    color: "#EE2231",
    marginBottom: 5,
    textAlign: "left",
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 5,
  },
  productName: {
    fontSize: 9,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 11,
    fontWeight: "700",
  },
});

export default ProductsSection;