import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import commenterImage1 from '../assets/avatar-coment.png';

const comments = [
  {
    commenterName: "Anonyme",
    commentObjet: "Suite a une commande",
    comment: "Le produit est parfait",
    commenterImage: commenterImage1,
  },
  {
    commenterName: "Anonyme",
    commentObjet: "Suite a une commande",
    comment: "Le produit est parfait",
    commenterImage: commenterImage1,
  },
  {
    commenterName: "Anonyme",
    commentObjet: "Suite a une commande",
    comment: "Le produit est parfait",
    commenterImage: commenterImage1,
  },
];

const Comments = () => {
  return (
    // {/* Deuxième partie : Commentaires */}
    <View style={styles.commentsContainer}>
      {comments.map((comment, index) => (
        <View key={index} style={styles.comment}>
          <Image
            source={comment.commenterImage}
            style={styles.commenterImage}
          />
          <View style={styles.commentContent}>
            <View style={styles.commenterHeader}>
              <Text style={styles.commenterName}>{comment.commenterName}</Text>
              <View style={styles.avisNote}>
                <FontAwesome
                  name="star"
                  size={16}
                  color="#FFB400"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#FFB400"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#FFB400"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#D4D6D5"
                  style={styles.iconStar}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#D4D6D5"
                  style={styles.iconStar}
                />
              </View>
            </View>
            <Text style={styles.commenterObjet}>{comment.commentObjet}</Text>
            <Text style={styles.commenterContent}>{comment.comment}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  commentsContainer: {
    marginBottom: 20,
  },
  comment: {
    flexDirection: "row",
    marginBottom: 10,
    fontSize: 12,
  },
  commenterImage: {
    width: 32,
    height: 32,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  commentContent: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 5,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  commenterName: {
    fontWeight: "400",
    marginBottom: 5,
    fontSize: 13,
    lineHeight: 18,
    color: "#000000DE",
  },
  avisNote: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStar: {
    paddingStart: 3,
  },
  commenterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commenterObjet: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  commenterContent: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    color: "#00000099",
  },
});

export default Comments;
