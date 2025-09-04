import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Login from '@/components/screens/Login';

export default function LoginScreen() {
  const router = useRouter();


  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    color: '#fff',
  },
});
