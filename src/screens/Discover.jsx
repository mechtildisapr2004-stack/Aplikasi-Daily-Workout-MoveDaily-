import React, { useRef } from "react";

import {
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutList from "../components/WorkoutList";
import { colors } from "../../assets/theme";

const Discover = () => {
  const scrollY = useRef(
  new Animated.Value(0)
  ).current;

  const diffClampY =
  Animated.diffClamp(scrollY, 0, 100);

  const categoryY =
    diffClampY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>

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
    paddingBottom: 140,
    paddingTop: 90,
  }}
>

        <View style={styles.header}>
          <Text style={styles.title}>
            Discover
          </Text>

          <Text style={styles.subtitle}>
            Explore your favorite workout
          </Text>
        </View>

        <Animated.View
          style={[
            styles.listContainer,
            {
              transform: [
                {
                  translateY: categoryY,
                },
              ],
            },
          ]}
        >
          <WorkoutList />
        </Animated.View>

      </Animated.ScrollView>

    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: colors.white(),
  },

  title: {
    fontSize: 28,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  subtitle: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Pjs-Regular',
    color: colors.grey(),
  },

  listContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
});