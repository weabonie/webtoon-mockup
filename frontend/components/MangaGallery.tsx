import { MangaInfo } from "@/constants/Manga";
import axios, { AxiosResponse } from "axios";
import { Href, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window"); // Get the screen width for responsive design

interface MangaGalleryProps {
  // mangas: Manga[];
  title: string;
}

const MangaCard: React.FC<{ manga: any }> = ({ manga }) => {
  const router = useRouter();

  const navigateToManga = () => {
    router.push(("/manga/" + manga.id) as Href<string>);
  };

  const [thumb, setThumb] = useState<string>("");

  const title = manga.title[Object.keys(manga.title)[0]];

  useEffect(() => {}, []);

  console.log(manga);

  return (
    <TouchableOpacity style={styles.card} onPress={navigateToManga}>
      {/* <Image
        source={{
          uri: "https://webtoon-phinf.pstatic.net/" + manga.mobileImageUrl,
        }}
        style={styles.image}
      /> */}
      <Text style={styles.title}>{title}</Text>

      {manga.authors[0].cached && (
        <Text style={styles.author}>{manga.authors[0].cachedData.name}</Text>
      )}
    </TouchableOpacity>
  );
};

const MangaGallery: React.FC<any> = ({ mangaList }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mangaList}
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
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200, // Set a fixed height for the manga cover
    borderRadius: 10,
    resizeMode: "cover", // Make sure the image covers the area
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  author: {
    fontSize: 14,
    color: "#777",
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default MangaGallery;
