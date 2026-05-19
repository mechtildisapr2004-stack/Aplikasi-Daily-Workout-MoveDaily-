import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import WorkoutList from '../components/WorkoutList';

import { colors } from '../../assets/theme';

const Discover = () => {
  return (
    <SafeAreaView style={styles.container}>

    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 120,
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

        <View style={styles.listContainer}>
          <WorkoutList />
        </View>

      </ScrollView>

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