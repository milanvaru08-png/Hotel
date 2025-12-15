// PasscodeScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");
const PASSWORD_KEY = "user_password";

const PasscodeScreen = ({ navigation, route }) => {
  const [entered, setEntered] = useState("");
  const [expected, setExpected] = useState(null);

  useEffect(() => {
    if (route?.params?.expectedPassword) {
      setExpected(route.params.expectedPassword);
      return;
    }

    const load = async () => {
      try {
        const p = await AsyncStorage.getItem(PASSWORD_KEY);
        setExpected(p);
      } catch (e) {
        console.warn("Failed reading password", e);
      }
    };
    load();
  }, [route]);

  const onKeyPress = (digit) => {
    const v = (entered + digit).slice(0, 6);
    setEntered(v);

    if (expected && v.length >= expected.length) {
      if (v === expected) {
        Alert.alert("Success", "Passcode correct.", [
          { text: "OK", onPress: () => navigation.replace("FindRoom") },
        ]);
      } else {
        Alert.alert("Incorrect", "Passcode is incorrect.");
        setEntered("");
      }
    }
  };

  const renderKey = (n) => (
    <TouchableOpacity key={n} onPress={() => onKeyPress(String(n))} style={styles.key}>
      <Text style={styles.keyTxt}>{n}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter passcode</Text>

      {/* DOT INDICATORS */}
      <View style={styles.dotsRow}>
        {Array.from({ length: expected ? expected.length : 4 }).map((_, i) => (
          <View key={i} style={[styles.dot, entered.length > i && styles.dotActive]} />
        ))}
      </View>

      {/* NUMERIC KEYPAD */}
      <View style={styles.keypad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(renderKey)}

        <View style={{ width: keySize }} />
        {renderKey(0)}

        <TouchableOpacity
          style={styles.key}
          onPress={() => setEntered((s) => s.slice(0, -1))}
        >
          <Text style={styles.keyTxt}>⌫</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasscodeScreen;

/* ============= RESPONSIVE STYLES ============= */

const keySize = width * 0.22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: height * 0.06,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: width * 0.065,
    fontWeight: "700",
    marginBottom: height * 0.03,
    color: "#000",
  },

  dotsRow: {
    flexDirection: "row",
    marginBottom: height * 0.05,
  },

  dot: {
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: width * 0.02,
    backgroundColor: "#EEE",
    margin: width * 0.02,
  },

  dotActive: {
    backgroundColor: "#00AEEF",
  },

  keypad: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  key: {
    width: keySize,
    height: keySize,
    borderRadius: keySize / 2,
    backgroundColor: "#F0F6FA",
    margin: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },

  keyTxt: {
    fontSize: width * 0.08,
    fontWeight: "700",
    color: "#000",
  },
});
