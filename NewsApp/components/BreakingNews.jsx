import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SliderItem from '../components/SliderItem';
import { Colors } from '@/constants/Colors';

export default function BreakingNews({ newList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.slideWrapper}>
        {/* Horizontal FlatList for the slider */}
        <FlatList
          horizontal={true} // Set FlatList to scroll horizontally
          data={newList} // Data passed from parent
          keyExtractor={(_, index) => `list_items${index}`} // Key extractor for list items
          renderItem={({ item }) => (
            <SliderItem slideitem={item} /> // Rendering SliderItem for each item
          )}
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
    flexDirection: 'row', // Ensures the layout is horizontal
    justifyContent: 'center', // Centers items horizontally
  },
});
