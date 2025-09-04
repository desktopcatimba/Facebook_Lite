import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter()

  function login() {
    router.replace('/(tabs)')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhatsApp Clone</Text>
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={login} style={styles.btn}>
        <Text style={styles.txtBtn} >
          Entrar
        </Text>
      </TouchableOpacity >
      <View style={styles.cont}> 
        <Text style={styles.txtBtn1} >Ainda não tem uma conta</Text>
        <Text style={styles.link} >Criar conta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, width:"100%", height:"70%", gap:20  },
  cont:{gap:5, flexDirection:"row", justifyContent:"center"},
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 , fontSize:20},
  link: { color: "#008069",fontSize:18 , textDecorationLine:"underline"},
  btn:{
    padding:10,backgroundColor:"#008069",width:"50%",alignSelf:"center",borderRadius:30
  }
  ,txtBtn:{ color:"#fff",textAlign:"center",fontSize:20
  },
  btn1:{ padding:10, backgroundColor:"#4771e2ff",
    width:"30%",alignSelf:"center",borderRadius:30},
  txtBtn1:{textAlign:"center",fontSize:17},
});
