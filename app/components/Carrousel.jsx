import React, { useState, useRef, useCallback, useEffect } from "react";
import { FlatList, View, Dimensions, Text, StyleSheet, Image } from "react-native";

const Carousel = ({ products }) => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get("window"));
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    const onDimensionsChange = ({ window }) => {
      setWindowDimensions(window);
    };

    Dimensions.addEventListener("change", onDimensionsChange);

    return () => {
      Dimensions.removeEventListener("change", onDimensionsChange);
    };
  }, []);

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  useEffect(() => {
    console.warn(index);
  }, [index]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source= {item.image} style={styles.slideImage(windowDimensions.height)} />
      <Text style={styles.slideTitle}>{item.name}</Text>
      <Text style={styles.slideSubtitle}>{item.price} FCFA</Text>
    </View>
  );

  return (
    <>
      <FlatList
        data={products}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: (windowHeight) => ({ width: "90%", height: windowHeight * 0.7 }),
  slideTitle: { fontSize: 24 },
  slideSubtitle: { fontSize: 18 },
  carousel: { flex: 1 },
});

export default Carousel;