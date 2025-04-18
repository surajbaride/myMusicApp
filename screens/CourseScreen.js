import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const courses = [
  { id: '1', name: 'Guitar' },
  { id: '2', name: 'Keyboard' },
  { id: '3', name: 'Drums' },
  { id: '4', name: 'DJing' },
  { id: '5', name: 'Dance' },
];

export default function CourseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Icon name="music" size={30} color="#007bff" style={styles.icon} />
            <Text style={styles.courseName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  courseCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3
  },
  courseName: {
    fontSize: 18,
    fontWeight: '500'
  },
  icon: { marginBottom: 10 }
});
