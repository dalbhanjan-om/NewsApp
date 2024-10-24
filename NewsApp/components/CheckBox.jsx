import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const CheckBox = ({ label, checked, onPress }) => {
  const rnAnimatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        checked ? "rgba(239,142,82,0.1)" : "transparent",
        { duration: 150 }
      ),borderColor:withTiming(checked ? Colors.tint : Colors.black,{duration:150}),
      paddingLeft:16,
      paddingRight:checked ? 10 : 16

    };
  },[checked]);
  return (
    <Animated.View style={[styles.container,rnAnimatedContainerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.iconWrapper}>
        <AntDesign name="checkcircle" size={14} color={Colors.tint} />
      </View>
    </Animated.View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "centre",
    alignItems: "center",
 
    borderWidth: 1,
    paddingVertical: 8,
    borderColor: Colors.border,
    borderRadius: 32,
  },
  label: {
    fomtSize: 14,
  },
  iconWrapper: {
    marginLeft: 8,
    height: 14,
    width: 14,
  },
});
