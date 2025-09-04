import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const callsData = [
  { id: "1", nome: "Edvaldo", tipo: "recebida", hora: "Hoje, 14:00", foto: "https://i.pravatar.cc/150?img=14" },
  { id: "2", nome: "Magda", tipo: "perdida", hora: "Hoje, 12:45", foto: "https://i.pravatar.cc/150?img=15" },
  { id: "3", nome: "Benvinda", tipo: "feita", hora: "Ontem, 22:10", foto: "https://i.pravatar.cc/150?img=16" },
];

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={callsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.foto }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.hora}>{item.hora}</Text>
            </View>
            <Ionicons
              name="call"
              size={22}
              color={item.tipo === "perdida" ? "red" : "#25D366"}
              style={styles.icon}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: "bold" },
  hora: { color: "#555", fontSize: 13 },
  icon: { marginLeft: 8 },
});
