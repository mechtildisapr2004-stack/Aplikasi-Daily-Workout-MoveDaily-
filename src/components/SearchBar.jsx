import React from "react";

import {
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import {
  Search,
} from "lucide-react-native";

import {
  colors,
} from "../../assets/theme";

const SearchBar = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>

      <Search
        size={20}
        color={colors.grey()}
      />

      <TextInput
        placeholder="Search workout..."
        placeholderTextColor="#9CA3AF"

        value={value}

        onChangeText={onChangeText}

        style={styles.input}
      />

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    borderRadius: 18,
    marginTop: 24,
  },

  input: {
    flex: 1,
    paddingVertical: 14,
    marginLeft: 10,
    fontFamily: "Pjs-Regular",
    color: colors.black(),
  },
});