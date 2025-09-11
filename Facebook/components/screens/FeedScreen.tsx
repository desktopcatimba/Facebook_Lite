import { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ChatItem from "@/components/ChatItem";
import feedUsers from "@/api/feed.json";

const Feed = () => {
  const router = useRouter();
  const [log, setLog] = useState(false);

  function handleConfirmLogout() {
    setLog(false); // fecha modal
    router.replace("/(auth)/login"); // redireciona
  }

  function handleCancelLogout() {
    setLog(false); // fecha modal sem sair
  }

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

      {/* Botão flutuante de logout */}
      <TouchableOpacity style={styles.fab} onPress={() => setLog(true)}>
        <MaterialIcons name="logout" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Modal de confirmação */}
      <Modal
        transparent
        visible={log}
        animationType="fade"
        onRequestClose={handleCancelLogout}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Terminar sessão</Text>
            <Text style={styles.modalMessage}>
              Tens certeza que queres terminar a sessão?
            </Text>

            <View style={styles.actions}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={handleCancelLogout}
              >
                <Text style={styles.cancelText}>Não</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.confirmButton]}
                onPress={handleConfirmLogout}
              >
                <Text style={styles.confirmText}>Sim</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalBox: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#222",
  },
  modalMessage: {
    fontSize: 14,
    marginBottom: 20,
    color: "#444",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: "#ddd",
  },
  confirmButton: {
    backgroundColor: "#008069",
  },
  cancelText: {
    color: "#333",
    fontWeight: "600",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "700",
  },
});
