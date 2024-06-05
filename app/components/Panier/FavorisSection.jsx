import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FavorisSection = () => {
  // État pour gérer l'icône actuelle
  const [isIconActive, setIsIconActive] = useState(false);

  // Fonction pour changer l'état de l'icône
  const toggleFavorite = () => {
    setIsIconActive(!isIconActive);
  };
  return (
    <View style={styles.container}>
      <View style={styles.produitContainer}>
        <View style={styles.produitItem}>
          <View>
            <Image
              source={require("../../assets/pampers.png")}
              style={styles.imgArticle}
            />
          </View>
        </View>
        <View style={styles.iconItem}>
          <View>
            <Text style={styles.ProduitName}>
              Fashion Robe imprimée sans manches rétro
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.price}>6 000 FCFA</Text>
            <MaterialIcons
              name={isIconActive ? "favorite-outline" : "favorite"}
              size={24}
              color={isIconActive ? "#3350A4" : "rgba(226, 6, 19, 1)"}
              style={{ paddingEnd: 20, right: -5 }}
              onPress={toggleFavorite}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  produitContainer: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  produitItem: {
    flexDirection: "row",
  },
  imgArticle: {
    width: 75,
    height: 90,
    marginEnd: 20,
  },
  ProduitName: {
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 25,
    width: 260,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default FavorisSection;
