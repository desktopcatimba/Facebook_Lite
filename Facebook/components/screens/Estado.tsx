import { View, Text, StyleSheet, FlatList, Image, Share, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const statusData = [
  { id: "1", nome: "Edvaldo", hora: "Hoje, 14:00", foto: "https://i.pravatar.cc/150?img=11" },
  { id: "2", nome: "Magda", hora: "Hoje, 13:30", foto: "https://i.pravatar.cc/150?img=12" },
  { id: "3", nome: "Benvinda", hora: "Ontem, 21:00", foto: "https://i.pravatar.cc/150?img=13" },
];

async function onShare() {
  try {
    const result = await Share.share({
      message: "Eu te amo *MINHA GUIGA*!",
      url:'facebook.com'
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log("Partilhado via:", result.activityType);
      } else {
        console.log("Partilhado com sucesso!");
      }
    } else if (result.action === Share.dismissedAction) {
      console.log("Partilha cancelada");
    }
  } catch (error: any) {
    console.error("Erro ao partilhar:", error.message);
  }
}

export default function Estado() {
  return (
    <View style={styles.container}>
      <FlatList
        data={statusData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.foto }} style={styles.avatar} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.hora}>{item.hora}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} // espaço para o botão flutuante
      />

      <TouchableOpacity style={styles.fab} onPress={onShare}>
        <MaterialIcons name="home" size={28} color="#fff" />
      </TouchableOpacity>
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
