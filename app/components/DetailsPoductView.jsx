import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity,  Animated } from 'react-native';
import IncrementDecrementInput from './utils/IncrementDecrementInput';

const windowHeight = Dimensions.get('window').height;

const Header_Max_Height = windowHeight / 2;
const Header_Min_Height = windowHeight / 3;

const DetailsProduct = ({animHeaderValue}) => {
  const [isSticky, setIsSticky] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;



  const animateHeaderHeight =  animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height , Header_Min_Height],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View 
        style={[
          styles.container,
          {
            height: animateHeaderHeight,
          },
        ]}
      >
      <ScrollView 
        scrollEnabled={!isSticky}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Contenu de vos détails de produit ici */}
        <View>
          <View>
            <Text>Livraison gratuite</Text>
            <Text>4.8</Text>
          </View>
          <Text>Pampers</Text>
          <View>
            <View>
              <Text>Référence</Text>
              <Text>11000002</Text>
            </View>
            <View>
              <Text>État</Text>
              <Text>Nouveau produit</Text>
            </View>
          </View>
          <View>
            <Text>Livraison gratuite</Text>
            <Text>4.8</Text>
          </View>
          <Text>Pampers</Text>
          <View>
            <Text style={styles.priceItem}>990 FCFA</Text>
            <View style={styles.quantityContainer}>
              <IncrementDecrementInput />
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Acheter</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text>Caractéristiques</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliqu am at pulvinar placerat ullamcorper tempus semper purus amet. Aliquam, consectetur dui quis viverra tincidunt lectus ut urna. Eros semper proin nunc nulla. Rhon</Text>
          </View>
        </View>
      </ScrollView>
    </Animated.View >
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFF',
    elevation: 4, // Ombre pour une apparence flottante
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Marge inférieure pour éviter que le contenu ne soit coupé lors du défilement
  },
  priceItem: {
    fontSize: 23.09,
    fontWeight: "700",
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
});

export default DetailsProduct;