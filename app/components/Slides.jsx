import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const DIMENSIONS = Dimensions.get("window");

export function Slides({ images }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      ref.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  if (!images || images.length === 0) {
    return null;
  }

  const renderCarouselItem = ({ item }) => (
    <View
      style={{
        width: DIMENSIONS.width - 30,
        overflow: "hidden",
        height: DIMENSIONS.height * 0.32,
        marginVertical: 20,
      }}
    >
      <Image
        source={{
          uri: `https://lowpriceclone.euleukcommunication.sn/storage/${item.image}`,
        }}
        resizeMode="contain"
        style={{ width: "100%", height: "100%", justifyContent: "center" }}
      />
    </View>
  );

  return (
    <View style={{ borderRadius: 5, overflow: "hidden", alignItems: "center" }}>
      <FlatList
        data={images}
        bounces={false}
        contentContainerStyle={{ backgroundColor: "transparent" }}
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={DIMENSIONS.width - 30}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        keyExtractor={(_, i) => String(i)}
        decelerationRate="fast"
        renderItem={renderCarouselItem}
      />
      <Indicators
        scrollX={scrollX}
        images={images}
        currentIndex={currentIndex}
      />
      <Thumbnails images={images} />
    </View>
  );
}

function Indicators({ scrollX, images, currentIndex }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
      }}
    >
      {images.map((_, i) => (
        <IndicatorItem
          key={i}
          index={i}
          scrollX={scrollX}
          currentIndex={currentIndex}
        />
      ))}
    </View>
  );
}

function IndicatorItem({ scrollX, index, currentIndex }) {
  const inputRange = [
    (index - 1) * DIMENSIONS.width,
    index * DIMENSIONS.width,
    (index + 1) * DIMENSIONS.width,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.3, 1, 0.3],
    extrapolate: "clamp",
  });
  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: ["#CFCFCF", "#28348A", "#CFCFCF"],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor,
        opacity: currentIndex === index ? 1 : opacity,
        marginHorizontal: 5,
      }}
    />
  );
}

function Thumbnails({ images }) {
  return (
    <FlatList
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginVertical: 10 }}
      keyExtractor={(_, index) => String(index)}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            marginRight: 10,
            borderWidth: 0.8,
            width: 70,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Image
            source={{
              uri: `https://lowpriceclone.euleukcommunication.sn/storage/${item.image}`,
            }}
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderColor: "transparent",
            }}
          />
        </TouchableOpacity>
      )}
    />
  );
}
