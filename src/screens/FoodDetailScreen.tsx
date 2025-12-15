// FoodDetailScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FoodDetailScreen = ({ route, navigation }) => {
  const { item, addToCart } = route.params || {};
  const [qty, setQty] = useState(1);

  if (!item) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No food item provided</Text>
      </SafeAreaView>
    );
  }

  const handleAdd = () => {
    if (typeof addToCart === "function") {
      addToCart(item, qty);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* ---------- HEADER WITH BACK BUTTON ---------- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png",
            }}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Food Detail</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView style={styles.container}>
        {/* Food Image */}
        <Image source={{ uri: item.img }} style={styles.headerImg} />

        <View style={{ padding: 18 }}>
          {/* Name */}
          <Text style={styles.name}>{item.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${item.price}</Text>

          {/* Description */}
          <Text style={styles.desc}>
            {item.desc ??
              "A delicious freshly prepared meal made with high-quality ingredients. Perfect taste and aroma to make your day special."}
          </Text>

          {/* Quantity Selector */}
          <View style={styles.qtyRow}>
            <TouchableOpacity
              onPress={() => setQty((q) => Math.max(1, q - 1))}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qty}>{qty}</Text>

            <TouchableOpacity
              onPress={() => setQty((q) => q + 1)}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Add Button */}
          <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
            <Text style={styles.addBtnTxt}>
              Add {qty} to order — ${ (item.price * qty).toFixed(2) }
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDetailScreen;

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* ---------- HEADER ---------- */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.018,
    backgroundColor: "#fff",
    elevation: 4,
    marginBottom: height * 0.005,
  },

  backIcon: {
    width: width * 0.065,
    height: width * 0.065,
    tintColor: "#333",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: width * 0.05,
    fontWeight: "700",
    color: "#000",
  },

  /* ---------- FOOD IMAGE ---------- */
  headerImg: {
    width: "100%",
    height: height * 0.32,
    borderBottomLeftRadius: width * 0.03,
    borderBottomRightRadius: width * 0.03,
  },

  /* ---------- FOOD DETAILS ---------- */
  name: {
    fontSize: width * 0.06,
    fontWeight: "700",
    marginTop: height * 0.015,
    color: "#000",
  },

  price: {
    fontSize: width * 0.055,
    fontWeight: "700",
    color: "#009DF5",
    marginTop: height * 0.008,
  },

  desc: {
    color: "#666",
    marginTop: height * 0.015,
    lineHeight: width * 0.045,
    fontSize: width * 0.04,
  },

  /* ---------- QTY SELECTOR ---------- */
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.03,
  },

  qtyBtn: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: "#F0F0F0",
    borderRadius: width * 0.03,
    justifyContent: "center",
    alignItems: "center",
  },

  qtyBtnText: {
    fontSize: width * 0.07,
    fontWeight: "700",
    color: "#333",
  },

  qty: {
    marginHorizontal: width * 0.06,
    fontSize: width * 0.055,
    fontWeight: "700",
    color: "#000",
  },

  /* ---------- ADD BUTTON ---------- */
  addBtn: {
    marginTop: height * 0.035,
    backgroundColor: "#00C569",
    paddingVertical: height * 0.02,
    borderRadius: width * 0.035,
    alignItems: "center",
  },

  addBtnTxt: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "700",
  },
});

