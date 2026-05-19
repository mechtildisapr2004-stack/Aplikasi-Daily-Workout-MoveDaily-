import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../../assets/theme';

const ItemActivity = ({ title, value, color }) => {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: color },
      ]}
    >
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
};

export default ItemActivity;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  title: {
    color: colors.white(),
    fontSize: 14,
    fontFamily: 'Pjs-SemiBold',
  },

  value: {
    color: colors.white(),
    fontSize: 22,
    marginTop: 10,
    fontFamily: 'Pjs-Bold',
  },
});