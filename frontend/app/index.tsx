import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import HeaderBar from "@/components/navigation/HeaderBar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import axios from "axios";

import {
  useFonts,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/dev";

import MangaGallery from "@/components/MangaGallery";
import Divider from "@/components/Divider";
import GenreGrid from "@/components/GenreGrid";
import sampleManga from "@/constants/sampleManga.json";

import "@/constants/Manga";

import { useEffect, useState } from "react";
import { MangaInfo } from "@/constants/Manga";

interface MangaApiResponse {
  [category: string]: MangaInfo[];
}

export default function Index() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  const images = [
    "https://personacentral.com/wp-content/uploads/2019/02/Persona-5-Mementos-Mission-Cover-1-696x987.jpg",
    "https://personacentral.com/wp-content/uploads/2017/12/Persona-5-Manga-Vol.-2.jpg",
    "https://personacentral.com/wp-content/uploads/2018/03/P5-Manga-Cover.jpg",
    "https://personacentral.com/wp-content/uploads/2018/09/Persona-5-Manga-Volume-4.jpg",
  ];

  const [mangaList, setMangaList] = useState(new Map());

  const updateManga = (k: string, v: MangaInfo[]) => {
    setMangaList(new Map(mangaList.set(k, v)));
  };

  

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMangaList = async () => {
    // updateManga("challengeHomeRecommendTitleList", []);
    // updateManga("weeklyHotTitleList", []);

    try {
      const response = await axios.get<MangaApiResponse>(
        "http://64.23.139.105:3000/manga/home"
      );

      updateManga(
        "trending",
        response.data.trending
      );

      updateManga(
        "upcoming",
        response.data.upcoming
      );

      console.log(response.data);

      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMangaList();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HeaderBar title="WEBTOON" /> */}
      {/* <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item: any) => item.id.toString()}
        ListEmptyComponent={
          
        }
        renderItem={(item: any) => <Text>{item}</Text>}
      /> */}

      <SafeAreaView style={{ flex: 1 }}>
        <HeaderBar title="TOKYO MANGA" />

        {/* <HorizontalScrollGallery images={images}></HorizontalScrollGallery> */}

        <ScrollView style={{ backgroundColor: "#ffffff", marginTop: 0 }}>
          <View>
            {/* <HorizontalScrollGallery images={images}></HorizontalScrollGallery> */}
          </View>

          <View>
            <Text style={styles.sortHeader}>Trending</Text>
          </View>

          <MangaGallery
            mangaList={mangaList.get("trending")}
          ></MangaGallery>

          <Divider marginVertical={5} />

          <View>
            <Text style={styles.sortHeader}>New & Upcoming</Text>
          </View>

          <MangaGallery
            mangaList={mangaList.get("upcoming")}
          ></MangaGallery>

          <Divider marginVertical={5} />

          <View>
            <Text style={styles.sortHeader}>Popular Genres</Text>
          </View>

          <GenreGrid />

          <Divider marginVertical={5} />

          <View>
            <Text style={styles.sortHeader}>Recommended for you</Text>
          </View>

          {/* <MangaGallery
            mangaList={mangaList.get("challengeHomeRecommendTitleList")}
          ></MangaGallery> */}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sortHeader: {
    fontFamily: "Raleway_700Bold",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 20,
  },
});
