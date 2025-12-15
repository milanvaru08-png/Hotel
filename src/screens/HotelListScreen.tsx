import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const HotelListScreen = ({navigation}) => {
  const [showAmenities, setShowAmenities] = useState(false);

  // 🔹 All Amenities Icons Using Flaticon
  const amenities = [
    {
      name: "Free Wi-Fi",
      icon: "https://cdn-icons-png.flaticon.com/512/93/93158.png",
    },
    {
      name: "Fitness Center",
      icon: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png",
    },
    {
      name: "Free Breakfast",
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    },
    {
      name: "Kid Friendly",
      icon: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
    },
    {
      name: "Free Parking",
      icon: "https://cdn-icons-png.flaticon.com/512/854/854929.png",
    },
    {
      name: "Pet Friendly",
      icon: "https://cdn-icons-png.flaticon.com/512/194/194279.png",
    },
    {
      name: "Air Conditioned",
      icon: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
    },
    {
      name: "Pool",
      icon: "https://cdn-icons-png.flaticon.com/512/2659/2659360.png",
    },
    {
      name: "Bar",
      icon: "https://cdn-icons-png.flaticon.com/512/896/896925.png",
    },
    {
      name: "Restaurant",
      icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
  ];

  // 🔹 Hotel List with working image links
  const hotels = [
    {
      name: "Heden golf",
      rating: 3.9,
      reviews: 200,
      price: 127,
      discount: "25% OFF",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Onomo",
      rating: 4.3,
      reviews: 150,
      price: 120,
      discount: "",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Adagio",
      rating: 4.5,
      reviews: 20,
      price: 100,
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Sofitel",
      rating: 4.5,
      reviews: 20,
      price: 127,
      discount: "25% OFF",
      img: "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Hotels</Text>
      <Text style={styles.subTitle}>Abidjan 200 hotels</Text>

      {/* SEARCH BAR */}
      <View style={styles.searchRow}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/622/622669.png" }}
          style={styles.smallIcon}
        />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/929/929430.png" }}
          style={styles.smallIcon}
        />
      </View>

      {/* SORTING ROW */}
      <View style={styles.sortRow}>
        {/* Amenities Dropdown Button */}
        <TouchableOpacity
          style={styles.sortBtn}
          onPress={() => setShowAmenities(!showAmenities)}
        >
          <Text style={styles.sortText}>Amenities</Text>
          <Text style={{ fontSize: 16 }}>{showAmenities ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sortBtn}>
          <Text style={styles.sortText}>Filter by</Text>
          <Text style={{ fontSize: 16 }}>▼</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sortBtn}>
          <Text style={styles.sortText}>Sort by</Text>
          <Text style={{ fontSize: 16 }}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* AMENITIES DROPDOWN */}
      {showAmenities && (
        <View style={styles.amenitiesBox}>
          <View style={styles.amenitiesGrid}>
            {amenities.map((item, index) => (
              <TouchableOpacity key={index} style={styles.amenityCard}>
                <Image source={{ uri: item.icon }} style={styles.iconImg} />
                <Text style={styles.amenityText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.amenityFooter}>
            <TouchableOpacity style={styles.clearBtn}>
              <Text style={{ color: "#009DF5", fontSize: 16 }}>Clear</Text>
            </TouchableOpacity>

            {/* APPLY BUTTON CLOSES DROPDOWN */}
            <TouchableOpacity
              style={styles.applyBtn}
              onPress={() => setShowAmenities(false)}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* HOTEL LIST */}
      {hotels.map((hotel, index) => (
<TouchableOpacity
  style={styles.hotelCard}
  key={index}
  onPress={() => navigation.navigate("HotelDetail", hotel)}
>
          <Image source={{ uri: hotel.img }} style={styles.hotelImg} />

          <View style={styles.hotelInfo}>
            <Text style={styles.hotelName}>{hotel.name}</Text>

            <View style={styles.ratingRow}>
              <Text style={{ color: "#FFC300", fontSize: 16 }}>★</Text>
              <Text style={styles.ratingText}>
                {hotel.rating} · Reviews ({hotel.reviews})
              </Text>
            </View>

            {hotel.discount !== "" && (
              <Text style={styles.discount}>{hotel.discount}</Text>
            )}

            <View style={styles.priceRow}>
              <Text style={styles.price}>${hotel.price}</Text>

              <TouchableOpacity style={styles.bookBtn}>
                <Text style={{ color: "#fff", fontSize: 14 }}>Book now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>))}
    </ScrollView>
  );
};

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: width * 0.04,
  },

  /* HEADER */
  title: {
    fontSize: width * 0.075,
    fontWeight: "700",
  },

  subTitle: {
    fontSize: width * 0.038,
    color: "#777",
    marginBottom: height * 0.015,
  },

  /* SEARCH BAR */
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.03,
    height: height * 0.055,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    marginLeft: width * 0.025,
    fontSize: width * 0.038,
  },

  smallIcon: {
    width: width * 0.05,
    height: width * 0.05,
    tintColor: "#777",
  },

  /* SORTING ROW */
  sortRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.015,
  },

  sortBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.012,
    borderRadius: width * 0.02,
    elevation: 1,
    width: "32%",
    justifyContent: "space-between",
  },

  sortText: {
    fontSize: width * 0.035,
    color: "#333",
  },

  /* AMENITIES DROPDOWN */
  amenitiesBox: {
    backgroundColor: "#fff",
    marginTop: height * 0.015,
    padding: width * 0.04,
    borderRadius: width * 0.03,
    elevation: 3,
  },

  amenitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  amenityCard: {
    width: "48%",
    backgroundColor: "#EAF6FF",
    paddingVertical: height * 0.018,
    borderRadius: width * 0.03,
    alignItems: "center",
    marginVertical: height * 0.01,
  },

  iconImg: {
    width: width * 0.1,
    height: width * 0.1,
    marginBottom: height * 0.01,
    resizeMode: "contain",
  },

  amenityText: {
    fontWeight: "600",
    fontSize: width * 0.038,
    color: "#007BCE",
    textAlign: "center",
  },

  amenityFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.02,
  },

  clearBtn: {
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.07,
    borderRadius: width * 0.025,
    borderWidth: 1,
    borderColor: "#009DF5",
  },

  applyBtn: {
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.07,
    borderRadius: width * 0.025,
    backgroundColor: "#00C2FF",
  },

  /* HOTEL CARD */
  hotelCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: width * 0.03,
    marginTop: height * 0.02,
    overflow: "hidden",
    elevation: 2,
    padding: width * 0.02,
  },

  hotelImg: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: width * 0.02,
  },

  hotelInfo: {
    flex: 1,
    paddingLeft: width * 0.035,
    justifyContent: "center",
  },

  hotelName: {
    fontSize: width * 0.048,
    fontWeight: "700",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.005,
  },

  ratingText: {
    marginLeft: width * 0.02,
    color: "#555",
    fontSize: width * 0.035,
  },

  discount: {
    color: "#FF5733",
    fontWeight: "700",
    marginVertical: height * 0.005,
    fontSize: width * 0.038,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.008,
  },

  price: {
    fontSize: width * 0.05,
    fontWeight: "700",
  },

  bookBtn: {
    backgroundColor: "#00C569",
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.06,
    borderRadius: width * 0.02,
  },
});
export default HotelListScreen;

