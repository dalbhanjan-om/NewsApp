import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const interestsData = [
  { id: 1, title: "Politics", image: require("../../assets/images/politics.jpeg") },
  { id: 2, title: "Business", image: require("../../assets/images/buisness.jpg") },
  { id: 3, title: "Culture", image: require("../../assets/images/Culture.jpeg") },
  { id: 4, title: "Health", image: require("../../assets/images/health.jpeg") },
  { id: 5, title: "Global", image: require("../../assets/images/Global.jpg") },
  { id: 6, title: "Sports", image: require("../../assets/images/sports.jpg") },
  { id: 7, title: "Technology", image: require("../../assets/images/tech.jpg") },
];

const InterestSelectionScreen = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const{top:safetop}=useSafeAreaInsets()
  const toggleSelection = (id) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((interestId) => interestId !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.interestItem,
        selectedInterests.includes(item.id) && styles.selectedItem,
      ]}
      onPress={() => toggleSelection(item.id)}
    >
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.interestText}>{item.title}</Text>
          {selectedInterests.includes(item.id) && <View style={styles.selectedCircle} />}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container,{paddingTop:safetop+20}]}>
      <Text style={styles.title}>Pick your interests</Text>
      <Text style={styles.subtitle}>
        We’ll use this info to personalize your feed to recommend things you’ll like.
      </Text>

      <FlatList
        data={interestsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
  interestItem: {
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
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  interestText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
