import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ProfileLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="ManageInterest"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HelpAndSupport"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="farmLocation"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar style="dark" />
    </>
  );
};

export default ProfileLayout;
