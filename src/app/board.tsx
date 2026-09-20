import { View, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BoardScreen() {
  return (
     <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      
      <View style={styles.brand}>
        <Text>LOGO</Text>
        <Text>Puzzler</Text>
      </View>

      <View style={styles.headerActions}>
        <Text>Notifications</Text>
        <Text>Chat</Text>
      </View>

    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

header:{ padding: 16,
         flexDirection: 'row',
         justifyContent: 'space-between',
},



brand:{
         flexDirection: 'row',
},

headerActions:{flexDirection: "row",}



});
