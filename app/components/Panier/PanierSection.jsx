import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import IncrementDecrementInput from "../../utils/IncrementDecrementInput";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import CustomButton from "../../utils/CustomButton";
import { useNavigation } from "@react-navigation/native";

const PanierSection = () => {
  const navigation = useNavigation();

  // État pour gérer l'icône actuelle
  const [isIconActive, setIsIconActive] = useState(false);

  // Fonction pour changer l'état de l'icône
  const toggleFavorite = () => {
    setIsIconActive(!isIconActive);
  };

  const handleMenu = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("ProductsScreen");
  };

  const handleLivraison = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("AdresseLivraison");
  };

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.produitContainer}>
          <View style={styles.produitItem}>
            <View>
              <Image
                source={require("../../assets/pampers.png")}
                style={styles.imgArticle}
              />
            </View>
            <View>
              <Text style={styles.ProduitName}>Pampers</Text>
              <IncrementDecrementInput />
            </View>
          </View>
          <View style={styles.iconItem}>
            <TouchableOpacity
              onPress={toggleFavorite}
              style={styles.iconContoure}
            >
              <MaterialIcons
                name={isIconActive ? "favorite" : "favorite-outline"}
                size={24}
                color={isIconActive ? "rgba(226, 6, 19, 1)" : "#3350A4"}
                style={{ paddingEnd: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#F42D2D" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.price}>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>PRIX UNITAIRE</Text>
            <Text style={styles.priceMontant}>1 000 FCFA</Text>
          </View>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>Sous-total</Text>
            <Text style={styles.priceMontantTotal}>1 000 FCFA</Text>
          </View>
        </View>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.produitContainer}>
          <View style={styles.produitItem}>
            <View>
              <Image
                source={require("../../assets/pampers.png")}
                style={styles.imgArticle}
              />
            </View>
            <View>
              <Text style={styles.ProduitName}>Pampers</Text>
              <IncrementDecrementInput />
            </View>
          </View>
          <View style={styles.iconItem}>
            <MaterialIcons
              name="favorite-border"
              size={24}
              color="#3350A4"
              style={{ paddingEnd: 20 }}
            />
            <AntDesign name="delete" size={24} color="#F42D2D" />
          </View>
        </View>
        <View style={styles.price}>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>PRIX UNITAIRE</Text>
            <Text style={styles.priceMontant}>1 000 FCFA</Text>
          </View>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>Sous-total</Text>
            <Text style={styles.priceMontantTotal}>1 000 FCFA</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text={"Finaliser ma commande"}
          buttonStyle={{ backgroundColor: "#28348A", width: 313, height: 50 }}
          textStyle={{ fontSize: 14, color: "#fff" }}
          onPress={handleLivraison}
        />
        <CustomButton
          text={"Poursuivre mes achats"}
          buttonStyle={{ width: 313, height: 50 }}
          textStyle={{ fontSize: 14, fontWeight: "400", color: "#000" }}
          onPress={handleMenu}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fd",
    paddingBottom: 100,
  },
  imgArticle: {
    width: 75,
    height: 90,
    marginEnd: 20,
  },
  addressContainer: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    marginBottom: 10,
  },
  produitContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  produitItem: {
    flexDirection: "row",
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  ProduitName: {
    fontSize: 14,
    paddingBottom: 25,
  },
  iconItem: {
    flexDirection: "row",
    display: "flex",
    position: "relative",
    bottom: 15,
  },
  price: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderColor: "#F0EFEF",
    paddingBottom: 10,
  },
  priceItem: {
    padding: 10,
  },
  priceTitle: {
    fontSize: 8,
    fontWeight: "300",
    color: "#000",
  },
  priceMontant: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },
  priceMontantTotal: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
    color: "#28348A",
  },
  buttonContainer: {
    alignItems: "center",
    top: 70,
  },
});

export default PanierSection;
