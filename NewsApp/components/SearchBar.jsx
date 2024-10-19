import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function SearchBar() {
  return (
    <View style={styles.container}>
        <View style={styles.searchbar}>
        <Ionicons name='search-outline' size={20} color={Colors.lightGrey}/>
        <TextInput placeholder="Search" placeholderTextColor={Colors.black}
        style={{fontSize:14,color:Colors.black,flex:1}} />
        </View>
      
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        marginHorizontal:20,
        borderRadius: 8,
        marginBottom:20,
    },
    searchbar:{
        backgroundColor:Colors.white,
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:10,
        gap:10,
        flexDirection:'row',
        width:300,
      alignItems:'center'
        

    },
   
})