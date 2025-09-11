import { View, Text, StyleSheet, FlatList, Image, Share, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Estado from "@/components/screens/Estado";
import Header from "@/components/shared/Header";

export default function StatusScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Estado />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff",width:"100%",
    height:"100%",},
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  nome: { fontSize: 16, fontWeight: "bold" },
  hora: { color: "#555", fontSize: 13 },

  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#008069",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
