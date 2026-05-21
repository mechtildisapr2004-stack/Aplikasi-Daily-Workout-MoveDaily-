import React, {
  useEffect,
} from "react";

import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  colors,
} from "../../assets/theme";

const SplashScreen = ({
  navigation,
}) => {

  useEffect(() => {

    const timeout = setTimeout(() => {

      navigation.replace("Login");

    }, 2500);

    return () => clearTimeout(timeout);

  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.title}>
          MoveDaily
        </Text>

        <Text style={styles.subtitle}>
          Move Your Body Everyday
        </Text>

      </View>

    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue(),
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 42,
    color: colors.white(),
    fontFamily: "Pjs-Bold",
  },

  subtitle: {
    marginTop: 12,
    color: colors.white(),
    fontFamily: "Pjs-Regular",
    fontSize: 16,
  },
});