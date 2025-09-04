import { View, Text, StyleSheet,SafeAreaView } from "react-native";

import Feed from "@/components/screens/FeedScreen";
import Header from "@/components/shared/Header";

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.header}>
        <Header />
        <Feed />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 18 ,color: "#fff" },
    header: {
        width:"100%",
        height:"100%",
  },
});

