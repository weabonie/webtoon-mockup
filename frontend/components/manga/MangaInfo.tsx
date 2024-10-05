import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Define the type for the Manga object
interface Manga {
  title: string;
  description: string;
  authors: string[];
  score: string;
  followers: string;
  comments: string;
  publication: string;
  genres: string[];
  imageUrl: string;
}

interface MangaDetailsProps {
  manga: Manga;
}

// The component takes manga details as a prop
const MangaDetails: React.FC<MangaDetailsProps> = ({ manga }) => {
  const renderTag = ({ item }: { item: string }) => (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Section with Image and Details */}
      <View style={styles.topSection}>
        <Image source={{ uri: manga.imageUrl }} style={styles.coverImage} />
        
        <View style={styles.details}>
          <Text style={styles.title}>{manga.title}</Text>
          <Text style={styles.description}>{manga.description}</Text>
          <Text style={styles.authors}>Authors: {manga.authors.join(", ")}</Text>

          {/* Manga score, followers, and comments */}
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>⭐ {manga.score}</Text>
            <Text style={styles.infoText}>👥 {manga.followers}</Text>
            <Text style={styles.infoText}>💬 {manga.comments}</Text>
          </View>

          <Text style={styles.publication}>📅 {manga.publication}</Text>
        </View>
      </View>

      {/* Genre Tags */}
      <FlatList
        data={manga.genres}
        renderItem={renderTag}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={styles.tagList}
      />

      {/* Read Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.readButton}>
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    padding: 16,
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  coverImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 8,
  },
  authors: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#ccc',
  },
  publication: {
    fontSize: 12,
    color: '#ddd',
  },
  tagList: {
    marginVertical: 16,
  },
  tagContainer: {
    backgroundColor: '#444',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  readButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MangaDetails;
