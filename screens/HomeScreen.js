import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import MusicRoomCard from '../components/MusicRoomCard';
import { FontAwesome5, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎵 Available Music Rooms</Text>

      <MusicRoomCard name="Yamaha Music Room" location="Mumbai" />
      <MusicRoomCard name="Yamaha Music Room" location="Pune" />
      <MusicRoomCard name="Yamaha Music Room" location="Bangalore" />

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Courses')}>
          <FontAwesome5 name="book-open" size={20} color="#fff" />
          <Text style={styles.buttonText}>Browse Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking')}>
          <MaterialIcons name="class" size={20} color="#fff" />
          <Text style={styles.buttonText}>Book a Class</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TeacherRegister')}>
          <Ionicons name="person-add" size={20} color="#fff" />
          <Text style={styles.buttonText}>Teacher Registration</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule')}>
          <Entypo name="calendar" size={20} color="#fff" />
          <Text style={styles.buttonText}>Manage Schedule</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: '#f5f5f5' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center',
    color: '#333'
  },
  buttonGroup: { 
    marginTop: 30, 
    gap: 15 
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
