import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#6200ee",
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    flexDirection: "row",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  tabText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to="/" style={styles.tab}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text style={styles.tabText}>Sign in</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text style={styles.tabText}>Random</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text style={styles.tabText}>Random</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text style={styles.tabText}>Random</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text style={styles.tabText}>Random</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
