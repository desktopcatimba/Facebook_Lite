import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ChatItem from "@/components/ChatItem"; 

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      nome: "Edson",
      mensagem: "Meu primeiro post no app 🚀",
      hora: "14:20",
      foto: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: "2",
      nome: "Magda",
      mensagem: "Olá pessoal 👋",
      hora: "14:45",
      foto: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "3",
      nome: "Benvinda",
      mensagem: "Oi amor 💕",
      hora: "15:00",
      foto: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: "4",
      nome: "Juelson",
      mensagem: "Wey é como?",
      hora: "15:00",
      foto: "https://i.pravatar.cc/150?img=14",
    },
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
            onPress={() => console.log("Abrir chat de", item.nome)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
