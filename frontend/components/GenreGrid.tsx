import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

// Define the type for a genre item
interface GenreItem {
  id: string;
  title: string;
  image: string;
}

// Sample data for the genres
const genres: GenreItem[] = [
  {
    id: '1',
    title: 'Romantic Comedy',
    image: 'https://imgix.ranker.com/user_node_img/4267/85337608/original/gekkan-shojo-nozaki-kun-u858910611?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355',
  },
  {
    id: '2',
    title: 'Sports',
    image: 'https://imgix.ranker.com/list_img_v2/3556/3223556/original/3223556-u1?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720',
  },
  {
    id: '3',
    title: 'Adventure',
    image: 'https://www.hindustantimes.com/ht-img/img/2023/03/08/550x309/Frieren_Beyond_Journeys_End_1678284485217_1678284491592_1678284491592.png',
  },
  {
    id: '4',
    title: 'Slice Of Life',
    image: 'https://intoomanywords.com/wp-content/uploads/2017/12/slice-of-life-sol1-720x405.jpg',
  },
];

const GenreGrid: React.FC = () => {
  // Render each genre item
  const renderItem = ({ item }: { item: GenreItem }) => (
    <TouchableOpacity style={styles.item}>
      <ImageBackground source={{ uri: item.image }} style={styles.image}>
        <View style={styles.overlay} />
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // backgroundColor: '#F0F0F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    color: '#8E44AD',
    fontSize: 14,
  },
  row: {
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    height: 150,
    marginBottom: 16,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GenreGrid;
