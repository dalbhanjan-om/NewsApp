import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <ImageBackground
        source={require("../assets/images/Home.jpg")}
        style={{
          flex: 1,
          width: "100%",
        }}
        resizeMode="cover"
      >
      
        <View style={styles.wrapper}>
          <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(500)}>Stay Updated!</Animated.Text>
          <Animated.Text style={styles.desciption} entering={FadeInRight.delay(700).duration(500)}>Get Breaking news and Personalized news directly on your feed</Animated.Text>
          <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
          <TouchableOpacity style={styles.button} onPress={() => router.replace("/(tabs)")}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
          </Animated.View>
          
        </View>
        
        
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
   paddingBottom:50,
   paddingHorizontal:30,
   gap:10,
  },
  title: {
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  },
  desciption:{
    color:'white',
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
  },
  button: {
    backgroundColor:Colors.white,
    paddingVertical:10,
    marginVertical:20,
    borderRadius:15,
    width:250,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText: {
    color:Colors.primary,
    fontSize:20,
   
  }


});
