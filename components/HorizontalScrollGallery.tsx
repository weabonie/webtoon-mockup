import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

interface ImageGalleryProps {
  images: string[]; // Array of image URLs
}

const { width } = Dimensions.get('window'); // Get the screen width

const HorizontalScrollGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const flatListRef = useRef<FlatList<string>>(null); // Ref for the FlatList
  const scrollPosition = useRef(0); // Track the current scroll position
  const [isUserInteracting, setIsUserInteracting] = useState(false); // Track user interaction
  const [autoScrollTimeout, setAutoScrollTimeout] = useState<NodeJS.Timeout | null>(null); // Auto-scroll timer

  // Create a buffer by adding the first and last images for seamless looping
  const infiniteImages = [
    images[images.length - 1], // Prepend the last image for smooth backward scroll
    ...images,
    images[0], // Append the first image for smooth forward scroll
  ];

  // Auto-scroll handler after 3 seconds of inactivity
  const scheduleAutoScroll = () => {
    if (autoScrollTimeout) clearTimeout(autoScrollTimeout); // Clear previous timer if any
    const timeout = setTimeout(() => {
      if (!isUserInteracting) {
        handleAutoScroll();
      }
    }, 3000); // Trigger auto-scroll after 3 seconds of inactivity
    setAutoScrollTimeout(timeout); // Store the timeout
  };

  // Handle auto-scroll forward
  const handleAutoScroll = () => {
    if (flatListRef.current) {
      scrollPosition.current += width;
      if (scrollPosition.current >= width * (images.length + 1)) {
        // If at the end buffer, reset seamlessly to the first image
        flatListRef.current.scrollToOffset({ offset: width, animated: false });
        scrollPosition.current = width * 2; // Move to the second item for smoothness
      } else {
        flatListRef.current.scrollToOffset({ offset: scrollPosition.current, animated: true });
      }
    }
    scheduleAutoScroll(); // Schedule the next auto-scroll
  };

  // Handle manual scrolling
  const handleScrollEnd = (e: any) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const itemIndex = Math.floor(offsetX / width);

    if (itemIndex === images.length + 1) {
      // If scrolled to the forward buffer, reset to the first real image
      flatListRef.current?.scrollToOffset({ offset: width, animated: false });
      scrollPosition.current = width;
    } else if (itemIndex === 0) {
      // If scrolled to the backward buffer, reset to the last real image
      flatListRef.current?.scrollToOffset({ offset: width * images.length, animated: false });
      scrollPosition.current = width * images.length;
    } else {
      scrollPosition.current = offsetX;
    }
    scheduleAutoScroll(); // Schedule auto-scroll after manual scrolling ends
  };

  // Stop auto-scroll when the user starts interacting
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    if (autoScrollTimeout) clearTimeout(autoScrollTimeout); // Stop auto-scroll timer
  };

  // On interaction end, restart auto-scroll after 3 seconds
  const handleUserInteractionEnd = () => {
    setIsUserInteracting(false);
    scheduleAutoScroll(); // Restart auto-scroll after user interaction
  };

  useEffect(() => {
    // Start auto-scroll on component mount
    scheduleAutoScroll();

    return () => {
      if (autoScrollTimeout) clearTimeout(autoScrollTimeout); // Clean up the timer on unmount
    };
  }, [images]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={infiniteImages} // Use the image array with buffer at both ends
        horizontal
        pagingEnabled  // Enable snapping to each image
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        initialScrollIndex={1} // Start at the first real image (index 1 due to buffer)
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
        onMomentumScrollEnd={handleScrollEnd} // Handle seamless looping after scroll ends
        onScrollBeginDrag={handleUserInteraction} // Stop auto-scroll when user starts interacting
        onScrollEndDrag={handleUserInteractionEnd} // Restart auto-scroll after user finishes interacting
        getItemLayout={(data, index) => ({ length: width, offset: width * index, index })} // Optimize performance
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: width, // Make container width equal to the screen width
  },
  image: {
    width: width, // Image width is equal to screen width
    height: 250,  // You can adjust the height as needed
    resizeMode: 'cover',  // Ensures image covers the container properly
  },
});

export default HorizontalScrollGallery;