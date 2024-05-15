import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewBars = () => {
  const renderBars = () => {
    const bars = [];
    for (let i = 5; i >= 1; i--) {
      bars.push(
        <View key={i} style={styles.barContainer}>
          <Text style={styles.barNumber}>{i}</Text>
          <View
          key={i}
          style={[
            styles.bar,
            { backgroundColor: '#0000000F' }, // Blanc pour la partie non remplie
          ]}
        >
          <View
            style={[
              styles.filledBar,
              { width: `${i * 20}%` }, // Largeur de la barre remplie en pourcentage
            ]}
          />
        </View>
        </View>
      );
    }
    return bars;
  };

  return <View style={styles.container}>{renderBars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barNumber: {
    marginRight: 10,
    fontSize: 14,
    fontWeight: "400",
    color: '#00000099', // Couleur du numéro de la barre
  },
  bar: {
    height: 10,
    width: '20%', // Largeur de chaque barre
    marginHorizontal: 2,
    borderRadius: 2,
    backgroundColor: '#FFF', // Blanc pour la partie non remplie
    overflow: 'hidden', // Cacher la partie débordante
    width: 300,
    marginTop: 10,
    marginBottom: 10,
  },
  filledBar: {
    height: '100%',
    backgroundColor: '#FFA500', // Orange pour la partie remplie
  },
});

export default ReviewBars;
