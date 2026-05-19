import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  ArrowLeft,
} from "lucide-react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import {
  WorkoutData,
} from "../data/workouts";

import {
  colors,
} from "../../assets/theme";

const WorkoutDetail = ({ route }) => {

  const { workoutId } = route.params;

  const navigation = useNavigation();

  const selectedWorkout = WorkoutData.find(
    (item) => item.id === workoutId
  );

  if (!selectedWorkout) {
    return null;
  }

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

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Image
          source={selectedWorkout.image}
          style={styles.image}
        />

        <View style={styles.content}>

          <Text style={styles.category}>
            {selectedWorkout.category}
          </Text>

          <Text style={styles.title}>
            {selectedWorkout.title}
          </Text>

          <Text style={styles.info}>
            {selectedWorkout.duration} • {selectedWorkout.calories}
          </Text>

          <Text style={styles.description}>
            {selectedWorkout.description}
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default WorkoutDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 15,
  },

  image: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },

  content: {
    padding: 24,
  },

  category: {
    color: colors.blue(),
    fontFamily: "Pjs-SemiBold",
    fontSize: 14,
  },

  title: {
    fontSize: 28,
    marginTop: 10,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  info: {
    marginTop: 10,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

  description: {
    marginTop: 20,
    lineHeight: 24,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },
});