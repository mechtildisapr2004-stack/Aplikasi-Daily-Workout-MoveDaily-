import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Search, Bell } from 'lucide-react-native';
import WorkoutList from './src/components/WorkoutList';
import { useFonts } from 'expo-font';
import { colors, fontType } from './assets/theme';

export default function App() {
  const [search, setSearch] = useState("");

  const [loaded] = useFonts(fontType);

  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Halo, Maria 👋</Text>
          <Text style={styles.title}>MoveDaily</Text>
        </View>
        <Bell size={22} color="#000" />
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Search size={18} color="gray" />
        <TextInput
          placeholder="Cari latihan..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* LIST */}
      <WorkoutList search={search} />
    </SafeAreaView>
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
});
