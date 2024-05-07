import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import RangeSlider from "rn-range-slider"; // Importe RangeSlider au lieu de Slider
import { AntDesign } from "@expo/vector-icons";

const FilterModal = ({ visible, onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [low, setLow] = useState(0); // Ajoute le state pour la valeur basse de la plage de prix
  const [high, setHigh] = useState(100); // Ajoute le state pour la valeur haute de la plage de prix

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const renderThumb = useCallback(() => {
    return (
      <View style={{ backgroundColor: 'red', width: 10, height: 10 }} />
    );
  }, []);

  const renderRail = useCallback(() => {
    return (
      <View style={{ backgroundColor: 'gray', height: 2 }} />
    );
  }, []);

  const renderRailSelected = useCallback(() => {
    return (
      <View style={{ backgroundColor: 'green', height: 2 }} />
    );
  }, []);

  const renderLabel = useCallback(({ text }) => {
    return (
      <Text>{text}</Text>
    );
  }, []);

  const renderNotch = useCallback(() => {
    return (
      <View style={{ backgroundColor: 'blue', width: 1, height: 5 }} />
    );
  }, []);

  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  const [sliderValue, setSliderValue] = useState(0);

  /**
   * Function to handle slider value change
   */
  const handleSliderValue = (distanceValue) => {
    setSliderValue(distanceValue);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <Text>Filtrer</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalTitle}>Catégories</Text>
          <View style={styles.categoriesContainer}>
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
          </View>
          <View style={styles.priceRangeContainer}>
            <Text style={styles.priceRangeLabel}>Plage de prix :</Text>
            <Text style={styles.priceRangeText}>
              {low} - {high}
            </Text>
            <RangeSlider
              style={{ width: 160, height: 80 }}
              gravity={"center"}
              min={0}
              max={100}
              step={1}
              selectionColor="#3df"
              blankColor="#f618"
              onValueChanged={handleValueChange}
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.applyButton} onPress={onClose}>
              <Text style={styles.applyButtonText}>FILTRER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const categories = [
  "ALIMENTAIRE",
  "EPICERIE SALEE",
  "EPICERIE SUCREE",
  "BOUCHERIE-VOLAILLE-POISSONNERIE",
  "HIGH-TECH, AUDIO, TV, TELEPHONE",
  "ELECTROMENAGER, CUISINE",
  "FRUITS ET LEGUMES",
  "ANIMALERIE",
  "HYGIENE ET BEAUTE",
  "ENTRETIEN MAISON",
];

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: "flex-end", // Utilise alignSelf au lieu de position: "absolute"
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: "column",
  },
  categoryItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
  priceRangeContainer: {
    marginTop: 20,
  },
  priceRangeLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  priceRangeText: {
    fontSize: 14,
    marginBottom: 10,
  },
  btnContainer: {
    alignItems: "center",
  },
  applyButton: {
    backgroundColor: "#28348A",
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 152,
    height: 50,
  },
  applyButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default FilterModal;