import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "../utils/appImages";

const DirectionsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png",
            }}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Directions</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* MAP IMAGE HERE */}
      <Image
source={AppImages.map}        style={styles.map}
        resizeMode="cover"
      />

      {/* Info */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>From:</Text>
        <Text style={styles.value}>Your Location</Text>

        <Text style={[styles.label, { marginTop: 10 }]}>To:</Text>
        <Text style={styles.value}>Heden Golf Hotel</Text>

        <Text style={styles.distance}>Distance: 2.4 KM • Approx 8 min</Text>
      </View>
    </SafeAreaView>
  );
};

export default DirectionsScreen;

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    backgroundColor: "#fff",
    elevation: 4,
  },

  backIcon: {
    width: width * 0.07,
    height: width * 0.07,
    tintColor: "#333",
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: width * 0.055,
    fontWeight: "700",
  },

  /* MAP IMAGE */
  map: {
    width: "100%",
    height: height * 0.55,  // Responsive height
    borderRadius: width * 0.03,
    marginTop: height * 0.015,
  },

  /* INFO SECTION */
  infoBox: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    marginTop: height * 0.015,
  },

  label: {
    fontSize: width * 0.04,
    color: "#777",
  },

  value: {
    fontSize: width * 0.05,
    fontWeight: "700",
    marginTop: height * 0.005,
  },

  distance: {
    fontSize: width * 0.045,
    fontWeight: "600",
    color: "#009DF5",
    marginTop: height * 0.015,
  },
});

