import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Class</Text>

      <View style={styles.card}>
        <Icon name="guitar" size={30} color="#007bff" style={styles.icon} />
        <Text style={styles.course}>🎸 Guitar Class</Text>
        <Button title="Book Now" onPress={() => alert('Guitar class booked!')} />
      </View>

      <View style={styles.card}>
        <Icon name="keyboard" size={30} color="#007bff" style={styles.icon} />
        <Text style={styles.course}>🎹 Keyboard Class</Text>
        <Button title="Book Now" onPress={() => alert('Keyboard class booked!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3
  },
  course: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  icon: { marginBottom: 10 }
});
