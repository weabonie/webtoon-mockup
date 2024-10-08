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

const MangaCard: React.FC<{ manga: MangaInfo }> = ({ manga }) => {
  const router = useRouter();
  const mangaInfo = manga.titleInfo;

  const navigateToManga = () => {
    router.push(("/manga/" + mangaInfo.titleNo) as Href<string>);
  };

  const [thumb, setThumb] = useState<string>("");

  // const options = {
  //   method: "GET",
  //   url: "https://webtoon-phinf.pstatic.net" + manga.mobileImageUrl,
  //   headers: {
      
  //   },
  // };

  function loadImage() {
    // {
    //   method: "GET",
    //   // referrer: "http://m.webtoons.com/",
    //   headers: {
        
    //   }
    // }

    // axios.get("https://webtoon-phinf.pstatic.net" + manga.mobileImageUrl, {
    //   headers: {
    //     "Referer": "http://m.webtoons.com/",
    //     "User-Agent": "Mozilla/5.0 (Linux; Android 8.1.0; Mi MIX 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36"
    //   }
    // }).then((res) => {
    //   console.log(res)
    // }) 
  }
  
  useEffect(() => {
    loadImage()
  }, []);

  return (
    <TouchableOpacity style={styles.card} onPress={navigateToManga}>
      <Image
        source={{
          uri: "https://webtoon-phinf.pstatic.net/" + manga.mobileImageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{mangaInfo.title}</Text>
      <Text style={styles.author}>{mangaInfo.writingAuthorName}</Text>
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
