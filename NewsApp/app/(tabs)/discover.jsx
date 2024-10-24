import SearchBar from '@/components/SearchBar';
import CheckBox from '@/components/CheckBox'
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import newsCategoryList from '@/constants/Categories'
const Page = () => {
  const{top:safetop}=useSafeAreaInsets()
  return (
    <View style={[styles.container,{paddingTop:safetop+20}]}>
     
      <SearchBar/>
      <Text style={styles.title}>
        Categories
      </Text>
      <View style={styles.listContainer}>
        {newsCategoryList.map((item)=>(
          <CheckBox key={item.id} label={item.title} checked={item.selected} onPress={()=>{}}/>
        ))}
      </View>
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
  title:{
    fontSize:15,
    fontWeight:'bold',
    
    marginRight:250,
    
  },
  listContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    gap:16,
    marginTop:12,
    paddingBottom:20,
  },
  item:{
    paddingLeft:10,
  }
};