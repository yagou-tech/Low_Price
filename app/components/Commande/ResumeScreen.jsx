import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Modal} from "react-native";
import CustomButton from "../utils/CustomButton";
import { AntDesign } from "@expo/vector-icons";

const ResumeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.produitItem}>
        <View>
          <Image
            source={require("../../assets/pampers.png")}
            style={styles.imgArticle}
          />
        </View>
        <View>
          <Text style={styles.ProduitName}>Pampers</Text>
        </View>
      </View>
      <View style={styles.transition}></View>
      <View style={styles.blogContainer}>
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
      <View style={styles.transition}></View>
      <View style={styles.blogContainer}>
        <Text style={styles.priceTitle}>Adresse de livraison</Text>
        <Text style={styles.address}>Grand Mbao, Quartier Médine</Text>
      </View>
      <View style={styles.transition}></View>
      <View style={styles.blogContainer}>
        <Text style={styles.priceTitle}>Mode de paiement</Text>
        <Text style={styles.addressItem}>Paiement à la livraison</Text>
      </View>
      <View style={styles.transition}></View>
      <View style={styles.blogContainer}>
        <Text style={styles.priceTitle}>Date de livraison</Text>
        <Text style={styles.addressItem}>Livré entre jeudi 3 sept. et vendredi 4 sept.</Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          text={"CONFIRMER"}
          buttonStyle={{ backgroundColor: "rgba(40, 52, 138, 1)", width: 340, height: 50 }}
          onPress={handleSubmit}
          textStyle={{ fontSize: 12, fontWeight: "600" }}
        />
      </View>

      {/* Modal for custom alert */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalButtons}>
              <Image source={require('../../assets/success.png')} style={styles.imgSuccess} />
              <AntDesign
                  name="close"
                  size={18}
                  color="#fff"
                  style={{ marginStart: 15 }}
                  onPress={closeModal}
                />
            </View>
            <View style={styles.bravo}>
              <Text style={styles.modalTitle}>Bravo !</Text>
              <Text style={styles.modalMessage}>Votre commande a été validée.</Text>
            </View>
            <Image source={require('../../assets/Ellipse.png')} style={styles.ellipse} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  produitItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
  },
  imgArticle: {
    width: 75,
    height: 90,
    marginEnd: 20,
  },
  ProduitName: {
    fontSize: 14,
    paddingBottom: 25,
  },
  transition: {
    height: 5,
  },
  blogContainer: {
    backgroundColor: "#fff",
    padding: 20,
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
  address: {
    fontSize: 14,
    fontWeight: "600",
    paddingBottom: 30,
  },
  addressItem: {
    fontSize: 14,
    fontWeight: "600",
  },
  btnContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "rgba(5, 191, 174, 1)",
    borderRadius: 20,
    padding: 20,
    paddingStart: 5,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  modalMessage: {
    fontSize: 12,
    marginBottom: 20,
    color: "#fff",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 10,
  },
  imgSuccess: {
    top: -17,
  },
  bravo: {
    width: 200,
    left: 25,
    top: 10,
  },
  ellipse: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

export default ResumeScreen;