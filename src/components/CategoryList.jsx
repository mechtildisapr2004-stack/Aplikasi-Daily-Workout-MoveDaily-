import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

import CategoryButton from './CategoryButton';
import { CategoryList as DataCategory } from '../data/categories';

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}
      >
        {DataCategory.map((item) => (
          <CategoryButton
            key={item.id}
            item={item}
            active={selectedCategory === item.categoryName}
            onPress={() =>
              setSelectedCategory(item.categoryName)
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
  },
});