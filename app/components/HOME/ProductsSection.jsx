import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // Utiliser 0 pour "Tout"
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {}, [selectedCategory, products]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://lowpriceclone.euleukcommunication.sn/api/category"
      );
      setCategories([{ id: 0, name: "Tout" }, ...response.data.data]);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  };

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

  const filteredProducts =
    selectedCategory === 0
      ? products
      : products.filter(
          (product) => Number(product.categorie_id) === selectedCategory
        );

  const navigateToProductDetails = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item.id === selectedCategory && styles.selectedCategory,
      ]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Text
        style={[
          styles.categoryText,
          item.id === selectedCategory && styles.selectedText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => {
    const imageUrl =
      item.images && item.images.length > 0
        ? `https://lowpriceclone.euleukcommunication.sn/storage/${item.images[0].image}`
        : null;

    return (
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => navigateToProductDetails(item)}
      >
        <Text style={styles.newText}>Nouveau</Text>
        <View style={styles.cardContent}>
          {/* Image du produit */}
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.productImage} />
          ) : (
            <Text>Image non disponible</Text>
          )}
          {/* Nom du produit */}
          <Text style={styles.productName}>{item.name}</Text>
          {/* Prix du produit */}
          <Text style={styles.productPrice}>{item.prix} FCFA</Text>
        </View>
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
      {/* Header des catégories */}
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
      />

      {/* Liste horizontale des produits */}
      <FlatList
        horizontal
        data={filteredProducts}
        renderItem={renderProductItem}
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
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
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
    borderWidth: 1,
  },
  selectedCategory: {
    backgroundColor: "#fff",
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
    width: "100%",
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
