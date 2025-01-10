import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const StatText = ({ count, label }) => (
  <View style={styles.statItem}>
    <Text style={styles.statCount}>{formatCount(count)}</Text>
    <Text>{label}</Text>
  </View>
);

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: repository.ownerAvatarUrl }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.fullName}>{repository.fullName}</Text>
          <Text style={styles.description}>{repository.description}</Text>

          <View style={styles.languageContainer}>
            <Text style={styles.language}>{repository.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.stats}>
        <StatText count={repository.forksCount} label="Forks" />
        <StatText count={repository.stargazersCount} label="Stars" />
        <StatText count={repository.ratingAverage} label="Rating" />
        <StatText count={repository.reviewCount} label="Reviews" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 20,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginVertical: 5,
    color: "gray",
  },
  languageContainer: {
    marginVertical: 5,
    backgroundColor: "#0366d6",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  language: {
    color: "white",
    fontWeight: "bold",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statCount: {
    fontWeight: "bold",
  },
});

export default RepositoryItem;
