import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AppImages } from "../utils/appImages";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={AppImages.splash}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <Text style={styles.title}>Forgot Password?</Text>

        <Text style={styles.info}>
          Please enter your registered email address to recover your password
        </Text>

        <View style={styles.inputRow}>
          <Icon name="mail-outline" size={22} color="#3A3A3A" />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  /* Background Image */
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },

  /* Card Container */
  card: {
    width: "92%",
    backgroundColor: "#fff",
    padding: width * 0.06,
    borderRadius: width * 0.05,
    elevation: 5,
  },

  /* Title */
  title: {
    fontSize: width * 0.065,
    fontWeight: "700",
    marginBottom: height * 0.01,
    color: "#000",
  },

  /* Info Text */
  info: {
    fontSize: width * 0.035,
    color: "#7A7A7A",
    marginBottom: height * 0.025,
    lineHeight: width * 0.045,
  },

  /* Input Row */
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.03,
    height: height * 0.065,
    marginBottom: height * 0.02,
  },

  /* Input Field */
  input: {
    flex: 1,
    marginLeft: width * 0.03,
    fontSize: width * 0.04,
    color: "#444",
  },

  /* Submit Button */
  btn: {
    height: height * 0.065,
    backgroundColor: "#009DF5",
    borderRadius: width * 0.03,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.01,
  },

  /* Button Text */
  btnText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "700",
  },
});
export default ForgotPasswordScreen;

