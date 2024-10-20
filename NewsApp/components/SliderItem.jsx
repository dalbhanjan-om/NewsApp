import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

const { width: Width } = Dimensions.get("screen"); // Get screen width

export default function SliderItem({ slideitem }) {
  const handleImageClick = () => {
    if (slideitem.link) {
      Linking.openURL(slideitem.link); // Open the URL in the device's browser
    }
  };

  return (
    <View style={styles.itemWrapper}>
      <TouchableOpacity style={styles.imageWrapper} onPress={handleImageClick}>
        <ImageBackground
          source={{ uri: slideitem.image_url }}
          style={styles.image}
          imageStyle={styles.imageBorder} // Adding this prop to style the image itself
          resizeMode="cover"
        >
          <View style={styles.overlay} />
          {/* Add a dark overlay for better readability */}
          <View style={styles.topLeftContainer}>
            <Image
              source={{ uri: slideitem.source_icon }}
              style={styles.logo}
            />
            <Text style={styles.logoTitle}>{slideitem.source_name}</Text>
          </View>
          <View style={styles.bottomLeftContainer}>
            <Text style={styles.itemTitle}>{slideitem.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    width: Width * 0.85, 
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
    borderRadius: 30,
  },
  imageWrapper: {
    width: "100%",
    borderRadius: 30,
    overflow: "hidden", // Ensures that the image stays within the rounded border
  },
  image: {
    width: "100%",
    height: 350,
    justifyContent: "flex-end", // Align content to the bottom
  },
  imageBorder: {
    borderRadius: 30, // Make the image itself rounded
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Spread to cover the image completely
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Add a dark transparent overlay
    borderRadius: 30, // Make sure overlay has the same rounded corners
  },
  topLeftContainer: {
    position: "absolute",
    top: 15,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff", // Add a white border to the logo for clarity
  },
  logoTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  bottomLeftContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  itemTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
