import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Header() {

    const router = useRouter()
    function logout()
    {
        router.replace('/(auth)/login')
    }
  return (
    <SafeAreaView style={{ backgroundColor: "#008069" }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text>
        
        <TouchableOpacity onPress={() => console.log("Clicou nos 3 pontos")}>
          <MaterialIcons name="more-vert" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
          <MaterialIcons name="logout" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {

    paddingHorizontal: 20,
    paddingTop:30,
    paddingBottom:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});
