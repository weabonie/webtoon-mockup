import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderBar from "@/components/navigation/HeaderBar";

import MangaInfo from "@/components/manga/MangaInfo";

interface Manga {
  id: string;
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

const MangaDetails = () => {
  // Get the ID from the URL parameters
  const { id } = useLocalSearchParams();
  console.log(id);

  const [manga, setManga] = useState<Manga | null>(null);

  useEffect(() => {
    // Replace this with actual fetching logic to get manga details by ID
    const fetchMangaDetails = async () => {
      // Example: You can replace this with an actual API call to fetch manga details
      const fetchedManga: Manga = {
        id: id as string, // Casting because id might be undefined initially
        title: "Sample Manga Title",
        description: "This is a description of the manga.",
        authors: ["Mukaihara Yukito", "Hino Ikumi", "Kohi Neko"],
        score: "7.12",
        followers: "36k",
        comments: "85",
        publication: "2024, Ongoing",
        genres: [
          "Action",
          "Romance",
          "Adventure",
        ],
        imageUrl: "https://cdn.kobo.com/book-images/e354f3eb-d7f8-4339-9c95-f6b1885bad7d/1200/1200/False/naruto-vol-1.jpg",
      };
      setManga(fetchedManga);
    };

    fetchMangaDetails();
  }, [id]);

  if (!manga) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBar title="WEBTOON" />

      <ScrollView style={{ backgroundColor: "#ffffff", marginTop: 60 }}>
        <MangaInfo manga={manga} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
  },
});

export default MangaDetails;
