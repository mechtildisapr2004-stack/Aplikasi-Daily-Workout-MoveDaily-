import React, {
  useRef,
  useEffect,
  useState,
} from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  ArrowLeft,
  Trash2,
  Pencil,
} from "lucide-react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import axios from "axios";

import { colors } from "../../assets/theme";

const WorkoutDetail = ({ route }) => {

  const { workoutId } = route.params;

  const navigation = useNavigation();

  const [selectedWorkout,
    setSelectedWorkout] =
    useState(null);

  const scrollY = useRef(
    new Animated.Value(0)
  ).current;

  const diffClampY =
    Animated.diffClamp(
      scrollY,
      0,
      60
    );

  const headerY =
    diffClampY.interpolate({
      inputRange: [0, 80],
      outputRange: [0, -120],
    });

  const bottomBarY =
    diffClampY.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 140],
    });

  const getWorkoutDetail =
    async () => {

      try {

        const response =
          await axios.get(
            `https://6a0f5bd21736097c360b86ab.mockapi.io/workout/${workoutId}`
          );

        setSelectedWorkout(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  useEffect(() => {

    getWorkoutDetail();

  }, []);

  const handleDelete =
    () => {

      Alert.alert(
        "Delete Workout",
        "Are you sure you want to delete this workout?",

        [
          {
            text: "Cancel",
            style: "cancel",
          },

          {
            text: "Delete",

            style: "destructive",

            onPress: async () => {

              try {

                await axios.delete(
                  `https://6a0f5bd21736097c360b86ab.mockapi.io/workout/${workoutId}`
                );

                Alert.alert(
                  "Success",
                  "Workout deleted successfully"
                );

                navigation.goBack();

              } catch (error) {

                console.log(error);

                Alert.alert(
                  "Error",
                  "Failed to delete workout"
                );
              }
            },
          },
        ]
      );
    };

  if (!selectedWorkout) {

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Text>
          Loading...
        </Text>

      </View>
    );
  }

  return (

    <SafeAreaView
      style={styles.container}
    >

      <Animated.View
        style={[
          styles.header,
          {
            transform: [
              {
                translateY: headerY,
              },
            ],
          },
        ]}
      >

        <View
          style={styles.headerContent}
        >

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

          <View
            style={styles.headerRight}
          >

            <TouchableOpacity

              onPress={() =>
                navigation.navigate(
                  "AddWorkoutPlan",
                  {
                    workout:
                      selectedWorkout,
                  }
                )
              }
            >

              <Pencil
                size={22}
                color={colors.black()}
              />

            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginLeft: 16 }}

              onPress={handleDelete}
            >

              <Trash2
                size={22}
                color="red"
              />

            </TouchableOpacity>

          </View>

        </View>

      </Animated.View>

      <Animated.ScrollView

        showsVerticalScrollIndicator={
          false
        }

        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}

        contentContainerStyle={{
          paddingTop: 95,
          paddingBottom: 120,
        }}
      >

        <Image
          source={{
            uri: selectedWorkout.image,
          }}

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
            {selectedWorkout.duration}
            {" • "}
            {selectedWorkout.calories}
          </Text>

          <Text
            style={styles.description}
          >
            {selectedWorkout.description}
          </Text>

        </View>

      </Animated.ScrollView>

      <Animated.View
        style={[
          styles.bottomBar,
          {
            transform: [
              {
                translateY:
                  bottomBarY,
              },
            ],
          },
        ]}
      >

        <Text style={styles.bottomText}>
          Start Workout
        </Text>

      </Animated.View>

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
    paddingTop: 45,
    paddingBottom: 14,

    position: "absolute",

    top: 0,
    left: 0,
    right: 0,

    zIndex: 1000,

    backgroundColor:
      colors.white(),
  },

  headerContent: {
    flexDirection: "row",
    justifyContent:
      "space-between",

    alignItems: "center",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
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

  bottomBar: {
    position: "absolute",

    bottom: 40,
    left: 20,
    right: 20,

    backgroundColor:
      colors.blue(),

    paddingVertical: 18,

    borderRadius: 20,

    alignItems: "center",

    zIndex: 1000,

    elevation: 10,
  },

  bottomText: {
    color: colors.white(),
    fontSize: 16,
    fontFamily: "Pjs-Bold",
  },

});