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

export default function Index() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold
  });

  const images = [
    'https://personacentral.com/wp-content/uploads/2019/02/Persona-5-Mementos-Mission-Cover-1-696x987.jpg',
    'https://personacentral.com/wp-content/uploads/2017/12/Persona-5-Manga-Vol.-2.jpg',
    'https://personacentral.com/wp-content/uploads/2018/03/P5-Manga-Cover.jpg',
    'https://personacentral.com/wp-content/uploads/2018/09/Persona-5-Manga-Volume-4.jpg',
  ];

  const mangas = [
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      imageUrl: 'https://cdn.kobo.com/book-images/e354f3eb-d7f8-4339-9c95-f6b1885bad7d/1200/1200/False/naruto-vol-1.jpg',
    },
    {
      title: 'Attack on Titan',
      author: 'Hajime Isayama',
      imageUrl: 'https://m.media-amazon.com/images/I/71qywWSbReL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'One Piece',
      author: 'Eiichiro Oda',
      imageUrl: 'https://comicvine.gamespot.com/a/uploads/scale_medium/11136/111369808/6786544-one%20piece%201.jpg',
    },
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      imageUrl: 'https://cdn.kobo.com/book-images/e354f3eb-d7f8-4339-9c95-f6b1885bad7d/1200/1200/False/naruto-vol-1.jpg',
    },
    {
      title: 'Attack on Titan',
      author: 'Hajime Isayama',
      imageUrl: 'https://m.media-amazon.com/images/I/71qywWSbReL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'One Piece',
      author: 'Eiichiro Oda',
      imageUrl: 'https://comicvine.gamespot.com/a/uploads/scale_medium/11136/111369808/6786544-one%20piece%201.jpg',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <HeaderBar title="WEBTOON" />

      {/* <HorizontalScrollGallery images={images}></HorizontalScrollGallery> */}

      <ScrollView style={{backgroundColor: "#ffffff", marginTop: 60}}>
        <View>
        <HorizontalScrollGallery images={images}></HorizontalScrollGallery>
        </View>

        <View>
          <Text style={styles.sortHeader}>Trending</Text>
        </View>

        <MangaGallery mangas={mangas}></MangaGallery>

        <Divider marginVertical={5}/>

        <View>
          <Text style={styles.sortHeader}>New & Upcoming</Text>
        </View>

        <MangaGallery mangas={mangas}></MangaGallery>

        <Divider marginVertical={5}/>

        <View>
          <Text style={styles.sortHeader}>Popular Genres</Text>
        </View>
          
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sortHeader: {
    fontFamily: "Raleway_700Bold",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 0,
    fontSize: 20
  }
})