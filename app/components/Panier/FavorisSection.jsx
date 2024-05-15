import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FavorisSection = () => {
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
              name="favorite"
              size={24}
              color="#3350A4"
              style={{ paddingEnd: 20, right: -5, }}
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
