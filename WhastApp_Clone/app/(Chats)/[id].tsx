// app/chat/[id].tsx
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Oi amor 💕", sender: "other" },
    { id: "2", text: "Oi, tudo bem?", sender: "me" },
    { id: "3", text: "Tô bem, e tu?", sender: "other" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  function sendMessage() {
    if (newMessage.trim().length === 0) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: newMessage, sender: "me" },
    ]);
    setNewMessage("");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#e5ddd5" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={{ flex: 1 }}>
        {/* Scroll das mensagens */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 10 }}
        >
          {messages.map((item) => (
            <View
              key={item.id}
              style={[
                styles.messageContainer,
                item.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Digite uma mensagem"
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: "70%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  myMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  otherMessage: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    backgroundColor: "#008069",
    padding: 10,
    borderRadius: 20,
  },
});
