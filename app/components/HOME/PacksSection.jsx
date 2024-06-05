import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const PackSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getPacks = async () => {
    try {
      const response = await axios.get(
        "https://lowpriceclone.euleukcommunication.sn/api/pack"
      );
      setProducts(response.data); // Assurez-vous que la réponse contient bien les produits
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPacks();
  }, []);

  const renderProductItem = ({ item }) => {
    // Vérifiez la structure de item.images
    const imageUrl =
      item.images && item.images.length > 0
        ? `https://lowpriceclone.euleukcommunication.sn/storage/${item.images[0].image}`
        : null;

        const navigateToProductDetails = (product) => {
          navigation.navigate("ProductDetails", { product });
        };


    return (
      <TouchableOpacity style={styles.productContainer} onPress={() => navigateToProductDetails(item)}>
        {/* Image du produit */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.productImage} />
        </View>
        {/* Nom du produit */}
        <Text style={styles.productName}>{item.name}</Text>
        {/* Prix du produit */}
        <Text style={styles.productPrice}>{item.prix} FCFA</Text>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      <Text style={styles.packTitle}>Nos packs</Text>
      {/* Liste des produits */}
      <FlatList
        data={products}
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
    flex: 1,
    marginBottom: 20,
    backgroundColor: "#f5f6fd",
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    maxWidth: 175,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginBottom: 5,
    marginBottom: 10,
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