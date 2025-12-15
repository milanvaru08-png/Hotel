// BookCarScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "../utils/appImages";

const BookCarScreen = ({ navigation }) => {
  const [cancelVisible, setCancelVisible] = useState(false);
  const [reason, setReason] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  const carType = "Saloon";
  const mapImage = "https://i.imgur.com/4ZQZ4gZ.png"; // replace static map

  const reasonsList = [
    "Cab not require",
    "My trip is cancelled",
    "Driver delay",
    "Price is more",
    "ETA is more",
    "Other",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png" }}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Book a car</Text>

          {/* History button */}
          <TouchableOpacity onPress={() => navigation.navigate("CarHistory")}>
            <View style={styles.historyBox}>
              <Text style={styles.historyText}>History</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* PICKUP / DROPOFF CARD */}
        <View style={styles.card}>
          <Text style={styles.label}>Pickup location</Text>
          <Text style={styles.value}>Abidjan, Airport</Text>

          <Text style={[styles.label, { marginTop: 10 }]}>Dropoff location</Text>
          <Text style={styles.value}>Abidjan, Côte d’Ivoire</Text>

          {/* ROW DETAILS */}
          <View style={styles.row}>
            <View style={styles.rowBox}>
              <Text style={styles.smallLabel}>Car</Text>
              <Text style={styles.smallValue}>{carType}</Text>
            </View>

            <View style={styles.rowBox}>
              <Text style={styles.smallLabel}>Language</Text>
              <Text style={styles.smallValue}>English</Text>
            </View>

            <View style={styles.rowBox}>
              <Text style={styles.smallLabel}>ETA</Text>
              <Text style={styles.smallValue}>15 min</Text>
            </View>

            <View style={styles.rowBox}>
              <Text style={styles.smallLabel}>Total price</Text>
              <Text style={styles.smallValue}>$20</Text>
            </View>
          </View>
        </View>

        {/* MAP WITH TAXI ICONS */}
        <View style={styles.mapBox}>
          <Image source={AppImages.map} style={styles.mapImage} />

          {/* Taxi icons positioned */}
          <Image source={{ uri: taxi }} style={[styles.taxi, { top: 50, left: 60 }]} />
          <Image source={{ uri: taxi }} style={[styles.taxi, { top: 120, left: 140 }]} />
          <Image source={{ uri: taxi }} style={[styles.taxi, { top: 200, left: 90 }]} />
        </View>

        {/* DRIVER CARD */}
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

          <TouchableOpacity style={styles.trackBtn} onPress={() => navigation.navigate("TrackDriver")}>
            <Text style={styles.trackText}>TRACK</Text>
          </TouchableOpacity>
        </View>

        {/* FLOATING ACCEPT / CANCEL BUTTONS */}
        <TouchableOpacity style={styles.acceptBtn}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/845/845646.png" }}
            style={styles.actionIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn} onPress={() => setCancelVisible(true)}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828665.png" }}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </ScrollView>

      {/* CANCEL REASON POPUP */}
      <Modal visible={cancelVisible} transparent animationType="fade">
        <View style={styles.popupBg}>
          <View style={styles.popupBox}>
            {/* CLOSE BUTTON */}
            <TouchableOpacity
              onPress={() => setCancelVisible(false)}
              style={styles.popupCloseBtn}
            >
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.popupTitle}>WHY YOU CANCEL THE CAB</Text>

            {/* RADIO LIST */}
            {reasonsList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioRow}
                onPress={() => setSelectedReason(item)}
              >
                <View style={styles.radioOuter}>
                  {selectedReason === item && <View style={styles.radioInner} />}
                </View>

                <Text style={styles.radioLabel}>{item}</Text>
              </TouchableOpacity>
            ))}

            {/* TEXT INPUT FOR "OTHER" */}
            {selectedReason === "Other" && (
              <TextInput
                placeholder="Enter text reason here"
                value={reason}
                onChangeText={setReason}
                style={styles.input}
              />
            )}

            {/* SUBMIT BUTTON */}
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                setCancelVisible(false);
                navigation.goBack();
              }}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default BookCarScreen;

