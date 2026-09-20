import { Colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";



export default function HomeScreen() {
  return (
   // <View style={styles.container}>
  //    <Text>Puzzler</Text>
  //  </View>
<Redirect href="/board" />



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
  },
});
