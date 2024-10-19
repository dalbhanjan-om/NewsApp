import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SliderItem from '../components/SliderItem';
import { Colors } from '@/constants/Colors';

export default function BreakingNews({ newList }) {
  return (
    <View style={styles.container}>
 
      <View style={styles.slideWrapper}>
        {/* Vertical FlatList for the slider */}
        <FlatList
          data={newList} // Data passed from parent
          keyExtractor={(_, index) => `list_items${index}`} // Key extractor for list items
          renderItem={({ item }) => (
            <SliderItem slideitem={item} /> // Rendering SliderItem for each item
          )}
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, // Margin at the bottom of the component
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Space below the title
  },
  slideWrapper: {
    height: 600, // Increased height for the vertical list
    flexDirection: 'column', // Ensures the layout is vertical
  },
});