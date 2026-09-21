import { Colors } from "@/constants/theme";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BoardScreen() {
  const snaps = ["Fernando", "Sophie", "Luca", "Emma"];

  const spotlight = {
    title: "Featured Challenge",
    type: "Speed Puzzle",
    pieces: 500,
  };
  const posts = [
    {
      id: 1,
      user: "Sophie",
      text: "Just finished my first 1000-piece puzzle!",
    },
  ];
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
        <View style={styles.spotlightCard}>
          <Text style={styles.spotlightCardTitle}>{spotlight.title}</Text>
          <Text>
            {spotlight.pieces} pieces • {spotlight.type}
          </Text>
        </View>
      </View>
      <View style= {styles.postsSection}>
          {posts.map((post)=> (
            <View key={post.id}></View>
          ))}


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

  spotlightSection: { paddingHorizontal: 16 },

  spotlightTitle: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 4,
    color: Colors.light.primary,
  },

  spotlightCard: {
    height: 150,
    borderRadius: 16,
    backgroundColor: Colors.light.backgroundElement,
    padding: 16,
  },

  spotlightCardTitle: { fontSize: 18, fontWeight: "700" },

  postsSection:{},
});
