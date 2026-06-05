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
  Image,
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

import { supabase }
  from "../libs/supabase";

import * as ImagePicker
  from "expo-image-picker";

import * as FileSystem
  from "expo-file-system/legacy";

import "react-native-url-polyfill/auto";

const AddWorkoutPlan =
  ({ route }) => {

    const navigation =
      useNavigation();

    const workout =
      route?.params?.workout;

    const [title, setTitle] =
      useState(
        workout?.title || ""
      );

    const [duration, setDuration] =
      useState(
        workout?.duration || ""
      );

    const [calories, setCalories] =
      useState(
        workout?.calories || ""
      );

    const [category, setCategory] =
      useState(
        workout?.category || ""
      );

    const [description,
      setDescription] =
      useState(
        workout?.description || ""
      );

    const [image, setImage] =
      useState(
        workout?.image || ""
      );

    const handleSubmit =
      async () => {

        if (
          !title ||
          !duration ||
          !calories ||
          !category ||
          !description ||
          !image
        ) {

          Alert.alert(
            "Warning",
            "Please fill all fields"
          );

          return;
        }

        try {

          let imageUrl =
            image;

          if (
            image.startsWith(
              "file://"
            )
          ) {

            const uploadedUrl =
              await uploadImage(
                image
              );

            if (
              !uploadedUrl
            ) {

              Alert.alert(
                "Error",
                "Failed to upload image"
              );

              return;
            }

            imageUrl =
              uploadedUrl;
          }

          if (workout) {

            const { error } =
              await supabase
                .from(
                  "workouts"
                )
                .update({
                  title,
                  duration,
                  calories,
                  category,
                  image:
                    imageUrl,
                  description,
                })
                .eq(
                  "id",
                  workout.id
                );

            if (error)
              throw error;

          } else {

            const { error } =
              await supabase
                .from(
                  "workouts"
                )
                .insert([
                  {
                    title,
                    duration,
                    calories,
                    category,
                    image:
                      imageUrl,
                    description,
                  },
                ]);

            if (error)
              throw error;
          }

          Alert.alert(
            "Success",
            workout
              ? "Workout updated successfully"
              : "Workout added successfully"
          );

          navigation.goBack();

        } catch (error) {

          console.log(error);

          Alert.alert(
            "Error",
            workout
              ? "Failed to update workout"
              : "Failed to add workout"
          );
        }
      };

    const pickImage =
      async () => {

        const result =
          await ImagePicker
            .launchImageLibraryAsync({
              mediaTypes:
                ["images"],

              allowsEditing: true,

              quality: 1,
            });

        if (
          !result.canceled
        ) {

          setImage(
            result.assets[0].uri
          );
        }
      };

    const uploadImage =
      async (uri) => {

        try {

          const fileName =
            `${Date.now()}.jpg`;

          const base64 =
            await FileSystem
              .readAsStringAsync(
                uri,
                {
                  encoding: "base64",
                }
              );

          const arrayBuffer =
            Uint8Array.from(
              atob(base64),
              (c) =>
                c.charCodeAt(0)
            );

          const { error } =
            await supabase
              .storage
              .from(
                "workout-images"
              )
              .upload(
                fileName,
                arrayBuffer,
                {
                  contentType:
                    "image/jpeg",
                  upsert: true,
                }
              );

          if (error)
            throw error;

          const {
            data,
          } = supabase
            .storage
            .from(
              "workout-images"
            )
            .getPublicUrl(
              fileName
            );

          return data.publicUrl;

        } catch (error) {

          console.log(
            "UPLOAD ERROR:",
            error
          );

          Alert.alert(
            "Upload Error",
            error.message
          );

          return null;
        }
      };

    return (

      <SafeAreaView
        style={styles.container}
      >

        <ScrollView
          showsVerticalScrollIndicator={
            false
          }
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

            <Text
              style={styles.headerTitle}
            >
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
            placeholder="Category (Easy / Medium / Hard)"
            placeholderTextColor="#9CA3AF"
            value={category}
            onChangeText={setCategory}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.input}
            onPress={pickImage}
          >

            <Text>

              {image
                ? "Image Selected ✅"
                : "Choose Image"}

            </Text>

          </TouchableOpacity>

          {
            image !== "" && (

              <Image
                source={{
                  uri: image,
                }}

                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 15,
                  marginTop: 15,
                }}
              />

            )
          }

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