import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const newsSources = [
  { name: 'CNN', logo: require("../../assets/images/cnn.png") },
  { name: 'BBC', logo: require("../../assets/images/bbc.png") },
  { name: 'Times Of India', logo: require("../../assets/images/toi.jpeg") },
  { name: 'The Indian Express', logo: require("../../assets/images/IE.jpeg") },
  { name: 'Hindustan Times', logo: require("../../assets/images/HT.jpeg") },
  { name: 'The Hindu', logo: require("../../assets/images/HINDU.jpeg") },
];

const InterestSelectionScreen = () => {
  const [selectedSources, setSelectedSources] = useState([]);
  const { top: safetop } = useSafeAreaInsets();

  const toggleSelection = (name) => {
    if (selectedSources.includes(name)) {
      setSelectedSources(selectedSources.filter((sourceName) => sourceName !== name));
    } else {
      setSelectedSources([...selectedSources, name]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.sourceItem,
        selectedSources.includes(item.name) && styles.selectedItem,
      ]}
      onPress={() => toggleSelection(item.name)}
    >
      <ImageBackground source={item.logo} style={styles.image} imageStyle={styles.imageStyle}>
        <View style={styles.overlay}>
          <Text style={styles.sourceText}>{item.name}</Text>
          {selectedSources.includes(item.name) && <View style={styles.selectedCircle} />}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: safetop + 20 }]}>
      <Text style={styles.title}>Pick your preferred news sources</Text>
      <Text style={styles.subtitle}>
        We’ll use this info to personalize your news feed based on your preferred sources.
      </Text>

      <FlatList
        data={newsSources}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
      />

      <Text style={styles.viewAllText}>View All</Text>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  grid: {
    alignItems: "center",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sourceItem: {
    width: 150,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  imageStyle: {
    // Brighten the images slightly
    resizeMode: 'cover',
    opacity: 0.85, // Reduce opacity to make the image more vibrant
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Reduce darkness to make image brighter
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sourceText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.8)", // Add text shadow to increase readability
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  selectedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 5,
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  viewAllText: {
    color: "#007AFF",
    textAlign: "center",
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InterestSelectionScreen;
