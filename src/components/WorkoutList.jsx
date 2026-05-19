import React, { useState } from 'react';

import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import ItemWorkout from './ItemWorkout';
import { WorkoutData } from '../data/workouts';
import { CategoryList } from '../data/categories';

export default function WorkoutList({ search }) {
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryWrapper}
      >
        {CategoryList.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedCategory(item.categoryName)}
            style={[
              styles.categoryButton,
              selectedCategory === item.categoryName &&
                styles.activeCategory,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item.categoryName &&
                  styles.activeText,
              ]}
            >
              {item.categoryName}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {WorkoutData.map((item) => {
          const isFav = favorites.includes(item.id);

          return (
            <ItemWorkout
              key={item.id}
              item={item}
              isFav={isFav}
              onPress={() => toggleFavorite(item.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrapper: {
    marginBottom: 15,
  },

  categoryButton: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  activeCategory: {
    backgroundColor: '#111827',
  },

  categoryText: {
    color: '#000',
    fontWeight: '600',
  },

  activeText: {
    color: '#fff',
  },
});