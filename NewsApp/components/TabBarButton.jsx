import { Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { icon } from "@/constants/Icons"; // Ensure the path is correct
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, label }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withSpring(isFocused ? 1 : 0, { duration: 50 });
  }, [opacity, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(opacity.value, [0, 1], [1, 0]);
    return { opacity: opacityValue };
  });

  
  

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.tabbarBtn}>
      {icon[routeName] ? (
        icon[routeName]({
          color: isFocused ? Colors.tabIconSelected : Colors.tabIconDefault,
          focused: isFocused,
        })
      ) : (
        <Text>Icon not found</Text> // Fallback if the routeName is undefined
      )}
      <Animated.Text
        style={[
          {
            color: isFocused ? Colors.tabIconSelected : Colors.tabIconDefault,
            fontSize: 12,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
