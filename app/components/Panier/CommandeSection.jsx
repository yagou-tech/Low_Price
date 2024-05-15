import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import IncrementDecrementInput from "../utils/IncrementDecrementInput";


const CommandeSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.commandeContainer}>
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
        <View style={styles.detailContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceTitle}>Prix de la commande</Text>
            <View style={styles.priceItem}>
              <Text style={styles.title}>Prix sous-total :</Text>
              <Text style={styles.price}>5 000 FCFA</Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={styles.title}>Frais de livraison (+):</Text>
              <Text style={styles.price}>1 000 FCFA</Text>
            </View>
            <View style={styles.priceTotal}>
              <Text style={styles.title}>Total à payer :</Text>
              <Text style={styles.totalPrice}>6 000 FCFA</Text>
            </View>
          </View>
          <View style={styles.livraisonContainer}>
            <Text style={styles.livraisonTitle}>Date de livraison</Text>
            <Text style={styles.livraisonContent}>
              Livré entre jeudi 3 sept. et vendredi 4 sept.
            </Text>
          </View>
          <View style={styles.annulerContainer}>
            <TouchableOpacity
              style={styles.button}
            >
              <AntDesign name="close" size={16} color="#FF2727" />
              <Text style={styles.text}>ANNULER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fd",
    paddingBottom: 100,
  },
  commandeContainer: {
    backgroundColor: "#fff",
    padding: 30,
  },
  produitItem: {
    flexDirection: "row",
    paddingBottom: 15,
  },
  imgArticle: {
    width: 75,
    height: 90,
    marginEnd: 20,
  },
  ProduitName: {
    fontSize: 14,
    paddingBottom: 40,
    paddingTop: 20,
  },
  detailContainer: {
    borderTopWidth: 1,
    borderColor: "#F0EFEF",
    paddingBottom: 10,
  },
  priceContainer: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  priceTitle: {
    fontSize: 12,
    fontWeight: "300",
    paddingBottom: 10,
  },
  priceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
  },
  price: {
    fontSize: 12,
    fontWeight: "400",
  },
  priceTotal: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3350A4",
  },
  livraisonContainer: {
    paddingBottom: 30,
  },
  livraisonTitle: {
    fontSize: 12,
    fontWeight: "300",
    paddingBottom: 5,
  },
  livraisonContent: {
    fontSize: 12,
    fontWeight: "600",
  },
  annulerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#FF2727",
    flexDirection: "row",
    width: 175,
    height: 35,
  },
  text: {
    color: '#FF2727',
    fontSize: 14,
    paddingStart: 5,
  },
});

export default CommandeSection;
