import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Heart } from "lucide-react-native";

// Import Gambar
import hiit from "../../assets/img/hiit.jpg";
import yoga from "../../assets/img/yoga.jpg";
import core from "../../assets/img/core.jpg";
import upper from "../../assets/img/upper.jpg";
import lower from "../../assets/img/lower.jpg";
import meditasi from "../../assets/img/meditasi.jpg";
import zumba from "../../assets/img/zumba.jpg";

const workouts = [
  { id: 1, title: "HIIT Cardio", level: "Hard", duration: "20 min", image: hiit },
  { id: 2, title: "Yoga Flow", level: "Easy", duration: "15 min", image: yoga },
  { id: 3, title: "Core Strength", level: "Medium", duration: "10 min", image: core },
  { id: 4, title: "Upper Body", level: "Hard", duration: "30 min", image: upper },
  { id: 5, title: "Lower Body", level: "Medium", duration: "25 min", image: lower },
  { id: 6, title: "Meditation", level: "Easy", duration: "10 min", image: meditasi },
  { id: 7, title: "Zumba Dance", level: "Medium", duration: "40 min", image: zumba },
];

// Daftar kategori baru sesuai permintaanmu
const categories = ['All', 'Hard', 'Medium', 'Easy'];

export default function WorkoutList({ search }) {
  const [favorites, setFavorites] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All'); // State untuk filter level

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Logika Filter: Gabungan antara Search Bar dan Tombol Kategori
  const filteredWorkout = workouts.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.level === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Tombol Kategori (Hard, Medium, Easy) */}
      <View style={styles.categoryWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(cat)}
              style={[
                styles.categoryButton,
                activeCategory === cat && styles.activeCategoryButton
              ]}
            >
              <Text style={[
                styles.categoryText,
                activeCategory === cat && styles.activeCategoryText
              ]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {filteredWorkout.map((item) => {
            const isFav = favorites.includes(item.id);

            return (
              <View key={item.id} style={styles.card}>
                <Image source={item.image} style={styles.image} />

                <TouchableOpacity
                  style={styles.favBtn}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Heart
                    size={18}
                    color={isFav ? "red" : "#999"}
                    fill={isFav ? "red" : "none"}
                  />
                </TouchableOpacity>

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.level}</Text>
                </View>

                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.duration}>{item.duration}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrapper: {
    marginBottom: 15,
    paddingVertical: 5,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F1F5F9",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  activeCategoryButton: {
    backgroundColor: "#1c4fdf",
    borderColor: "#1c4fdf",
  },
  categoryText: {
    fontSize: 14,
    color: "#64748b",
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "#fff",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    position: 'relative'
  },
  image: {
    width: "100%",
    height: 110,
    borderRadius: 10,
  },
  favBtn: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 6,
    borderRadius: 20,
    zIndex: 2
  },
  badge: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#1c4fdf",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    zIndex: 2
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  title: {
    marginTop: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  duration: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginTop: 2,
  },
});