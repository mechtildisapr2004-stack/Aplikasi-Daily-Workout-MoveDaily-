import React, {
  useState,
} from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react-native";

import {
  colors,
} from "../../assets/theme";

const Register = ({ navigation }) => {

  const [fullname, setFullname] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [showPassword,
    setShowPassword] =
    useState(false);

  const handleRegister = () => {

    if (
      !fullname ||
      !email ||
      !password ||
      !confirmPassword
    ) {

      Alert.alert(
        "Warning",
        "Please fill all fields"
      );

      return;
    }

    if (password !== confirmPassword) {

      Alert.alert(
        "Warning",
        "Password does not match"
      );

      return;
    }

    Alert.alert(
      "Success",
      "Welcome to MoveDaily!",
      [
        {
          text: "OK",
          onPress: () =>
            navigation.goBack(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >

          <ArrowLeft
            size={24}
            color={colors.black()}
          />

        </TouchableOpacity>

        <Text style={styles.title}>
          Join MoveDaily
        </Text>

        <Text style={styles.subtitle}>
          Create your account and stay active everyday
        </Text>

        <Text style={styles.motivation}>
          Track workouts • Build habits • Stay healthy
        </Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#9CA3AF"
          value={fullname}
          onChangeText={setFullname}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <View style={styles.passwordContainer}>

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />

          <TouchableOpacity
            onPress={() =>
              setShowPassword(!showPassword)
            }
          >

            {showPassword ? (
              <EyeOff
                size={20}
                color={colors.grey()}
              />
            ) : (
              <Eye
                size={20}
                color={colors.grey()}
              />
            )}

          </TouchableOpacity>

        </View>

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#9CA3AF"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >

          <Text style={styles.buttonText}>
            Start Moving
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >

          <Text style={styles.loginText}>
            Already have an account?
            <Text style={styles.loginNow}>
              {" "}Login
            </Text>
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 34,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
    marginTop: 24,
  },

  subtitle: {
    marginTop: 10,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
    lineHeight: 22,
  },

  motivation: {
    marginTop: 14,
    color: colors.blue(),
    fontFamily: "Pjs-SemiBold",
    lineHeight: 22,
  },

  input: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 18,
    marginTop: 20,
    fontFamily: "Pjs-Regular",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop: 20,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 16,
    fontFamily: "Pjs-Regular",
  },

  button: {
    backgroundColor: colors.blue(),
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: colors.white(),
    fontFamily: "Pjs-Bold",
    fontSize: 16,
  },

  loginText: {
    marginTop: 28,
    textAlign: "center",
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

  loginNow: {
    color: colors.blue(),
    fontFamily: "Pjs-Bold",
  },
});