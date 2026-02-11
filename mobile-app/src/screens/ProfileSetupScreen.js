import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const interests = [
  'Travel',
  'Music',
  'Movies',
  'Sports',
  'Gaming',
  'Reading',
  'Cooking',
  'Fitness'
];

function ProfileSetupScreen({ onCompleted }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your profile</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="number-pad"
        placeholder="Age"
      />
      <TextInput
        style={[styles.input, styles.bio]}
        value={bio}
        onChangeText={setBio}
        placeholder="Tell us about yourself"
        multiline
      />
      <Text style={styles.caption}>Popular interests: {interests.join(', ')}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onCompleted({ name, age: Number(age), bio, interests: interests.slice(0, 3) })}
      >
        <Text style={styles.buttonText}>Complete Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background
  },
  title: {
    marginTop: 48,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    color: colors.primary
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10
  },
  bio: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  caption: {
    marginBottom: 14,
    color: '#475467'
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700'
  }
});

export default ProfileSetupScreen;
