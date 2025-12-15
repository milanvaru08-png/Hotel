// FoodListScreen.js
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const FoodListScreen = ({ route, navigation }) => {
  // foods passed by HotelDetail or fallback sample
  const foods = route?.params?.foods ?? [
    { id: "f1", name: "Bagels with turkey", price: 10, img: "https://images.unsplash.com/photo-1603048297172-d4e5c06e0e63", desc: "Poppy seed bagel with turkey..." },
    { id: "f2", name: "Gourmet croissant", price: 5, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e", desc: "Flaky croissant stuffed with eggs..." },
    { id: "f3", name: "Sandwich", price: 6, img: "https://images.unsplash.com/photo-1604908177076-d1b6eaa9bb24", desc: "Loaded sandwich with crisp lettuce..." },
    { id: "f4", name: "Crispy burger", price: 8, img: "https://images.unsplash.com/photo-1550547660-d9450f859349", desc: "Juicy beef burger with cheese..." },
  ];

  // local cart state kept only inside this screen
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // function to add item to cart
  const addToCart = useCallback((item, qty = 1) => {
    setCartCount((c) => c + qty);
    setCartTotal((t) => Number((t + item.price * qty).toFixed(2)));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Image source={{ uri: item.img }} style={styles.itemImg} />

      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.itemDesc}>{item.desc ?? "Tasty & fresh"}</Text>

        <View style={styles.itemBottomRow}>
          <Text style={styles.price}>${item.price}</Text>

          {/* Add button updates cart */}
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => addToCart(item)}
          >
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.openDetail}
        onPress={() => navigation.navigate("FoodDetail", { item, addToCart })}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/545/545682.png",
          }}
          style={{ width: 20, height: 20, tintColor: "#0077FF" }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png" }}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Food Court</Text>

        <View style={{ width: 30 }} />
      </View>

      {/* FOOD LIST */}
      <FlatList
        data={foods}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 110 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

      {/* BOTTOM CART BAR */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomText}>Items: {cartCount}</Text>
          <Text style={styles.bottomSub}>Total: ${cartTotal.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutTxt}>VIEW ORDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FoodListScreen;

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  /* ---------- HEADER ---------- */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    backgroundColor: "#fff",
    elevation: 4,
    marginBottom: height * 0.01,
  },

  backIcon: {
    width: width * 0.065,
    height: width * 0.065,
    tintColor: "#333",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: width * 0.055,
    fontWeight: "700",
    color: "#000",
  },

  /* ---------- FOOD ITEM ROW ---------- */
  itemRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: width * 0.03,
    borderRadius: width * 0.03,
    overflow: "hidden",
    elevation: 2,
    alignItems: "center",
    padding: width * 0.01,
  },

  itemImg: {
    width: width * 0.28,
    height: height * 0.12,
    borderRadius: width * 0.02,
  },

  itemInfo: {
    flex: 1,
    padding: width * 0.03,
  },

  itemName: {
    fontSize: width * 0.045,
    fontWeight: "700",
    color: "#000",
  },

  itemDesc: {
    fontSize: width * 0.035,
    color: "#666",
    marginTop: height * 0.005,
  },

  itemBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.01,
    alignItems: "center",
  },

  price: {
    fontSize: width * 0.045,
    fontWeight: "700",
  },

  addBtn: {
    backgroundColor: "#00C569",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.012,
    borderRadius: width * 0.025,
  },

  addBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: width * 0.035,
  },

  openDetail: {
    paddingHorizontal: width * 0.025,
  },

  /* ---------- BOTTOM CART BAR ---------- */
  bottomBar: {
    position: "absolute",
    left: width * 0.03,
    right: width * 0.03,
    bottom: height * 0.02,
    height: height * 0.09,
    backgroundColor: "#fff",
    borderRadius: width * 0.04,
    elevation: 6,
    paddingHorizontal: width * 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomText: {
    fontSize: width * 0.045,
    fontWeight: "700",
    color: "#000",
  },

  bottomSub: {
    color: "#666",
    marginTop: height * 0.005,
    fontSize: width * 0.035,
  },

  checkoutBtn: {
    backgroundColor: "#0077FF",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    borderRadius: width * 0.03,
  },

  checkoutTxt: {
    color: "#fff",
    fontWeight: "700",
    fontSize: width * 0.04,
  },
});

