import { Href, useRouter } from 'expo-router';
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

interface Manga {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

interface MangaGalleryProps {
  mangas: Manga[];
}

const { width } = Dimensions.get('window'); // Get the screen width for responsive design

const MangaCard: React.FC<{ manga: Manga }> = ({ manga }) => {
  const router = useRouter()

  const navigateToManga = () => {
    router.push("/manga/" + manga.id as Href<string>);
  }

  return (
    <TouchableOpacity style={styles.card} onPress={navigateToManga}>
      <Image source={{ uri: manga.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{manga.title}</Text>
      <Text style={styles.author}>{manga.author}</Text>
    </TouchableOpacity>
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
    marginTop: 5,
    paddingVertical: 5, // Add some padding for the scroll
  },
  card: {
    width: width * 0.35, // Each card takes 60% of the screen width
    marginHorizontal: 5, // Spacing between cards
    // paddingBottom: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200, // Set a fixed height for the manga cover
    borderRadius: 10,
    resizeMode: 'cover', // Make sure the image covers the area
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
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
