import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  useNavigation,
} from "@react-navigation/native";

import {
  Plus,
} from "lucide-react-native";

import {
  colors,
} from "../../assets/theme";

const Profile = () => {

  const navigation =
    useNavigation();

  return (

    <SafeAreaView
      style={styles.container}
    >

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >

        <View style={styles.profileContainer}>

          <Image
            source={{
              uri: "https://i.pravatar.cc/300",
            }}

            style={styles.profileImage}
          />

          <Text style={styles.name}>
            MoveDaily User
          </Text>

          <Text style={styles.email}>
            movedaily@gmail.com
          </Text>

        </View>

        <View style={styles.statsWrapper}>

          <View style={styles.statsCard}>

            <Text style={styles.statsNumber}>
              12
            </Text>

            <Text style={styles.statsLabel}>
              Workouts
            </Text>

          </View>

          <View style={styles.statsCard}>

            <Text style={styles.statsNumber}>
              8
            </Text>

            <Text style={styles.statsLabel}>
              Completed
            </Text>

          </View>

          <View style={styles.statsCard}>

            <Text style={styles.statsNumber}>
              540
            </Text>

            <Text style={styles.statsLabel}>
              Calories
            </Text>

          </View>

        </View>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Daily Motivation 🔥
          </Text>

          <Text style={styles.cardText}>
            Keep pushing yourself and
            stay consistent with your
            fitness journey every day.
          </Text>

        </View>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Workout Plan
          </Text>

          <Text style={styles.cardText}>
            Create your own custom
            workout plans easily using
            the add workout feature.
          </Text>

        </View>

      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}

        onPress={() =>
          navigation.navigate(
            "AddWorkoutPlan"
          )
        }
      >

        <Plus
          color="#fff"
          size={30}
        />

      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 24,
  },

  profileContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontSize: 24,
    marginTop: 18,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  email: {
    marginTop: 8,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

  statsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },

  statsCard: {
    backgroundColor: "#F3F4F6",
    width: "31%",
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  statsNumber: {
    fontSize: 22,
    fontFamily: "Pjs-Bold",
    color: colors.blue(),
  },

  statsLabel: {
    marginTop: 8,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
    fontSize: 12,
  },

  card: {
    backgroundColor: "#F3F4F6",
    padding: 22,
    borderRadius: 22,
    marginTop: 24,
  },

  cardTitle: {
    fontSize: 18,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  cardText: {
    marginTop: 10,
    lineHeight: 22,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

  addButton: {
    position: "absolute",

    bottom: 120,
    right: 24,

    width: 70,
    height: 70,

    borderRadius: 35,

    backgroundColor:
      colors.blue(),

    justifyContent: "center",
    alignItems: "center",

    elevation: 10,
  },

});