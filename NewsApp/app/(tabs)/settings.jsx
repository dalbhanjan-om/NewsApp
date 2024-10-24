import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons like the Sign Out
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);
  const router = useRouter();

  const toggleSwitch = () => setIsNotificationsEnabled(previousState => !previousState);

  const handlePress = (fieldName) => {
    if (fieldName === 'Manage Interests') {
      router.push('/ManageInterest'); // Navigate to ManageInterest screen
    } else if (fieldName === 'Change Password') {
      router.push('/ChangePassword'); // Navigate to ChangePassword screen
    } else if (fieldName === 'Help & Support') {
      router.push('/HelpAndSupport'); // Navigate to HelpAndSupport screen
    } else if (fieldName === 'News Source Preferences') {
      router.push('/PickNewsSources'); // Navigate to PickNewsSources screen
    } else {
      Alert.alert(`${fieldName}`, 'Redirecting.....');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s" }} // Placeholder image for profile pic
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Om Dalbhanjan</Text>
        <Text style={styles.profileEmail}>omdalbhanjan@gmail.com</Text>
      </View>

      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4" }
          onValueChange={toggleSwitch}
          value={isNotificationsEnabled}
        />
      </View>

      <TouchableOpacity style={styles.settingsItem} onPress={() => handlePress('Manage Interests')}>
        <Text style={styles.settingsText}>Manage Interests</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsItem} onPress={() => handlePress('Change Password')}>
        <Text style={styles.settingsText}>Change Password</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsItem} onPress={() => handlePress('News Source Preferences')}>
        <Text style={styles.settingsText}>News Source Preferences</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsItem} onPress={() => handlePress('Help & Support')}>
        <Text style={styles.settingsText}>Help & Support</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutItem} onPress={() => handlePress('Sign Out')}>
        <Text style={styles.signOutText}>Sign Out</Text>
        <Ionicons name="log-out-outline" size={20} color="gray" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  settingsText: {
    fontSize: 16,
  },
  signOutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
  },
  signOutText: {
    fontSize: 16,
    color: 'red',
  },
});

export default ProfileScreen;
