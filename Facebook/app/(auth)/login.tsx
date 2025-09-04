import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Login from "@/components/screens/Login";


export default function LoginScreen() {
  const router = useRouter();

  function handleLogin() {
    // Após login, vai para tabs
    router.replace("/(tabs)");
  }

  return (
    <View style={styles.container}>
        <View style={styles.view}>
            <Text style={styles.text}>Tela de Login</Text>
        </View>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", 
alignItems: "center", width:"100%", gap:20},
view:{height:"14%", width:"100%", backgroundColor:"#008069", justifyContent:"center" },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: "#008069", padding: 12, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  text:{
    textAlign:"center",
    fontSize:30,
    color:"#fff"
  }
});
