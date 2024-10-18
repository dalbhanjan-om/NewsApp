import React from 'react';
import { View, Text } from 'react-native';

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Discover Screen</Text>
    </View>
  );
};

export default Page;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};