import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Confidentiality = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor massa id turpis ultrices praesent consectetur suspendisse. Aliquam adipiscing pulvinar aliquam scelerisque urna ligula risus facilisi. Fermentum nam arcu scelerisque arcu phasellus aenean. Malesuada egestas pellentesque amet quam lectus vulputate. Convallis a volutpat semper in nullam nibh adipiscing. Aliquam, tellus enim enim sed dignissim porttitor vitae est. Vestibulum pellentesque ut phasellus elementum. Quis mollis mauris amet, eget vulputate at est in tellus. Ipsum cras ac scelerisque eu sed lectus phasellus pulvinar. Dignissim porttitor amet amet nisi nisl justo, quis. Turpis turpis et interdum duis. Condimentum suspendisse ornare vulputate tortor libero aenean eget vestibulum morbi. Sagittis amet, proin tincidunt mi nam.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
    alignItems: "center",
    padding: 20,
  },
  content: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 26,
    textAlign: "justify",
  },
});

export default Confidentiality;