import { Stack, useRouter } from 'expo-router';
import { StyleSheet, View, Text} from 'react-native';

export default function NotFoundScreen() {

  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.link}>
            Página não encontrada!
        </Text>
        <Text style={[styles.back]} onPress={()=>router.replace('/')}>
            Volta para home
        </Text>
      </View>
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
    color:"#fff",
    fontSize:25
  },
  back:{
    padding:10,
    backgroundColor:"#368ed6ff",
    borderRadius:20,
    marginTop: 15,
    paddingVertical: 15,
    color:"#fff"
  }
});
