import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Slides } from "./Slides";
import IncrementDecrementInput from "../utils/IncrementDecrementInput";
import { FontAwesome } from "@expo/vector-icons";
import ReviewBars from "../utils/ReviewBars";
import CustomButton from "../utils/CustomButton";
import Comments from "./CommentSection";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetailsScreen = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const handleBuy = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate('Panier');
  };

  const route = useRoute();
  const { product } = route.params;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produit non disponible</Text>
      </View>
    );
  }

  const handlePress = () => {};

  return (
    <ScrollView style={styles.container}>
      <Slides images={product.images} />
      {/* Autres éléments de votre écran */}
      {/* Contenu de vos détails de produit ici */}
      <View style={styles.detailsContainer}>
        {/* Contenu de vos détails de produit ici */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Livraison gratuite</Text>
          <View style={styles.star}>
            <FontAwesome name="star" size={24} color="#E6BB66" />
            <Text style={styles.noteVote}>{product.reviews_avg_rating}</Text>
            <Text style={styles.nbrVote}>(231)</Text>
          </View>
        </View>
        <View>
          <Text style={styles.ProductName}>{product.name}</Text>
          <View style={styles.refContainer}>
            <Text>Référence</Text>
            <Text style={styles.refItem}>11000002</Text>
          </View>
          <View style={styles.refContainer}>
            <Text>État</Text>
            <Text style={styles.refItem}>Nouveau produit</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceItem}>{product.prix} FCFA</Text>
          <View style={styles.quantityContainer}>
            <IncrementDecrementInput />
            <TouchableOpacity style={styles.applyButton} onPress={handleBuy}>
              <Text style={styles.applyButtonText}>Acheter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.caractContainer}>
          <Text style={styles.caractTitle}>Caractéristiques</Text>
          <Text styles={styles.caractContent}>
            {product.description}
          </Text>
        </View>
        <View>
          <View style={styles.avisHeader}>
            <Text>
              Avis {"("}03{")"}
            </Text>
            <View style={styles.avisContent}>
              <View style={styles.avisNote}>
                <Text style={styles.note}>4</Text>
                <Text style={styles.noteTotal}>/5</Text>
              </View>
              <View style={styles.avisNote}>
                <FontAwesome
                  name="star"
                  size={8}
                  color="#DDB012"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={8}
                  color="#DDB012"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={8}
                  color="#DDB012"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={8}
                  color="#DDB012"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={8}
                  color="#D4D6D5"
                  style={styles.iconStar}
                />
              </View>
            </View>
          </View>
          <View style={styles.reviewBar}>
            <ReviewBars />
          </View>
        </View>
        <View>
          <CustomButton
            onPress={handlePress}
            text="Donne ton avis"
            textStyle={{ color: "#28348A" }}
          />
        </View>
        <View>
          <Comments />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  detailsContainer: {
    padding: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#909090",
  },
  star: {
    flexDirection: "row",
    alignItems: "center",
  },
  noteVote: {
    fontSize: 17,
    fontWeight: "600",
    paddingStart: 5,
    paddingEnd: 5,
  },
  nbrVote: {
    fontSize: 11,
    fontWeight: "400",
    color: "#909090",
  },
  ProductName: {
    fontSize: 21,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 20,
  },
  refContainer: {
    flexDirection: "row",
    fontSize: 11,
    justifyContent: "space-between",
    fontWeight: "500",
    paddingBottom: 20,
  },
  refItem: {
    fontWeight: "700",
  },
  priceContainer: {
    marginBottom: 40,
  },
  priceItem: {
    fontSize: 23.09,
    fontWeight: "700",
    paddingBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  applyButton: {
    backgroundColor: "#28348A",
    borderRadius: 30,
    paddingVertical: 10,
    marginStart: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 202,
    height: 47,
  },
  applyButtonText: {
    color: "white",
    fontSize: 17.32,
    fontWeight: "600",
  },
  caractContainer: {
    marginBottom: 30,
  },
  caractTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#28348A",
    paddingBottom: 10,
  },
  caractContent: {
    fontSize: 10,
    fontWeight: "300",
  },

  avisHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avisContent: {
    alignItems: "center",
  },
  avisNote: {
    flexDirection: "row",
    alignItems: "center",
  },
  note: {
    fontSize: 40,
    color: "#28348A",
    fontWeight: "500",
  },
  noteTotal: {
    fontSize: 20,
    color: "#909090",
    fontWeight: "500",
  },
  iconStar: {
    paddingStart: 3,
  },
  reviewBar: {
    marginTop: 10,
  },
});

export default ProductDetailsScreen;
