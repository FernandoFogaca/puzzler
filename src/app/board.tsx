import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

export default function BoardScreen() {
  const snaps = ["Fernando", "Sophie", "Luca", "Emma"];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.brand}>
          <Text>LOGO</Text>
          <Text style={styles.brandName}>Puzzler</Text>
        </View>

        <View style={styles.headerActions}>
          <Pressable hitSlop={10}>
            <Ionicons
              name="notifications-outline"
              size={28}
              color={Colors.light.primary}
            />
          </Pressable>
          <Pressable hitSlop={10}>
            <FontAwesome6
              name="rocketchat"
              size={24}
              color={Colors.light.primary}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.boardTabs}>
        <Text style={styles.activeTab}>Board</Text>
        <Text>Nearby</Text>
        <Text>Following</Text>
        <Text>For You</Text>
      </View>
      <View style={styles.snapsSection}>
        <Text style={styles.snapsTitle}>Snaps</Text>
        <ScrollView horizontal>
          {snaps.map((nome) => (
            <View key={nome} style={styles.snapItem}>
              <View style={styles.snapAvatar}></View>
              <Text>{nome}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.spotlightSection}>
        <Text style={styles.spotlightTitle}>SPOTLIGHT</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  brand: {
    flexDirection: "row",
  },

  brandName: { fontSize: 24, fontWeight: "700", color: Colors.light.primary },

  headerActions: { flexDirection: "row", gap: 16 },

  boardTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.backgroundElement,
  },

  activeTab: { color: Colors.light.primary, fontWeight: "700" },

  snapsSection: {
    padding: 16,
  },

  snapItem: { alignItems: "center", marginRight: 16 },

  snapAvatar: {
    width: 64,
    height: 64,
    backgroundColor: Colors.light.backgroundElement,
  },

  snapsTitle: { fontSize: 20, fontWeight: "700", marginBottom: 10 },

  spotlightSection: {paddingHorizontal: 16,},

  spotlightTitle:{fontSize: 12, fontWeight:'600', letterSpacing: 4, color: Colors.light.primary,},
});
