import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import HeaderBar from "@/components/navigation/HeaderBar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const images = [
    'https://personacentral.com/wp-content/uploads/2019/02/Persona-5-Mementos-Mission-Cover-1-696x987.jpg',
    'https://personacentral.com/wp-content/uploads/2017/12/Persona-5-Manga-Vol.-2.jpg',
    'https://personacentral.com/wp-content/uploads/2018/03/P5-Manga-Cover.jpg',
    'https://personacentral.com/wp-content/uploads/2018/09/Persona-5-Manga-Volume-4.jpg',
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView style={{backgroundColor: "#ffffff"}}>
        <HeaderBar title="WEBTOON" />

        <HorizontalScrollGallery images={images} />

        <View>
          <Text style={styles.sortHeader}>Trending</Text>
        </View>
          
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sortHeader: {
    padding: 11,
    fontSize: 20
  }
})