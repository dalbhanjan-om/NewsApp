import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HelpAndSupport = () => {
    const{top:safetop}=useSafeAreaInsets()
  return (
    <ScrollView style={[styles.container,{paddingTop:safetop+20}]}>
      <Text style={styles.header}>Help & Support</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Frequently Asked Questions (FAQ)</Text>
        <Text style={styles.description}>
          Have questions about the app or how it works? Check out the FAQ section.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View FAQs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.description}>
          If you need further assistance, feel free to contact our support team.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>App Tutorials</Text>
        <Text style={styles.description}>
          Want to learn how to use all the features of our app? Check out the tutorials for a step-by-step guide.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Tutorials</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Report a Bug</Text>
        <Text style={styles.description}>
          Encountered any issues? Let us know by reporting the bug and we'll get it fixed.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Report a Bug</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HelpAndSupport;
