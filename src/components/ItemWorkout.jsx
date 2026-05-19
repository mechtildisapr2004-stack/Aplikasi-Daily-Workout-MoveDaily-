import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import { Heart } from 'lucide-react-native';

const ItemWorkout = ({ item, isFav, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <TouchableOpacity
        style={styles.favBtn}
        onPress={onPress}
      >
        <Heart
          size={18}
          color={isFav ? 'red' : '#999'}
          fill={isFav ? 'red' : 'none'}
        />
      </TouchableOpacity>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.level}</Text>
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.duration}>{item.duration}</Text>
    </View>
  );
};

export default ItemWorkout;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 170,
    borderRadius: 15,
  },

  favBtn: {
    position: 'absolute',
    top: 18,
    right: 18,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
  },

  badge: {
    backgroundColor: '#111827',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 10,
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  duration: {
    color: 'gray',
    marginTop: 5,
  },
});