// ChangePasswordScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PASSWORD_KEY = "user_password";

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [saving, setSaving] = useState(false);

  const handleUpdatePress = async () => {
    Keyboard.dismiss();

    // Basic validation
    if (!newPass || !confirmPass) {
      Alert.alert("Validation", "Please enter new password and confirm it.");
      return;
    }

    if (newPass !== confirmPass) {
      Alert.alert("Mismatch", "New password and confirm password do not match.");
      return;
    }

    try {
      setSaving(true);

      // Save new password to AsyncStorage (persist)
      await AsyncStorage.setItem(PASSWORD_KEY, newPass);

      // Optional: if you want to remove old password or update anything else, do here

      setSaving(false);

      // Inform user
      Alert.alert(
        "Success",
        "Password updated. Please enter your new password on the next screen to confirm.",
        [
          {
            text: "OK",
            onPress: () => {
              // Pass the newly set password to PasscodeScreen for immediate check OR it can read AsyncStorage
              navigation.navigate("PasscodeScreen", { expectedPassword: newPass });
            },
          },
        ],
        { cancelable: false }
      );
    } catch (err) {
      console.error("Saving password failed:", err);
      setSaving(false);
      Alert.alert("Error", "Could not save new password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png",
          }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Change Password</Text>

      {/* OLD PASSWORD */}
      <View style={styles.row}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/619/619023.png" }}
          style={styles.icon}
        />
        <TextInput
          placeholder="Old Password"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
          value={oldPass}
          onChangeText={setOldPass}
        />
      </View>

      {/* NEW PASSWORD */}
      <View style={styles.row}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/619/619023.png" }}
          style={styles.icon}
        />
        <TextInput
          placeholder="Create New Password"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
          value={newPass}
          onChangeText={setNewPass}
        />
      </View>

      {/* CONFIRM NEW PASSWORD */}
      <View style={styles.row}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/619/619023.png" }}
          style={styles.icon}
        />
        <TextInput
          placeholder="Confirm New Password"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity
        style={[styles.btn, saving && { opacity: 0.7 }]}
        onPress={handleUpdatePress}
        disabled={saving}
      >
        <Text style={styles.btnText}>{saving ? "Saving..." : "Update"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },

  backBtn: { marginTop: height * 0.01 },
  backIcon: {
    width: width * 0.07,
    height: width * 0.07,
    tintColor: "#000",
  },

  header: {
    fontSize: width * 0.065,
    fontWeight: "700",
    marginTop: height * 0.02,
    color: "#000",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
    paddingVertical: height * 0.018,
    marginTop: height * 0.02,
  },

  icon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: "#009DF5",
    marginRight: width * 0.03,
  },

  input: {
    flex: 1,
    fontSize: width * 0.045,
    color: "#000",
    paddingVertical: height * 0.006,
  },

  btn: {
    marginTop: height * 0.05,
    backgroundColor: "#00AEEF",
    paddingVertical: height * 0.02,
    borderRadius: width * 0.03,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "700",
  },
});


export default ChangePasswordScreen;