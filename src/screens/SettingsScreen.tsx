// SettingsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  Modal,
} from "react-native";

const iconArrow = "https://cdn-icons-png.flaticon.com/512/271/271228.png";

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const Row = ({ title, icon, onPress }) => (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.rowLeft}>
        {icon && <Image source={{ uri: icon }} style={styles.rowIcon} />}
        <Text style={styles.rowText}>{title}</Text>
      </View>
      <Image source={{ uri: iconArrow }} style={styles.arrowIcon} />
    </TouchableOpacity>
  );

  return (
    <>
      {/* MAIN SCREEN */}
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png" }}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Settings</Text>
        </View>

        {/* NOTIFICATION SWITCH */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Notifications</Text>

          <Switch
            trackColor={{ false: "#ccc", true: "#00C3FF" }}
            thumbColor="#fff"
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        {/* OTHER MENU ROWS */}
        <Row title="Privacy Policy" icon="https://cdn-icons-png.flaticon.com/512/1828/1828721.png" />
        <Row title="Terms & conditions" icon="https://cdn-icons-png.flaticon.com/512/1828/1828721.png" />
        <Row title="About app" icon="https://cdn-icons-png.flaticon.com/512/992/992665.png" />
        <Row title="Help & Support" icon="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" />
        <Row title="Rate the Mypass app" icon="https://cdn-icons-png/flaticon.com/512/1828/1828884.png" />
        <Row title="Faq?" icon="https://cdn-icons-png.flaticon.com/512/709/709496.png" />

        {/* LOGOUT BUTTON */}
        <TouchableOpacity style={styles.logoutRow} onPress={() => setShowLogoutPopup(true)}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828479.png" }}
            style={[styles.rowIcon, { tintColor: "#FF4E4E" }]}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ===================== LOGOUT POPUP ===================== */}
      <Modal transparent visible={showLogoutPopup} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.popupBox}>
            <Text style={styles.popupTitle}>Logout</Text>
            <Text style={styles.popupMsg}>Are you sure you want to logout</Text>

            {/* BUTTON ROW */}
            <View style={styles.popupButtons}>
              <TouchableOpacity
                style={styles.noBtn}
                onPress={() => setShowLogoutPopup(false)}
              >
                <Text style={styles.noText}>NO</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.yesBtn}
                onPress={() => {
                  setShowLogoutPopup(false);
                  navigation.replace("FaqScreen");
                }}
              >
                <Text style={styles.yesText}>YES</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F4F7" },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
    elevation: 2,
  },
  backIcon: { width: 26, height: 26, tintColor: "#000" },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginRight: 26,
  },

  switchRow: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  row: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginTop: 10,
    elevation: 1,
  },
  rowLeft: { flexDirection: "row", alignItems: "center" },
  rowIcon: { width: 22, height: 22, marginRight: 14, tintColor: "#00AEEF" },
  rowText: { fontSize: 16, fontWeight: "500", color: "#000" },
  arrowIcon: { width: 16, height: 16, tintColor: "#999" },

  logoutRow: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  logoutText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FF4E4E",
    marginLeft: 12,
  },

  /* ===================== LOGOUT POPUP STYLE ===================== */
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  popupBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
    elevation: 10,
  },

  popupTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },

  popupMsg: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
  },

  popupButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  noBtn: {
    marginRight: 25,
  },
  noText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#777",
  },

  yesBtn: {},
  yesText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#00AEEF",
  },
});
