import React from 'react';

import {
  StyleSheet,
 Text,
  View,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileData } from '../data/profiledata';

import { colors } from '../../assets/theme';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.profileContainer}>

        <Image
          source={{
            uri: ProfileData.profilePict,
          }}
          style={styles.image}
        />

        <Text style={styles.name}>
          {ProfileData.name}
        </Text>

        <Text style={styles.info}>
          Member since {ProfileData.createdAt}
        </Text>

        <View style={styles.statsContainer}>

          <View style={styles.statsBox}>
            <Text style={styles.number}>
              {ProfileData.totalWorkout}
            </Text>

            <Text style={styles.label}>
              Workout
            </Text>
          </View>

          <View style={styles.statsBox}>
            <Text style={styles.number}>
              {ProfileData.totalSteps}
            </Text>

            <Text style={styles.label}>
              Steps
            </Text>
          </View>

          <View style={styles.statsBox}>
            <Text style={styles.number}>
              {ProfileData.calories}
            </Text>

            <Text style={styles.label}>
              Calories
            </Text>
          </View>

        </View>

      </View>

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  profileContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontSize: 24,
    fontFamily: 'Pjs-Bold',
    marginTop: 15,
    color: colors.black(),
  },

  info: {
    fontSize: 14,
    color: colors.grey(),
    marginBottom: 25,
    fontFamily: 'Pjs-Regular',
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 15,
  },

  statsBox: {
    backgroundColor: colors.blue(),
    padding: 20,
    borderRadius: 20,
    width: 90,
    alignItems: 'center',
  },

  number: {
    color: colors.white(),
    fontSize: 18,
    fontFamily: 'Pjs-Bold',
  },

  label: {
    color: colors.white(),
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Pjs-Regular',
  },
});