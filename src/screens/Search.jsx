import React, {
  useState,
} from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { WorkoutData } from "../data/workouts";
import { colors } from "../../assets/theme";

import SearchBar from "../components/SearchBar";

const Search = () => {

  const navigation = useNavigation();

  const [search, setSearch] =
    useState("");

  const filteredWorkout =
    WorkoutData.filter((item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft
            size={24}
            color={colors.black()}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Search Workout
        </Text>

      </View>

      <SearchBar
        value={search}
        onChangeText={setSearch}
     />

      <FlatList
        data={filteredWorkout}
        keyExtractor={(item) =>
          item.id.toString()
        }

        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.cardInfo}>
              {item.duration}
            </Text>

          </View>
        )}
      />

    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  headerTitle: {
    fontSize: 20,
    marginLeft: 16,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  card: {
    backgroundColor: "#F9FAFB",
    padding: 18,
    borderRadius: 18,
    marginTop: 16,
  },

  cardTitle: {
    fontSize: 16,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  cardInfo: {
    marginTop: 6,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },
});