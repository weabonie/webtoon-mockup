import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions } from 'react-native';

interface Manga {
  title: string;
  author: string;
  imageUrl: string;
}

interface MangaGalleryProps {
  mangas: Manga[];
}

const { width } = Dimensions.get('window'); // Get the screen width for responsive design

const MangaCard: React.FC<{ manga: Manga }> = ({ manga }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: manga.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{manga.title}</Text>
      <Text style={styles.author}>{manga.author}</Text>
    </View>
  );
};

const MangaGallery: React.FC<MangaGalleryProps> = ({ mangas }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mangas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <MangaCard manga={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "visible",
    paddingVertical: 20, // Add some padding for the scroll
  },
  card: {
    width: width * 0.35, // Each card takes 60% of the screen width
    marginHorizontal: 5, // Spacing between cards
    paddingBottom: 10,
    backgroundColor: '#fff',
    // borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  image: {
    width: '100%',
    height: 200, // Set a fixed height for the manga cover
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    resizeMode: 'cover', // Make sure the image covers the area
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  author: {
    fontSize: 14,
    color: '#777',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default MangaGallery;
