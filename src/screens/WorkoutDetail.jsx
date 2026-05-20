import React, { useRef, } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, MoreVertical, Share2 } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { WorkoutData } from "../data/workouts";
import { colors } from "../../assets/theme";

const WorkoutDetail = ({ route }) => {

  const { workoutId } = route.params;

  const navigation = useNavigation();

  const selectedWorkout = WorkoutData.find(
    (item) => item.id === workoutId
  );

  if (!selectedWorkout) {
    return null;
  }

  const scrollY = useRef(
    new Animated.Value(0)
  ).current;

  const diffClampY =
  Animated.diffClamp(scrollY, 0, 60);

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

  return (
    <SafeAreaView style={styles.container}>

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
        <View style={styles.headerContent}>

  <TouchableOpacity
    onPress={() => navigation.goBack()}
  >
    <ArrowLeft
      size={24}
      color={colors.black()}
    />
  </TouchableOpacity>

  <View style={styles.headerRight}>

    <TouchableOpacity>
      <Share2
        size={22}
        color={colors.black()}
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginLeft: 16 }}
    >
      <MoreVertical
        size={22}
        color={colors.black()}
      />
    </TouchableOpacity>

  </View>

</View>

      </Animated.View>

      <Animated.ScrollView

        showsVerticalScrollIndicator={false}

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

      </Animated.ScrollView>

      <Animated.View
        style={[
          styles.bottomBar,
          {
            transform: [
              {
                translateY: bottomBarY,
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
    paddingButtom: 14,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, 
    backgroundColor: colors.white(),
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
    backgroundColor: colors.blue(),
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

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
});