import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { AppImages } from "../utils/appImages";

const SigninScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={AppImages.splash}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>

        {/* Email */}
        <View style={styles.inputRow}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
            }}
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputRow}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
            }}
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("OtpVerify")}
        >
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>

        {/* Social Login */}
        <Text style={styles.or}>or sign in using</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity
            style={[styles.socialBtn, { backgroundColor: "#4267B2" }]}
          >
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialBtn, { backgroundColor: "#DB4437" }]}
          >
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signinText}>
            Don’t have an account?{" "}
            <Text style={styles.signinLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center", alignItems: "center" },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 20,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    marginTop: 12,
  },

  icon: {
    width: 22,
    height: 22,
    tintColor: "#3A3A3A",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#444",
  },

  forgotText: {
    color: "#FF5733",
    marginTop: 12,
    fontSize: 14,
    alignSelf: "flex-start",
  },

  btn: {
    height: 50,
    backgroundColor: "#009DF5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  btnText: { color: "#fff", fontSize: 18, fontWeight: "600" },

  or: {
    textAlign: "center",
    marginTop: 15,
    color: "#7A7A7A",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  socialBtn: {
    width: "48%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  socialText: { color: "#fff", fontWeight: "600", fontSize: 16 },

  signinText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
    color: "#555",
  },

  signinLink: { color: "#009DF5", fontWeight: "600" },
});

export default SigninScreen;
