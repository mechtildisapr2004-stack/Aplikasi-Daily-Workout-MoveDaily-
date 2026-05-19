import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import WorkoutList from './src/components/WorkoutList';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MoveDaily</Text>

      <TextInput
        placeholder="Search workout"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <WorkoutList search={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Pjs-Regular',
  },

  title: {
    fontSize: 26,
    fontFamily: 'Pjs-Bold',
    color: '#000',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 14,
    marginVertical: 15,
    elevation: 2,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    paddingVertical: 10,
    fontFamily: 'Pjs-Regular',
  },
  
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },
});
