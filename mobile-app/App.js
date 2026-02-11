import { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
import SwipeScreen from './src/screens/SwipeScreen';
import { colors } from './src/theme/colors';

export default function App() {
  const [step, setStep] = useState('login');
  const [user, setUser] = useState(null);

  if (step === 'login') {
    return (
      <LoginScreen
        onAuthenticated={phone => {
          setUser({ phone });
          setStep('profile');
        }}
      />
    );
  }

  if (step === 'profile') {
    return (
      <ProfileSetupScreen
        onCompleted={profile => {
          setUser({ ...user, ...profile });
          setStep('swipe');
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Spark Dating</Text>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            setUser(null);
            setStep('login');
          }}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <SwipeScreen user={user} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary
  },
  logout: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  logoutText: {
    color: colors.white,
    fontWeight: '600'
  }
});
