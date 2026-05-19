import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const CategoryButton = ({ item, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        active && styles.activeButton,
      ]}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {item.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  activeButton: {
    backgroundColor: '#111827',
  },

  text: {
    color: '#000',
    fontWeight: '600',
  },

  activeText: {
    color: '#fff',
  },
});