// ProfileScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = ({ navigation }) => {
  const [showMenu, setShowMenu] = useState(false);

  const profileImg =
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>

        {/* ================= HEADER IMAGE ================= */}
        <View style={styles.headerContainer}>
          <Image source={{ uri: profileImg }} style={styles.headerImage} />

          {/* Three Dot Menu */}
          <TouchableOpacity
            style={styles.menuBtn}
            onPress={() => setShowMenu(!showMenu)}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/55/55009.png",
              }}
              style={styles.threeDot}
            />
          </TouchableOpacity>

          {/* Floating Menu Dropdown */}
          {showMenu && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity
                onPress={() => {
                  setShowMenu(false);
                  navigation.navigate("BookingHistoryScreen");
                }}
              >
                <Text style={styles.menuItem}>Room booking history</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setShowMenu(false);
                  navigation.navigate("ChangePasswordScreen");
                }}
              >
                <Text style={styles.menuItem}>Change password</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* ================= USER CARD ================= */}
        <View style={styles.whiteCard}>

          {/* Floating Edit Button — FIXED & VISIBLE */}
          <TouchableOpacity style={styles.editBtn}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1159/1159633.png",
              }}
              style={styles.editIcon}
            />
          </TouchableOpacity>

          <Text style={styles.name}>John Smith</Text>
          <Text style={styles.email}>johnsmith@gmail.com</Text>
          <Text style={styles.phone}>+225 698698966</Text>

          {/* ================= VISA CARD ================= */}
          <View style={styles.cardContainer}>
            <Image
              source={{
                uri: "https://i.imgur.com/EHyR2nP.png",
              }}
              style={styles.visaCard}
            />

            <Text style={styles.addCardText}>+ ADD NEW CARD</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

/* ===================================================== */
/* ======================= STYLES ====================== */
/* ===================================================== */

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 260,
    backgroundColor: "#fff",
    overflow: "hidden",
    position: "relative",
  },

  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  menuBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 6,
    zIndex: 30,
  },

  threeDot: {
    width: 30,
    height: 30,
    tintColor: "#444",
  },

  dropdownMenu: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    width: 180,
    elevation: 10,
    zIndex: 50,
  },

  menuItem: {
    paddingVertical: 10,
    color: "#333",
    fontSize: 15,
    fontWeight: "500",
  },

  /* ================= WHITE CARD ================= */
  whiteCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: -40,
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    position: "relative",
  },

  /* FIXED GREEN EDIT BUTTON */
  editBtn: {
    position: "absolute",
    top: -25,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#00C569",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 99,
  },

  editIcon: {
    width: 26,
    height: 26,
    tintColor: "#fff",
  },

  name: {
    marginTop: 10,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "700",
  },

  email: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 6,
    color: "#777",
  },

  phone: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 4,
    color: "#777",
  },

  cardContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  visaCard: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    resizeMode: "cover",
  },

  addCardText: {
    marginTop: 15,
    textAlign: "center",
    color: "#009DF5",
    fontWeight: "700",
    fontSize: 16,
  },
});
