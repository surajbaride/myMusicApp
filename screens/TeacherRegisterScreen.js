import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TeacherRegisterScreen() {
  const [name, setName] = useState('');

  const register = () => {
    alert(`Teacher ${name} registered!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teacher Registration</Text>
      <TextInput placeholder="Name" style={styles.input} onChangeText={setName} />
      <Button title="Register" onPress={register} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 30, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 }
});
