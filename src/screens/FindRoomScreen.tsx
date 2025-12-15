import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const FindRoomScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("hotels");

  const [showLocationList, setShowLocationList] = useState(false);
  const [location, setLocation] = useState("");

  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [checkInDate, setCheckInDate] = useState("Select date");

  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [checkOutDate, setCheckOutDate] = useState("Select date");

  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);

  const locationList = [
    "Abidjan, Côte d'Ivoire",
    "Abids, Telangana, India",
    "Dubai Land, UAE",
    "Porto Rotondo, Italy",
    "Hotel Apartment Al Barsha, UAE",
  ];

  // ICON LINKS
  const icons = {
    location: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
    calendar: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
    people: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    down: "https://cdn-icons-png.flaticon.com/512/271/271210.png",
    minus: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png",
    plus: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
  };

  const bestPlaces = [
    {
      name: "Ivory Coast",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Senegal",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
    {
      name: "Ville",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      name: "Lagos",
      img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
    },
  ];

  const bestHotels = [
    {
      name: "Heden Golf",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      name: "Omomo",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
      name: "Adagio",
      img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    },
    {
      name: "Sofitel",
      img: "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Find room</Text>

      {/* SWITCH */}
      <View style={styles.switchRow}>
        <TouchableOpacity
          style={[styles.switchBtn, selected === "hotels" && styles.activeSwitch]}
          onPress={() => setSelected("hotels")}
        >
          <Text style={[styles.switchText, selected === "hotels" && styles.activeSwitchText]}>
            Hotels
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.switchBtn, selected === "villas" && styles.activeSwitch]}
          onPress={() => setSelected("villas")}
        >
          <Text style={[styles.switchText, selected === "villas" && styles.activeSwitchText]}>
            Villas
          </Text>
        </TouchableOpacity>
      </View>

      {/* SEARCH CARD */}
      <View style={styles.card}>

        {/* LOCATION */}
        <TouchableOpacity onPress={() => setShowLocationList(!showLocationList)}>
          <View style={styles.inputRow}>
            <Image source={{ uri: icons.location }} style={styles.icon} />
            <Text style={styles.input}>
              {location !== "" ? location : "Where do you want"}
            </Text>
            <Image source={{ uri: icons.down }} style={styles.iconSmall} />
          </View>
        </TouchableOpacity>

        {showLocationList && (
          <View style={styles.dropdown}>
            {locationList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setLocation(item);
                  setShowLocationList(false);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* CHECK-IN */}
        <TouchableOpacity onPress={() => setShowCheckInPicker(!showCheckInPicker)}>
          <View style={styles.inputRow}>
            <Image source={{ uri: icons.calendar }} style={styles.icon} />
            <Text style={styles.input}>{checkInDate}</Text>
            <Image source={{ uri: icons.down }} style={styles.iconSmall} />
          </View>
        </TouchableOpacity>

        {showCheckInPicker && (
          <View style={styles.dropdown}>
            {["23 July 2019 - 10:00 AM", "24 July 2019 - 11:00 AM", "25 July 2019 - 09:30 AM"].map(
              (item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCheckInDate(item);
                    setShowCheckInPicker(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        )}

        {/* CHECK OUT */}
        <TouchableOpacity onPress={() => setShowCheckOutPicker(!showCheckOutPicker)}>
          <View style={styles.inputRow}>
            <Image source={{ uri: icons.calendar }} style={styles.icon} />
            <Text style={styles.input}>{checkOutDate}</Text>
            <Image source={{ uri: icons.down }} style={styles.iconSmall} />
          </View>
        </TouchableOpacity>

        {showCheckOutPicker && (
          <View style={styles.dropdown}>
            {["26 July 2019 - 12:00 PM", "27 July 2019 - 09:00 AM"].map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.dropdownItem}
                onPress={() => {
                  setCheckOutDate(item);
                  setShowCheckOutPicker(false);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* GUEST PICKER */}
        <TouchableOpacity onPress={() => setShowGuestPicker(!showGuestPicker)}>
          <View style={styles.inputRow}>
            <Image source={{ uri: icons.people }} style={styles.icon} />
            <Text style={styles.input}>
              {adults} Adults, {children} Children, {rooms} Rooms
            </Text>
            <Image source={{ uri: icons.down }} style={styles.iconSmall} />
          </View>
        </TouchableOpacity>

        {showGuestPicker && (
          <View style={styles.dropdown}>

            {/* Adults */}
            <View style={styles.guestRow}>
              <Text>Adults</Text>
              <View style={styles.counterRow}>
                <TouchableOpacity onPress={() => adults > 0 && setAdults(adults - 1)}>
                  <Image source={{ uri: icons.minus }} style={styles.counterIcon} />
                </TouchableOpacity>
                <Text style={styles.counterText}>{adults}</Text>
                <TouchableOpacity onPress={() => setAdults(adults + 1)}>
                  <Image source={{ uri: icons.plus }} style={styles.counterIcon} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Children */}
            <View style={styles.guestRow}>
              <Text>Children</Text>
              <View style={styles.counterRow}>
                <TouchableOpacity onPress={() => children > 0 && setChildren(children - 1)}>
                  <Image source={{ uri: icons.minus }} style={styles.counterIcon} />
                </TouchableOpacity>
                <Text style={styles.counterText}>{children}</Text>
                <TouchableOpacity onPress={() => setChildren(children + 1)}>
                  <Image source={{ uri: icons.plus }} style={styles.counterIcon} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Rooms */}
            <View style={styles.guestRow}>
              <Text>Rooms</Text>
              <View style={styles.counterRow}>
                <TouchableOpacity onPress={() => rooms > 0 && setRooms(rooms - 1)}>
                  <Image source={{ uri: icons.minus }} style={styles.counterIcon} />
                </TouchableOpacity>
                <Text style={styles.counterText}>{rooms}</Text>
                <TouchableOpacity onPress={() => setRooms(rooms + 1)}>
                  <Image source={{ uri: icons.plus }} style={styles.counterIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* SEARCH BUTTON */}
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => navigation.navigate("HotelList")}
        >
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* BEST PLACES */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>BEST PLACES</Text>
        <Text style={styles.viewAll}>VIEW ALL</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {bestPlaces.map((place, index) => (
          <View key={index} style={styles.placeCard}>
            <Image source={{ uri: place.img }} style={styles.placeImg} />
            <Text style={styles.placeName}>{place.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* BEST HOTELS */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>BEST HOTELS</Text>
        <Text style={styles.viewAll}>VIEW ALL</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {bestHotels.map((hotel, index) => (
          <View key={index} style={styles.placeCard}>
            <Image source={{ uri: hotel.img }} style={styles.placeImg} />
            <Text style={styles.placeName}>{hotel.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

// STYLES
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: width * 0.075,
    fontWeight: "700",
    marginBottom: height * 0.01,
  },

  /* SWITCH BUTTONS */
  switchRow: {
    flexDirection: "row",
    marginVertical: height * 0.015,
  },

  switchBtn: {
    flex: 1,
    paddingVertical: height * 0.014,
    borderWidth: 1,
    borderColor: "#009DF5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.02,
  },

  activeSwitch: {
    backgroundColor: "#009DF5",
  },

  switchText: {
    color: "#009DF5",
    fontSize: width * 0.04,
  },

  activeSwitchText: {
    color: "#fff",
    fontWeight: "700",
  },

  /* SEARCH CARD */
  card: {
    backgroundColor: "#fff",
    padding: width * 0.04,
    borderRadius: width * 0.04,
    elevation: 2,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.018,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  icon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: "#444",
  },

  iconSmall: {
    width: width * 0.04,
    height: width * 0.04,
    tintColor: "#444",
  },

  input: {
    flex: 1,
    marginLeft: width * 0.03,
    fontSize: width * 0.04,
  },

  dropdown: {
    backgroundColor: "#fff",
    padding: width * 0.03,
    borderRadius: width * 0.02,
    marginTop: height * 0.005,
  },

  dropdownItem: {
    paddingVertical: height * 0.015,
  },

  /* GUEST PICKER */
  guestRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: height * 0.02,
  },

  counterRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  counterIcon: {
    width: width * 0.07,
    height: width * 0.07,
    tintColor: "#009DF5",
  },

  counterText: {
    fontSize: width * 0.05,
    paddingHorizontal: width * 0.03,
  },

  /* SEARCH BUTTON */
  searchBtn: {
    backgroundColor: "#009DF5",
    paddingVertical: height * 0.02,
    borderRadius: width * 0.03,
    marginTop: height * 0.02,
    alignItems: "center",
  },

  searchText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "700",
  },

  /* SECTION HEADERS */
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.03,
  },

  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: "700",
  },

  viewAll: {
    color: "#009DF5",
    fontWeight: "500",
    fontSize: width * 0.04,
  },

  /* BEST PLACES / BEST HOTELS */
  placeCard: {
    width: width * 0.3,
    marginRight: width * 0.03,
    marginTop: height * 0.015,
  },

  placeImg: {
    width: "100%",
    height: height * 0.12,
    borderRadius: width * 0.03,
  },

  placeName: {
    marginTop: height * 0.007,
    fontWeight: "600",
    fontSize: width * 0.04,
  },
});
export default FindRoomScreen;

