import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import CustomButton from "../utils/CustomButton";
import { useNavigation } from "@react-navigation/native";

const AdresseLivraison = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            setUsers(response);
        });
    }


  const navigation = useNavigation();

  const handleSubmit = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("PaiementScreen");
  };

  // Initialisation des catégories
//   useEffect(() => {
//     // Vous pouvez récupérer les catégories depuis une source externe
//     const categoriesData = ["Retrait en magasin", "Livraison a domicile"];

//     // Sélectionner le premier élément par défaut
//     if (categoriesData.length > 0) {
//       setSelectedCategories([categoriesData[0]]);
//     }

//     // Mettre à jour l'état des catégories
//     setCategories(categoriesData);
//   }, []);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([category]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.addressItem}>
          <View style={styles.address}>
            <View style={styles.numbercontainer}>
              <Text style={styles.number}>1</Text>
            </View>
            <Text style={styles.addressTitle}>Adresse</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name="edit" size={24} color="rgba(40, 52, 138, 1)" />
          </TouchableOpacity>
        </View>
        <View style={styles.addressItem}>
          <Text style={styles.addressContent}>
            Grand Mbao , Quartier Médine
          </Text>
        </View>
      </View>
      <View style={styles.transition}></View>
      <View style={styles.modeLivraison}>
        <View>
          <View style={styles.address}>
            <View style={styles.numerocontainer}>
              <Text style={styles.numero}>2</Text>
            </View>
            <Text style={styles.adresseTitle}>Mode de livraison</Text>
          </View>
          {/* <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableWithoutFeedback
                key={category}
                onPress={() => toggleCategory(category)}
              >
                <View style={styles.categoryItemContainer}>
                  <View
                    style={[
                      styles.categoryCheckbox,
                      selectedCategories.includes(category) &&
                        styles.selectedCheckbox,
                    ]}
                  >
                    {selectedCategories.includes(category) && (
                      <AntDesign name="check" size={16} color="white" />
                    )}
                  </View>
                  <Text style={styles.categoryText}>{category}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View> */}
          <View style={styles.categoriesContainer}>
            {users.map((user) => (
                <TouchableWithoutFeedback key={user.id}>
                <View style={styles.categoryItemContainer}>
                    <Text style={styles.categoryText}>{user.username}</Text>
                </View>
                </TouchableWithoutFeedback>
            ))}
          </View>
          <View style={styles.storeContainer}>
            <View style={styles.storeItem}>
              <Image source={require("../../assets/EDK.png")} />
              <View style={styles.storeName}>
                <Text style={styles.storeTitle}>EDK Oil Pikine</Text>
                <Text style={styles.storeContent}>77 511 08 01</Text>
                <Text style={styles.storeContent}>edkpikine@edk.sn</Text>
              </View>
            </View>
            <View style={styles.storeItem}>
              <Image source={require("../../assets/EDK.png")} />
              <View style={styles.storeName}>
                <Text style={styles.storeTitle}>EDK Oil Yoff</Text>
                <Text style={styles.storeContent}>77 511 08 01</Text>
                <Text style={styles.storeContent}>edkpikine@edk.sn</Text>
              </View>
            </View>
          </View>
          <View>
            <Image source={require("../../assets/map_superette.png")} />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          text={"Suivant"}
          buttonStyle={{ backgroundColor: "rgba(40, 52, 138, 1)", width: 340 }}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
    paddingBottom: 100,
  },
  addressContainer: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 50,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: "600",
    paddingStart: 15,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  numbercontainer: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(40, 52, 138, 1)",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(40, 52, 138, 1)",
  },
  number: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  transition: {
    height: 5,
  },
  modeLivraison: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingStart: 30,
  },
  numerocontainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(40, 52, 138, 1)",
  },
  numero: {
    fontSize: 18,
    textAlign: "center",
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
    marginBottom: 20,
    borderWidth: 1,
    width: 310,
    height: 50,
    paddingStart: 20,
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
  storeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 30,
    paddingBottom: 20,
  },
  storeItem: {
    flexDirection: "row",
  },
  storeName: {
    paddingStart: 5,
  },
  storeTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  storeContent: {
    fontSize: 10,
    fontWeight: "500",
  },
  btnContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});

export default AdresseLivraison;
