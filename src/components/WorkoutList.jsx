import React, {
  useState,
  useEffect,
} from "react";

import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import axios from "axios";

import ItemWorkout from "./ItemWorkout";

import {
  CategoryList,
} from "../data/categories";

import {
  useFocusEffect,
} from "@react-navigation/native";

export default function WorkoutList() {

  const [favorites,
    setFavorites] = useState([]);

  const [selectedCategory,
    setSelectedCategory] =
    useState("All");

  const [workoutData,
    setWorkoutData] = useState([]);

  const toggleFavorite = (id) => {

    if (favorites.includes(id)) {

      setFavorites(
        favorites.filter(
          (item) => item !== id
        )
      );

    } else {

      setFavorites([
        ...favorites,
        id,
      ]);
    }
  };

  const getWorkoutData =
    async () => {

      try {

        const response =
          await axios.get(
            "https://6a0f5bd21736097c360b86ab.mockapi.io/workout"
          );

        setWorkoutData(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  useFocusEffect(
    React.useCallback(() => {

      getWorkoutData();

    }, [])
  );

  const filteredWorkout =
    selectedCategory === "All"
      ? workoutData
      : workoutData.filter(
        (item) =>
          item.category ===
          selectedCategory
      );

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 100,
      }}
    >

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryWrapper}
      >

        {CategoryList.map((item) => (

          <TouchableOpacity
            key={item.id}

            onPress={() =>
              setSelectedCategory(
                item.categoryName
              )
            }

            style={[
              styles.categoryButton,

              selectedCategory ===
              item.categoryName &&

              styles.activeCategory,
            ]}
          >

            <Text
              style={[
                styles.categoryText,

                selectedCategory ===
                item.categoryName &&

                styles.activeText,
              ]}
            >

              {item.categoryName}

            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      <ScrollView
        showsVerticalScrollIndicator={false}

        contentContainerStyle={{
          paddingBottom: 140,
        }}
      >

        {filteredWorkout.map((item) => {

          const isFav =
            favorites.includes(item.id);

          return (
            <ItemWorkout
              key={item.id}

              item={item}

              isFav={isFav}

              onPress={() =>
                toggleFavorite(item.id)
              }
            />
          );
        })}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrapper: {
    marginBottom: 15,
  },

  categoryButton: {
    backgroundColor: "#E5E7EB",

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 10,
  },

  activeCategory: {
    backgroundColor: "#111827",
  },

  categoryText: {
    color: "#000",

    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },
});