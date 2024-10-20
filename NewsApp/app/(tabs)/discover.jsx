import SearchBar from '@/components/SearchBar';
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Page = () => {
  const{top:safetop}=useSafeAreaInsets()
  return (
    <View style={[styles.container,{paddingTop:safetop+20}]}>
     
      <SearchBar/>
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