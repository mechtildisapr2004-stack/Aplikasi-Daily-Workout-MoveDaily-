import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import WorkoutList from '../components/WorkoutList';
import ItemActivity from '../components/ItemActivity';

import { colors } from '../../assets/theme';

const Home = () => {
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
            MoveDaily
          </Text>

          <Text style={styles.subtitle}>
            Stay healthy and active
          </Text>
        </View>

        <View style={styles.activityContainer}>

          <ItemActivity
            title="Steps"
            value="8.240"
            color={colors.blue()}
          />

          <ItemActivity
            title="Calories"
            value="520 kcal"
            color={colors.green()}
          />

        </View>

        <View style={styles.workoutSection}>
          <Text style={styles.sectionTitle}>
            Today's Workout
          </Text>

          <WorkoutList />
        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default Home;

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
    fontSize: 30,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  subtitle: {
    fontSize: 14,
    fontFamily: 'Pjs-Regular',
    color: colors.grey(),
    marginTop: 5,
  },

  activityContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  workoutSection: {
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Pjs-Bold',
    marginBottom: 15,
    color: colors.black(),
  },
});