import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header  from '../../components/Header'
const Page = () => {
  const{top:safetop}=useSafeAreaInsets()
  return (
    <View style={[styles.container,{paddingTop:safetop}]}>
     
     
     <Header/>
    </View>
  );
};

export default Page;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};
