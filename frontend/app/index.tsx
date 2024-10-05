import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import HeaderBar from "@/components/navigation/HeaderBar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  useFonts,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/dev";
import MangaGallery from "@/components/MangaGallery";
import Divider from "@/components/Divider";
import GenreGrid from "@/components/GenreGrid";
import sampleManga from "@/constants/sampleManga.json"

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBar title="WEBTOON" />

      {/* <HorizontalScrollGallery images={images}></HorizontalScrollGallery> */}

      <ScrollView style={{ backgroundColor: "#ffffff", marginTop: 60 }}>
        <View>
          <HorizontalScrollGallery images={images}></HorizontalScrollGallery>
        </View>

        <View>
          <Text style={styles.sortHeader}>Trending</Text>
        </View>

        <MangaGallery mangas={sampleManga}></MangaGallery>

        <Divider marginVertical={5} />

        <View>
          <Text style={styles.sortHeader}>New & Upcoming</Text>
        </View>

        <MangaGallery mangas={sampleManga}></MangaGallery>

        <Divider marginVertical={5} />

        <View>
          <Text style={styles.sortHeader}>Popular Genres</Text>
        </View>

        <GenreGrid />

        <Divider marginVertical={5} />

        <View>
          <Text style={styles.sortHeader}>Recommended for you</Text>
        </View>

        <MangaGallery mangas={sampleManga}></MangaGallery>
      </ScrollView>
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
