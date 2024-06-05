import { Button } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, Image, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PromoSection = () => {

  const navigation = useNavigation();

  const handleTab = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate("ProductsScreen",);
  };
  const [scaleValue] = useState(new Animated.Value(1));

  useEffect(() => {
    const animateZoom = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        {
          iterations: -1, // -1 signifie que l'animation se répétera en boucle indéfiniment
        }
      ).start();
    };

    animateZoom(); // Appeler la fonction animateZoom pour démarrer l'animation
  }, []);

  return (
    <View style={styles.promoSection}>
      <ImageBackground
        source={require("../../assets/backgroundpromo.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.descContainer}>
          Profitez de nos promotions pour cette fin d’année !!!
        </Text>
        <View style={styles.contentContainer}>
          <View>
            <Button
              title="J’EN PROFITE"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "#FFFFFF",
                borderRadius: 67.79,
                padding: 5,
              }}
              titleStyle={{
                fontWeight: "bold",
                fontSize: 10,
                color: "#89101E",
              }}
              containerStyle={{
                marginHorizontal: 50,
                height: 30,
                width: 103.45,
                marginVertical: 30,
              }}
              onPress={handleTab}
            />
          </View>
          <View>
            <ImageBackground
              source={require("../../assets/gradient.png")}
              style={styles.gradientImage}
            >
              <Animated.View style={[styles.tauxGradient, { transform: [{ scale: scaleValue }] }]}>
                <View style={styles.tauxContainer}>
                  <Text style={styles.tauxContent}>JUSQU’À</Text>
                  <Text style={styles.tauxPourcent}>-50%</Text>
                </View>
              </Animated.View>
            </ImageBackground>
            <View style={styles.pNoelContainer}>
              <Image
                source={require("../../assets/perenoel.png")}
                style={styles.pNoel}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  promoSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    width: 343,
    alignItems: "center",
    paddingTop: 20,
    height: 177,
  },
  descContainer: {
    color: "white",
    fontSize: 19,
    fontWeight: "800",
  },
  contentContainer: {
    flexDirection: "row",
  },
  tauxGradient: {
    marginVertical: -10,
    zIndex: 1,
  },
  tauxContainer: {
    width: 75,
    backgroundColor: "#E20613",
    marginHorizontal: 40,
    marginVertical: 40,
    paddingBottom: 7,
    borderRadius: 10,
    borderStyle: "dotted",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
  },
  gradientImage: {
    width: 133,
    height: 133,
    position: "absolute",
    marginVertical: -30,
    zIndex: 1,
  },
  tauxContent: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    zIndex: 1,
  },
  tauxPourcent: {
    fontSize: 25,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginVertical: -10,
    zIndex: 1,
  },
  pNoelContainer: {
    alignItems: "center",
    marginVertical: 60,
    marginHorizontal: 10,
  },
  pNoel: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    transform: [{ rotateY: "-180deg" }],
    marginEnd: 10,
    marginHorizontal: -30,
    marginVertical: -20,
  },
});

export default PromoSection;