import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Class Schedule</Text>
      <Button title="Add Class" onPress={() => alert('Class added!')} />
      <Button title="Approve Booking" onPress={() => alert('Booking approved!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, gap: 20 },
  title: { fontSize: 24, marginBottom: 30, textAlign: 'center' }
});