const taxi = "https://cdn-icons-png.flaticon.com/512/743/743912.png"; // taxi icon

/* ========================================================= */
/* ========================= STYLES ========================= */
/* ========================================================= */
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
  },

  backIcon: { width: width * 0.07, height: width * 0.07, tintColor: "#000" },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: width * 0.05,
    fontWeight: "700",
  },

  historyBox: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.008,
    backgroundColor: "#E9F4FF",
    borderRadius: width * 0.02,
  },
  historyText: {
    color: "#0A84FF",
    fontWeight: "700",
    fontSize: width * 0.035,
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: width * 0.03,
    marginTop: height * 0.015,
    padding: width * 0.04,
    borderRadius: width * 0.03,
    elevation: 3,
  },

  label: { fontSize: width * 0.035, color: "#666" },
  value: { fontSize: width * 0.04, fontWeight: "700", marginTop: 4 },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.015,
  },
  rowBox: { alignItems: "center" },
  smallLabel: { fontSize: width * 0.03, color: "#777" },
  smallValue: { fontSize: width * 0.04, fontWeight: "700" },

  /* MAP */
  mapBox: {
    height: height * 0.32,
    width: "100%",
    position: "relative",
    marginTop: height * 0.01,
  },

  mapImage: { width: "100%", height: "100%" },

  taxi: {
    width: width * 0.1,
    height: width * 0.1,
    position: "absolute",
  },

  /* DRIVER CARD */
  driverCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.015,
    padding: width * 0.03,
    borderRadius: width * 0.04,
    elevation: 4,
    alignItems: "center",
  },

  driverImg: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    marginRight: width * 0.04,
  },

  driverName: { fontSize: width * 0.045, fontWeight: "700" },
  driverRating: { fontSize: width * 0.035, color: "#777", marginTop: 3 },
  driverPhone: { fontSize: width * 0.035, marginTop: 3 },

  trackBtn: {
    backgroundColor: "#009DF5",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.012,
    borderRadius: width * 0.025,
  },
  trackText: { color: "#fff", fontWeight: "700", fontSize: width * 0.035 },

  /* FLOATING BUTTONS */
  acceptBtn: {
    position: "absolute",
    bottom: height * 0.16,
    right: width * 0.25,
    width: width * 0.16,
    height: width * 0.16,
    backgroundColor: "#00C569",
    borderRadius: width * 0.08,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelBtn: {
    position: "absolute",
    bottom: height * 0.16,
    right: width * 0.05,
    width: width * 0.16,
    height: width * 0.16,
    backgroundColor: "#FF4E4E",
    borderRadius: width * 0.08,
    justifyContent: "center",
    alignItems: "center",
  },

  actionIcon: { width: width * 0.08, height: width * 0.08, tintColor: "#fff" },

  /* POPUP */
  popupBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
  },

  popupBox: {
    width: "100%",
    backgroundColor: "#fff",
    padding: width * 0.05,
    borderRadius: width * 0.05,
  },

  popupCloseBtn: { position: "absolute", right: 10, top: 10 },

  closeIcon: { fontSize: width * 0.06, color: "#333" },

  popupTitle: {
    textAlign: "center",
    fontSize: width * 0.045,
    fontWeight: "700",
    marginBottom: height * 0.02,
  },

  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.015,
  },

  radioOuter: {
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: width * 0.03,
    borderWidth: 2,
    borderColor: "#0A84FF",
    justifyContent: "center",
    alignItems: "center",
  },

  radioInner: {
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: width * 0.02,
    backgroundColor: "#0A84FF",
  },

  radioLabel: { marginLeft: width * 0.03, fontSize: width * 0.036 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: width * 0.03,
    padding: width * 0.03,
    marginTop: height * 0.01,
    fontSize: width * 0.04,
  },

  submitBtn: {
    marginTop: height * 0.02,
    backgroundColor: "#0A84FF",
    paddingVertical: height * 0.018,
    borderRadius: width * 0.03,
  },

  submitText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: width * 0.045,
  },
});

