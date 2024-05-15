import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../utils/CustomButton";
import { useNavigation } from "@react-navigation/native";

const PaiementScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  // Sélectionner le premier élément par défaut
  useEffect(() => {
    setSelectedCategory("Paiement au retrait");
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("ResumeScreen");
  };

  const handleGoBack = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("AdresseLivraison");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.modeLivraison}>
          <View>
            <View style={styles.address}>
              <View style={styles.numerocontainer}>
                <Text style={styles.numero}>3</Text>
              </View>
              <Text style={styles.adresseTitle}>Mode de livraison</Text>
            </View>
            <View style={styles.categoriesContainer}>
              <TouchableWithoutFeedback
                onPress={() => toggleCategory("Paiement au retrait")}
              >
                <View style={styles.categoryItemContainer}>
                  <View style={styles.modepay}>
                    <View
                      style={[
                        styles.categoryCheckbox,
                        "Paiement au retrait" === selectedCategory &&
                          styles.selectedCheckbox,
                      ]}
                    >
                      {"Paiement au retrait" === selectedCategory && (
                        <AntDesign name="check" size={16} color="white" />
                      )}
                    </View>
                    <Text style={styles.categoryText}>Paiement au retrait</Text>
                  </View>
                  <View></View>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => toggleCategory("Paiement à la livraison")}
              >
                <View style={styles.categoryItemContainer}>
                  <View style={styles.modepay}>
                    <View
                      style={[
                        styles.categoryCheckbox,
                        "Paiement à la livraison" === selectedCategory &&
                          styles.selectedCheckbox,
                      ]}
                    >
                      {"Paiement à la livraison" === selectedCategory && (
                        <AntDesign name="check" size={16} color="white" />
                      )}
                    </View>
                    <Text style={styles.categoryText}>Paiement à la livraison</Text>
                  </View>
                  <View></View>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => toggleCategory("Payer avec Kpay")}
              >
                <View style={styles.categoryItemContainer}>
                  <View style={styles.modepay}>
                    <View
                      style={[
                        styles.categoryCheckbox,
                        "Payer avec Kpay" === selectedCategory &&
                          styles.selectedCheckbox,
                      ]}
                    >
                      {"Payer avec Kpay" === selectedCategory && (
                        <AntDesign name="check" size={16} color="white" />
                      )}
                    </View>
                    <Text style={styles.categoryText}>Payer avec Kpay</Text>
                  </View>
                  <View>
                    <Image source={require('../../assets/kpay.png')} style={{width: 27, height: 27}} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => toggleCategory("Payer avec Wave")}
              >
                <View style={styles.categoryItemContainer}>
                  <View style={styles.modepay}>
                    <View
                      style={[
                        styles.categoryCheckbox,
                        "Payer avec Wave" === selectedCategory &&
                          styles.selectedCheckbox,
                      ]}
                    >
                      {"Payer avec Wave" === selectedCategory && (
                        <AntDesign name="check" size={16} color="white" />
                      )}
                    </View>
                    <Text style={styles.categoryText}>Payer avec Wave</Text>
                  </View>
                  <View>
                    <Image source={require('../../assets/wave.png')} style={{width: 27, height: 27}} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => toggleCategory("Payer avec Orange money")}
              >
                <View style={styles.categoryItemContainer}>
                  <View style={styles.modepay}>
                    <View
                      style={[
                        styles.categoryCheckbox,
                        "Payer avec Orange money" === selectedCategory &&
                          styles.selectedCheckbox,
                      ]}
                    >
                      {"Payer avec Orange money" === selectedCategory && (
                        <AntDesign name="check" size={16} color="white" />
                      )}
                    </View>
                    <Text style={styles.categoryText}>Payer avec Orange money</Text>
                  </View>
                  <View>
                    <Image source={require('../../assets/orangemoney.png')} style={{width: 27, height: 27}} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => toggleCategory("Carte bancaire")}
              >
                <View style={styles.categoryItemContainer}>
                  <View style={styles.modepay}>
                    <View
                      style={[
                        styles.categoryCheckbox,
                        "Carte bancaire" === selectedCategory &&
                          styles.selectedCheckbox,
                      ]}
                    >
                      {"Carte bancaire" === selectedCategory && (
                        <AntDesign name="check" size={16} color="white" />
                      )}
                    </View>
                    <Text style={styles.categoryText}>Carte bancaire</Text>
                  </View>
                  <View></View>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableWithoutFeedback onPress={toggleCheckbox}>
                <View style={styles.checkbox}>
                  {isChecked && <AntDesign name="check" size={16} color="#28348A" />}
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.checkboxText}>J'ai lu les conditions générales de vente et j'y adhère sans réserve.</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton text={"RETOUR"} buttonStyle={{ width: 150, height: 50 }} textStyle={{ color:"rgba(40, 52, 138, 1)", fontSize: 10, fontWeight: "600" }} onPress={handleGoBack} />
          <CustomButton text={"SUIVANT"} buttonStyle={{ backgroundColor: "rgba(40, 52, 138, 1)", width: 150, height: 50 }} textStyle={{ fontSize: 10, fontWeight: "600" }} onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: "600",
    paddingStart: 15,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 30,
  },
  numerocontainer: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(40, 52, 138, 1)",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(40, 52, 138, 1)",
  },
  numero: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  modeLivraison: {
    backgroundColor: "#fff",
    padding: 20,
    paddingStart: 30,
  },
  adresseTitle: {
    fontSize: 14,
    fontWeight: "600",
    paddingStart: 25,
  },
  categoriesContainer: {
    flexDirection: "column",
  },
  categoryItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderWidth: 1,
    width: 325,
    height: 50,
    paddingStart: 20,
    paddingEnd: 20,
    borderRadius: 15,
    borderColor: "rgba(220, 220, 222, 1)",
    backgroundColor: "rgba(245, 246, 253, 1)",
  },
  categoryCheckbox: {
    width: 18,
    height: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedCheckbox: {
    backgroundColor: "#28348A",
  },
  categoryText: {
    fontSize: 12,
    paddingStart: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: "#28348A",
  },
  modepay: {
    flexDirection: "row",
  },
  
});

export default PaiementScreen;