import { Colors } from '@/constants/Colors';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View ,Text,TouchableOpacity,Linking} from 'react-native';

const { width: Width } = Dimensions.get('screen'); // Get screen width

export default function SliderItem({ slideitem }) {
    const handleImageClick = () => {
        if (slideitem.link) {
          Linking.openURL(slideitem.link);  // Open the URL in the device's browser
        }
      };
  return (
    <View style={styles.itemWrapper}>
         <TouchableOpacity style={styles.image} onPress={handleImageClick}>
      {/* Image component to display the image, resize mode is 'cover' to ensure proper scaling */}
      <ImageBackground
        source={{ uri: slideitem.image_url }}
        style={styles.image}
        resizeMode="cover" // Ensures image fits without distortion
      >
       {/* Top-left corner logo and logo title */}
       <View style={styles.topLeftContainer}>
          <Image source={{ uri: slideitem.source_icon }} style={styles.logo} />
          <Text style={styles.logoTitle}>{slideitem.source_name}</Text>
        </View>

        {/* Bottom-left corner slider item title */}
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
    width: Width * 0.8, // 80% of the screen width for the image container
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, // Margin between items
    
  },
  image: {
    width: '100%', // Image takes full width of the container
    height: 180,   // Fixed height for each image
    borderRadius: 30, // Optional: rounded corners for a cleaner look
  },
  topLeftContainer: {
    position: 'absolute',  // Absolute positioning to place it at the top-left
    top: 10,               // 10 units from the top of the image
    left: 10,              // 10 units from the left of the image
    flexDirection: 'row',  // Place logo and title in a row
    alignItems: 'center',  // Center vertically within the container
  },
  logo: {
    width: 40,          // Logo size (you can adjust as needed)
    height: 40,         // Logo size
    borderRadius: 20,   // Circular logo
  },
  logoTitle: {
    color: 'white',     // White text for contrast
    fontSize: 14,       // Adjust font size for the logo title
    marginLeft: 5,      // Space between logo and title
  },

  // Styles for bottom-left corner (slider item's title)
  bottomLeftContainer: {
    position: 'absolute',  // Absolute positioning to place it at the bottom-left
    bottom: 10,            // 10 units from the bottom of the image
    left: 10,              // 10 units from the left of the image
  },
  itemTitle: {
    color: 'white',       // White title for contrast
    fontSize: 16,         // Adjust font size for the item title
    fontWeight: 'bold',   // Bold title
  },
});
