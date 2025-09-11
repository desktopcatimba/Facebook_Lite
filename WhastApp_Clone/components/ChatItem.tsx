import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type ChatItemProps = {
  foto?: string;
  nome?: string;
  mensagem?: string;
  hora?: string;
  onPress?: () => void;
};

export default function ChatItem({ foto, nome, mensagem, hora, onPress }: ChatItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
     
      <Image source={{ uri: foto }} style={styles.avatar} />

     
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.mensagem} numberOfLines={1}>
          {mensagem}
        </Text>
      </View>
      <Text style={styles.hora}>{hora}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  textContainer: {
    flex: 1, 
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  mensagem: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  hora: {
    fontSize: 12,
    color: "#777",
    marginLeft: 8,
  },
});
