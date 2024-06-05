import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import PromoSection from "./PromoSection";
import ProductsSection from "./ProductsSection";
import PacksSection from "./PacksSection";
import { Feather, AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterModal from "../FilterModal"; // Importez le composant FilterModal

const HomeScreen = () => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false); // État de visibilité de la fenêtre de filtre

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barre de recherche en haut */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="#BBBBBB" />
          <TextInput style={styles.searchInput} placeholder="Buscar en linio" />
        </View>
        {/* Bouton pour ouvrir le modal de filtre */}
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={toggleFilterModal}
        >
          <AntDesign name="filter" size={31} color="#BBBBBB" />
        </TouchableOpacity>
      </View>

      {/* Contenu principal avec FlatList */}
      <FlatList
        data={[{ key: "promo" }, { key: "products" }, { key: "packs" }]}
        renderItem={({ item }) => (
          <View style={styles.contentContainer}>
            {item.key === "promo" && <PromoSection />}
            {item.key === "products" && <ProductsSection />}
            {item.key === "packs" && <PacksSection />}
          </View>
        )}
        keyExtractor={(item) => item.key}
      />

      {/* Menu de navigation en bas */}
      {/* <View>
        <BottomMenu />
      </View> */}

      {/* Modal de filtre */}
      <FilterModal visible={isFilterModalVisible} onClose={toggleFilterModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  contentContainer: {
    paddingStart: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    paddingTop: 10,
    marginBottom: 10,
    alignItems: "center",
    paddingStart: 20,
    width: "100%",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 64,
    paddingHorizontal: 10,
    marginBottom: 5,
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    shadowOpacity:  0.3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#00000008",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  filterContainer: {
    marginStart: 10,
    backgroundColor: "#fff",
    height: 46,
    width: 46,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20,
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    width: "100%",
  },
  menuItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconTitle: {
    fontSize: 10,
    fontWeight: "300",
  },
});

export default HomeScreen;
