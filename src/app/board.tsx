import { Colors } from "@/constants/theme";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BoardScreen() {
  const [snaps, setSnaps] = useState<string[]>([]);
  const [nome, setNome] = useState("");

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const [showComments, setShowComments] = useState(false);

  const spotlight = {
    title: "Featured Challenge",
    type: "Speed Puzzle",
    pieces: 500,
  };
  const posts = [
    {
      id: 1,
      user: "Sophie",
      location: "Rotterdam, Netherlands",
      image: "https://picsum.photos/800/600",
      text: "Just finished my first 1000-piece puzzle!",
    },
  ];

  function addSnap() {
    if (nome.trim() === "") {
      return;
    }
    if (snaps.includes(nome)) {
      return;
    }
    setSnaps([...snaps, nome]);
    setNome("");
  }

  function toggleLike() {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  }

  function addComment() {
    if (comment.trim() === "") {
      return;
    }
    setComments([...comments, comment]);
    setComment("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
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
          <TextInput
            style={styles.snapInput}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <Pressable onPress={addSnap}>
            <Text>Add</Text>
          </Pressable>
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
        <View style={styles.postsSection}>
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar}></View>
                <View>
                  <Text style={styles.postUser}>{post.user}</Text>
                  <Text>{post.location}</Text>
                </View>
              </View>
              <Text> {post.text}</Text>
              <Image source={{ uri: post.image }} style={styles.postImagem} />
              <View style={styles.postActions}>
                <Pressable onPress={toggleLike}>
                  <Text>
                    {isLiked ? "❤️" : "🤍"} {likes}
                  </Text>
                </Pressable>

                <Pressable onPress={() => setShowComments(true)}>
                  <Text>💬 {comments.length}</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal
        visible={showComments}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowComments(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => setShowComments(false)}>
              <Text>✕ Close</Text>
            </Pressable>

            <Text>Comments ({comments.length})</Text>

            <TextInput
              style={styles.commentInput}
              placeholder="Write a comment..."
              value={comment}
              onChangeText={setComment}
            />
            <Pressable onPress={addComment}>
              <Text>Post</Text>
            </Pressable>
            {comments.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
        </View>
      </Modal>
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

  postsSection: { paddingHorizontal: 16, marginTop: 12 },

  postCard: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.light.backgroundElement,
  },

  postHeader: { flexDirection: "row", alignItems: "center" },

  postAvatar: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light.primary,
    marginRight: 10,
  },

  postUser: { fontWeight: 600, letterSpacing: 1 },

  postImagem: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },

  snapInput: {},

  commentInput: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
    maxHeight: "75%",
  },

  postActions: {
  flexDirection: "row",
  alignItems: "center",
  gap: 20,
  marginTop: 10,
},
});
