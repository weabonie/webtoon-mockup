import React, { useRef, useEffect } from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

interface ImageGalleryProps {
  images: string[]; // Array of image URLs
}

const { width } = Dimensions.get("window"); // Get the screen width

const HorizontalScrollGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const flatListRef = useRef<FlatList<string>>(null); // Ref for the FlatList
  const currentIndex = useRef(1); // Track the current index (start from the first real image)

  // Create a buffer by adding the first and last images for seamless looping
  const infiniteImages = [
    images[images.length - 1], // Prepend the last image for smooth backward scroll
    ...images,
    images[0], // Append the first image for smooth forward scroll
  ];

  // Handle manual scrolling
  const handleScrollEnd = (info: { distanceFromEnd: number }) => {
    // console.log("test");
    // const offsetX = e.nativeEvent.contentOffset.x;
    // const itemIndex = Math.floor(offsetX / width);

    // if (itemIndex === 0) {
    //   // If scrolled to the backward buffer, reset to the last real image
    //   flatListRef.current?.scrollToOffset({
    //     offset: width * images.length,
    //     animated: false,
    //   });
    //   currentIndex.current = images.length;
    // } else if (itemIndex === infiniteImages.length - 1) {
    //   // If scrolled to the forward buffer, reset to the first real image
    //   flatListRef.current?.scrollToOffset({ offset: width, animated: false });
    //   currentIndex.current = 1;
    // } else {
    //   currentIndex.current = itemIndex;
    // }
  };

  useEffect(() => {
    // Ensure the gallery starts at the first real image (index 1 due to buffer)
    flatListRef.current?.scrollToIndex({ index: 1, animated: false });
    console.log(flatListRef);
  }, []);

  return (
    <FlatList
        ref={flatListRef}
        data={infiniteImages} // Use the image array with buffer at both ends
        horizontal
        pagingEnabled // Enable snapping to each image
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        initialScrollIndex={1} // Start at the first real image (index 1 due to buffer)
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
        onEndReached={handleScrollEnd} // Handle seamless looping after scroll ends
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })} // Optimize performance
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: width, // Make container width equal to the screen width
    marginBottom: 10,
  },
  image: {
    width: width, // Image width is equal to screen width
    height: 270, // You can adjust the height as needed
    resizeMode: "cover", // Ensures image covers the container properly
  },
});

export default HorizontalScrollGallery;
