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
  Eye,
  EyeOff,
} from "lucide-react-native";

import {
  colors,
} from "../../assets/theme";

const Login = ({ navigation }) => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = () => {

    if (!email || !password) {

      Alert.alert(
        "Warning",
        "Please fill all fields"
      );

      return;
    }

    navigation.replace("MainApp");
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.title}>
          Welcome Back
        </Text>

        <Text style={styles.subtitle}>
          Login to continue your fitness journey
        </Text>

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

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >

          <Text style={styles.buttonText}>
            Login
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Register")
          }
        >

          <Text style={styles.registerText}>
            Don't have an account?
            <Text style={styles.signUp}>
              {" "}Sign Up
            </Text>
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default Login;

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
  },

  subtitle: {
    marginTop: 10,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
    lineHeight: 22,
  },

  input: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 18,
    marginTop: 30,
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

  registerText: {
    marginTop: 28,
    textAlign: "center",
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

  signUp: {
    color: colors.blue(),
    fontFamily: "Pjs-Bold",
  },
});