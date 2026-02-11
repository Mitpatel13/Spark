import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

function LoginScreen({ onAuthenticated }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone');
  const [error, setError] = useState('');

  const sendCode = () => {
    if (phone.trim().length < 8) {
      setError('Please enter a valid phone number.');
      return;
    }
    setError('');
    setStep('otp');
  };

  const verify = () => {
    if (otp !== '123456') {
      setError('Use OTP 123456 for local testing.');
      return;
    }
    onAuthenticated(phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Spark</Text>
      <Text style={styles.subtitle}>Log in using your phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="+1 650-555-1234"
        value={phone}
        onChangeText={setPhone}
      />
      {step === 'otp' && (
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          keyboardType="number-pad"
          onChangeText={setOtp}
        />
      )}
      {!!error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={step === 'phone' ? sendCode : verify}>
        <Text style={styles.buttonText}>{step === 'phone' ? 'Send OTP' : 'Verify OTP'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.background
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.primary
  },
  subtitle: {
    color: colors.text,
    marginBottom: 12
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10
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
  },
  error: {
    color: '#b42318',
    marginBottom: 8
  }
});

export default LoginScreen;
