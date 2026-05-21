import React, {
  useState,
} from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  ArrowLeft,
} from "lucide-react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import {
  colors,
} from "../../assets/theme";

const AddWorkoutPlan = () => {

  const navigation = useNavigation();

  const [title, setTitle] =
    useState("");

  const [duration, setDuration] =
    useState("");

  const [calories, setCalories] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  const handleSubmit = () => {

    if (
      !title ||
      !duration ||
      !calories ||
      !category ||
      !description
    ) {

      Alert.alert(
        "Warning",
        "Please fill all fields"
      );

      return;
    }

    Alert.alert(
      "Success",
      "Workout plan added successfully"
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>

          <TouchableOpacity
            onPress={() =>
              navigation.goBack()
            }
          >
            <ArrowLeft
              size={24}
              color={colors.black()}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Add Workout Plan
          </Text>

        </View>

        <TextInput
          placeholder="Workout title"
          placeholderTextColor="#9CA3AF"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <TextInput
          placeholder="Duration"
          placeholderTextColor="#9CA3AF"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Calories"
          placeholderTextColor="#9CA3AF"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Category"
          placeholderTextColor="#9CA3AF"
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />

        <TextInput
          placeholder="Description"
          placeholderTextColor="#9CA3AF"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
          style={styles.descriptionInput}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >

          <Text style={styles.buttonText}>
            Save Workout
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
};

export default AddWorkoutPlan;

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
    fontSize: 22,
    marginLeft: 16,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  input: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 18,
    marginTop: 20,
    fontFamily: "Pjs-Regular",
  },

  descriptionInput: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 18,
    paddingTop: 18,
    borderRadius: 18,
    marginTop: 20,
    height: 140,
    textAlignVertical: "top",
    fontFamily: "Pjs-Regular",
  },

  button: {
    backgroundColor: colors.blue(),
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  buttonText: {
    color: colors.white(),
    fontFamily: "Pjs-Bold",
    fontSize: 16,
  },
});