// TrackDriverScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "../utils/appImages";

const TrackDriverScreen = ({ navigation }) => {
  const mapImage =
    "https://i.imgur.com/V9M6p5b.png"; // ⭐ Replace with GOOD working route map (blue path)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png",
            }}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Track driver</Text>

        <View style={{ width: 30 }} /> {/* placeholder for alignment */}
      </View>

      {/* MAP */}
      <Image
source={AppImages.map}        style={styles.mapImage}
        resizeMode="cover"
      />

      {/* DRIVER FLOAT CARD */}
      <View style={styles.driverCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.driverImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.driverName}>Winston</Text>
          <Text style={styles.driverRating}>⭐ 3.9   Reviews (200)</Text>
          <Text style={styles.driverPhone}>+225 22 43 15 89</Text>
        </View>

        <View>
          <Text style={styles.arrivalLabel}>Arrival</Text>
          <Text style={styles.arrivalTime}>5 min</Text>
        </View>
      </View>

      {/* BOTTOM STATUS BAR */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomLabel}>Your driver is on the way</Text>
        <Text style={styles.bottomSub}>Tracking live route…</Text>
      </View>
    </SafeAreaView>
  );
};

export default TrackDriverScreen;

/* ====================================================== */
/* ======================= STYLES ======================== */
/* ====================================================== */

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backIcon: { width: 28, height: 28, tintColor: "#000" },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },

  mapImage: {
    width: "100%",
    height: "78%",
  },

  /* DRIVER CARD */
  driverCard: {
    position: "absolute",
    top: 120,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  driverImg: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  driverName: { fontSize: 16, fontWeight: "700" },
  driverRating: { fontSize: 13, color: "#777", marginTop: 3 },
  driverPhone: { fontSize: 13, color: "#333", marginTop: 3 },

  arrivalLabel: {
    fontSize: 12,
    color: "#777",
    textAlign: "right",
  },
  arrivalTime: {
    fontSize: 18,
    fontWeight: "700",
    color: "#009DF5",
  },

  /* BOTTOM BAR */
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 18,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  bottomLabel: { fontSize: 16, fontWeight: "700", color: "#333" },
  bottomSub: { fontSize: 13, color: "#777", marginTop: 4 },
});
