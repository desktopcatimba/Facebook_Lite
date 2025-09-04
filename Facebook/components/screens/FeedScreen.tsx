import { useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ChatItem from "@/components/ChatItem";

const Feed = () => {
  const router = useRouter();

  const [posts, setPosts] = useState([
    { id: "1", nome: "Edson", mensagem: "Meu primeiro post no app 🚀", hora: "14:20", foto: "https://i.pravatar.cc/150?img=11" },
    { id: "2", nome: "Magda", mensagem: "Olá pessoal 👋", hora: "14:45", foto: "https://i.pravatar.cc/150?img=12" },
    { id: "3", nome: "Benvinda", mensagem: "Oi amor 💕", hora: "15:00", foto: "https://i.pravatar.cc/150?img=13" },
    { id: "4", nome: "Juelson", mensagem: "Wey é como?", hora: "15:00", foto: "https://i.pravatar.cc/150?img=14" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem
            foto={item.foto}
            nome={item.nome}
            mensagem={item.mensagem}
            hora={item.hora}
            onPress={() => router.push(`/(Chats)/${item.id}`)} 
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="share" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
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
