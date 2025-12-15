import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const PaymentScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* ---------- HEADER ---------- */}
      <Text style={styles.title}>Payment methods</Text>

      {/* ---------- PAYMENT LOGOS ---------- */}
      <View style={styles.logoRow}>
        <Image
          source={{
            uri: "https://seeklogo.com/images/M/mtn-mobile-money-logo-7B66187D12-seeklogo.com.png",
          }}
          style={styles.payLogo}
        />

        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Moov_Africa_logo.png",
          }}
          style={styles.payLogo}
        />

        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
          }}
          style={[styles.payLogo, { tintColor: null }]}
        />

        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/70/Orange_Money_logo.svg",
          }}
          style={[styles.payLogo, { tintColor: null }]}
        />
      </View>

      {/* ---------- CREDIT CARD UI ---------- */}
      <View style={styles.cardBox}>
        <Text style={styles.visaText}>VISA</Text>

        <Text style={styles.cardNumber}>0085   7789   2236   3685</Text>

        <View style={{ marginTop: height * 0.02 }}>
          <Text style={styles.cardLabel}>Card Holder Name</Text>
          <Text style={styles.cardValue}>John smith</Text>
        </View>

        <View style={styles.cardRow}>
          <View>
            <Text style={styles.cardLabel}>Expiry date</Text>
            <Text style={styles.cardValue}>06/22</Text>
          </View>

          <View>
            <Text style={styles.cardLabel}>CVV</Text>
            <Text style={styles.cardValue}>321</Text>
          </View>
        </View>
      </View>

      {/* ---------- FINISH ORDER ---------- */}
      <TouchableOpacity
        style={styles.finishBtn}
        onPress={() => navigation.navigate("SuccsessScreen")}
      >
        <Text style={styles.finishText}>Finish Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentScreen;

/* ========== RESPONSIVE STYLES ========== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
    backgroundColor: "#F8F9FA",
  },

  title: {
    fontSize: width * 0.07,
    fontWeight: "700",
    marginBottom: height * 0.02,
  },

  /* PAYMENT LOGOS */
  logoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.03,
  },

  payLogo: {
    width: width * 0.18,
    height: width * 0.12,
    resizeMode: "contain",
  },

  /* CREDIT CARD BOX */
  cardBox: {
    backgroundColor: "#00B4DB",
    padding: width * 0.05,
    borderRadius: 18,
    marginBottom: height * 0.03,
    elevation: 4,
  },

  visaText: {
    position: "absolute",
    top: width * 0.05,
    right: width * 0.05,
    fontSize: width * 0.06,
    fontWeight: "700",
    color: "#fff",
  },

  cardNumber: {
    fontSize: width * 0.055,
    fontWeight: "700",
    color: "#fff",
    marginTop: height * 0.06,
    letterSpacing: 2,
  },

  cardLabel: {
    color: "#E8E8E8",
    fontSize: width * 0.033,
    marginTop: height * 0.01,
  },

  cardValue: {
    color: "#fff",
    fontSize: width * 0.043,
    fontWeight: "700",
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.02,
  },

  /* FINISH BUTTON */
  finishBtn: {
    backgroundColor: "#00C569",
    paddingVertical: height * 0.02,
    borderRadius: 12,
    alignItems: "center",
  },

  finishText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "700",
  },
});
