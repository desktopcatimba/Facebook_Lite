import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ChatItem from "@/components/ChatItem";
import api from "@/api/api";
import feedUsers from "@/api/feed.json";

const Feed = () => {
  const router = useRouter();

//  const [chats, setChats] = useState([]);
//  const [feeds, setFeeds] = useState(feedUsers);
//  const [loading, setLoading] = useState(false);
/*
  useEffect(() => {
    api
      .get("/chats/1")
      .then((response) => {
        setChats(response.data);
        console.log("Chats =>", response.data);
      })
      .catch((error) => console.error("Erro ao carregar chats:", error))
      .finally(() => setLoading(false));
  }, []);*/

  /*if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#008069" />
      </View>
    );
  }*/

  return (
    <View style={styles.container}>
      <FlatList
        data={feedUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatItem
            nome={item.nome}
            mensagem={item.ultima_mensagem}
            hora={item.hora}
            foto={item.foto} 
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
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
