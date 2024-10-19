import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header  from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import BreakingNews from '../../components/BreakingNews'
import axios from 'axios';
const Page = () => {
  const{top:safetop}=useSafeAreaInsets()
  const [breakingNews,setBreakingNews]=useState([])

  React.useEffect(()=>{
    getBreakingNews();
  },[])
  const getBreakingNews=async()=>{
    try {
      const URL=`https://newsdata.io/api/1/news?apikey=pub_56661c95aa276e9c8399debab852a814c8c01&country=in&language=en&removeduplicate=1&size=5 `
      const response=await axios.get(URL);
      if(response && response.data){
        setBreakingNews(response.data.results);
      }
      
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={[styles.container,{paddingTop:safetop}]}>
     <Header/>
 
    <BreakingNews newList={breakingNews}/>
    
    </View>
  );
};

export default Page;

const styles = {
  container: {

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};
