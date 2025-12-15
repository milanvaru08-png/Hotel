import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const HotelDetailScreen = ({ route, navigation }) => {
  const hotel = route.params;

  const [activeTab, setActiveTab] = useState("review");
  const [showSlider, setShowSlider] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  // ⭐ FIXED — All working photo links
  const photos = [
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d1",
    "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    "https://images.unsplash.com/photo-1506377585622-bedcbb027afc",
    "https://images.unsplash.com/photo-1519821172141-b5d8cbd8a5a8",
    "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  ];

  // ⭐ FOOD LIST WITH WORKING PHOTOS
  const foodList = [
    {
      id: "1",
      name: "Bagels with turkey",
      price: 10,
      desc: "Fresh bagels stuffed with premium turkey.",
      img: "https://images.unsplash.com/photo-1603048297172-d4e5c06e0e63",
    },
    {
      id: "2",
      name: "Croissant with eggs",
      price: 8,
      desc: "Flaky croissant filled with scrambled eggs.",
      img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    },
    {
      id: "3",
      name: "Sandwich",
      price: 6,
      desc: "Loaded sandwich with lettuce, tomatoes & cheese.",
      img: "https://images.unsplash.com/photo-1604908177076-d1b6eaa9bb24",
    },
    {
      id: "4",
      name: "Beef Burger",
      price: 12,
      desc: "Juicy beef burger with melted cheese.",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
  ];

  // ⭐ Reviews
  const reviews = [
    {
      name: "John Smith",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.5,
      date: "12 July 2023",
      text: "Great hotel with amazing service. Rooms were clean and the view was beautiful!",
    },
    {
      name: "Amanda Lee",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.0,
      date: "05 July 2023",
      text: "Breakfast was amazing, and staff were very friendly.",
    },
    {
      name: "Michael Davis",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 5,
      date: "28 June 2023",
      text: "Best experience! Very relaxing and clean. Highly recommended.",
    },
  ];

  // ⭐ Nearby Places
  const nearbyPlaces = [
    {
      name: "Lagoon Blue Park",
      distance: "1.2 km",
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      name: "Local Market",
      distance: "2.0 km",
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    },
    {
      name: "Beach Walkway",
      distance: "800 m",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        {/* HEADER IMAGE */}
        <View>
          <Image source={{ uri: hotel.img }} style={styles.headerImg} />

          {/* Back */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png" }}
              style={{ width: 26, height: 26, tintColor: "#fff" }}
            />
          </TouchableOpacity>

          {/* Share */}
          <TouchableOpacity style={styles.shareBtn}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/929/929610.png" }}
              style={{ width: 26, height: 26, tintColor: "#fff" }}
            />
          </TouchableOpacity>

          <Text style={styles.hotelName}>{hotel.name}</Text>

          {/* Rating Row */}
          <View style={styles.ratingRow}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }}
              style={{ width: 18, height: 18 }}
            />
            <Text style={styles.ratingText}>
              {hotel.rating} | {hotel.reviews} people liked this
            </Text>

            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/535/535239.png" }}
              style={{ width: 18, height: 18, marginLeft: 8 }}
            />
            <Text style={styles.locationText}>Abidjan, Côte d’Ivoire</Text>
          </View>
        </View>

        {/* ---------------- TABS ---------------- */}
        <View style={styles.tabRow}>
          {["review", "photo", "near"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabBtn, activeTab === tab && styles.activeTabBtn]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab === "review" && "Review (106)"}
                {tab === "photo" && "Photo (10)"}
                {tab === "near" && "Nearby (24)"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ---------------- REVIEWS ---------------- */}
        {activeTab === "review" && (
          <View style={{ padding: 15 }}>
            {reviews.map((review, i) => (
              <View style={styles.reviewCard} key={i}>
                <Image source={{ uri: review.img }} style={styles.reviewImg} />

                <View style={{ flex: 1 }}>
                  <Text style={styles.reviewName}>{review.name}</Text>

                  <View style={{ flexDirection: "row", marginVertical: 4 }}>
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
                      }}
                      style={{ width: 16, height: 16 }}
                    />
                    <Text style={{ marginLeft: 5 }}>{review.rating}</Text>
                  </View>

                  <Text style={styles.reviewText}>{review.text}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ---------------- PHOTO GRID ---------------- */}
        {activeTab === "photo" && (
          <View style={styles.photoGrid}>
            {photos.map((img, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSliderIndex(i);
                  setShowSlider(true);
                }}
              >
                <Image source={{ uri: img }} style={styles.photoItem} />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* ---------------- NEARBY ---------------- */}
        {activeTab === "near" && (
          <View style={{ padding: 15 }}>
            {nearbyPlaces.map((place, i) => (
              <View style={styles.nearCard} key={i}>
                <Image source={{ uri: place.img }} style={styles.nearImg} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.nearName}>{place.name}</Text>
                  <Text style={styles.nearDistance}>{place.distance}</Text>

                  <View style={{ flexDirection: "row", marginTop: 4 }}>
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
                      }}
                      style={{ width: 16, height: 16 }}
                    />
                    <Text style={{ marginLeft: 5 }}>{place.rating}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ---------------- FOOD SECTION ---------------- */}
        <View style={styles.foodHeaderRow}>
          <Text style={styles.foodTitle}>FOOD</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {foodList.map((food) => (
            <TouchableOpacity
              key={food.id}
              style={styles.foodCard}
              onPress={() =>
                navigation.navigate("FoodList", {
                  foods: foodList,
                })
              }
            >
              <Image source={{ uri: food.img }} style={styles.foodImg} />
              <Text style={styles.foodName}>{food.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ---------------- BOOKING BUTTON ---------------- */}
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate("PaymentScreen", hotel)}
        >
          <Text style={styles.bookText}>BOOKING NOW</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ---------- FULLSCREEN SLIDER ---------- */}
      <Modal visible={showSlider} transparent>
        <View style={styles.sliderBg}>
          <TouchableOpacity
            style={styles.sliderBackBtn}
            onPress={() => setShowSlider(false)}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png",
              }}
              style={{ width: 30, height: 30, tintColor: "#fff" }}
            />
          </TouchableOpacity>

          <FlatList
            data={photos}
            horizontal
            pagingEnabled
            initialScrollIndex={sliderIndex}
            getItemLayout={(d, i) => ({
              length: screenWidth,
              offset: screenWidth * i,
              index: i,
            })}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width: screenWidth, height: "100%" }}
                resizeMode="contain"
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};

export default HotelDetailScreen;

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },

  /* HEADER IMAGE */
  headerImg: {
    width: "100%",
    height: height * 0.32,
    borderBottomLeftRadius: width * 0.06,
    borderBottomRightRadius: width * 0.06,
  },

  /* HEADER BUTTONS */
  backBtn: {
    position: "absolute",
    top: height * 0.05,
    left: width * 0.05,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: width * 0.02,
    borderRadius: width * 0.07,
  },

  shareBtn: {
    position: "absolute",
    top: height * 0.05,
    right: width * 0.05,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: width * 0.02,
    borderRadius: width * 0.07,
  },

  hotelName: {
    position: "absolute",
    bottom: height * 0.09,
    left: width * 0.05,
    fontSize: width * 0.07,
    fontWeight: "700",
    color: "#fff",
  },

  ratingRow: {
    position: "absolute",
    bottom: height * 0.04,
    left: width * 0.05,
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    color: "#fff",
    marginLeft: 5,
    marginRight: 10,
    fontSize: width * 0.035,
  },

  locationText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: width * 0.035,
  },

  /* TABS */
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: height * 0.02,
  },

  tabBtn: {
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.05,
    borderRadius: width * 0.05,
    borderWidth: 1,
    borderColor: "#009DF5",
  },

  activeTabBtn: {
    backgroundColor: "#009DF5",
  },

  tabText: {
    color: "#009DF5",
    fontWeight: "600",
    fontSize: width * 0.038,
  },

  activeTabText: {
    color: "#fff",
  },

  /* REVIEW CARDS */
  reviewCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: width * 0.04,
    borderRadius: width * 0.04,
    marginBottom: height * 0.012,
    elevation: 2,
  },

  reviewImg: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.07,
    marginRight: width * 0.03,
  },

  reviewName: { fontSize: width * 0.045, fontWeight: "700" },
  reviewText: { color: "#555", marginVertical: 4, fontSize: width * 0.035 },
  reviewDate: { color: "#888", fontSize: width * 0.03 },

  /* PHOTO GRID */
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: width * 0.04,
    justifyContent: "space-between",
  },

  photoItem: {
    width: (width - width * 0.28) / 3,
    height: height * 0.13,
    borderRadius: width * 0.03,
    marginVertical: height * 0.01,
  },

  /* NEARBY */
  nearCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: width * 0.04,
    borderRadius: width * 0.04,
    marginBottom: height * 0.02,
    elevation: 2,
  },

  nearImg: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: width * 0.04,
  },

  nearName: {
    fontSize: width * 0.045,
    fontWeight: "700",
  },

  nearDistance: {
    fontSize: width * 0.035,
    color: "#888",
  },

  /* FOOD SECTION */
  foodHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.015,
  },

  foodTitle: {
    fontSize: width * 0.05,
    fontWeight: "700",
  },

  foodCard: {
    width: width * 0.32,
    marginRight: width * 0.03,
    marginTop: height * 0.015,
  },

  foodImg: {
    width: "100%",
    height: height * 0.12,
    borderRadius: width * 0.03,
  },

  foodName: {
    marginTop: height * 0.007,
    fontWeight: "600",
    fontSize: width * 0.038,
  },

  /* BOOKING BUTTON */
  bookBtn: {
    margin: width * 0.05,
    backgroundColor: "#00C569",
    paddingVertical: height * 0.02,
    borderRadius: width * 0.04,
    alignItems: "center",
  },

  bookText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "700",
  },

  /* SLIDER FULLSCREEN */
  sliderBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.95)",
    justifyContent: "center",
  },

  sliderBackBtn: {
    position: "absolute",
    top: height * 0.05,
    left: width * 0.05,
    zIndex: 20,
    padding: width * 0.02,
  },
});

