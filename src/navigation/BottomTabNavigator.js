// -------------------- IMPORTS --------------------
import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import FindRoomScreen from "../screens/FindRoomScreen";
import BookCarScreen from "../screens/BookCarScreen";
import ProfileScreen from "../screens/ProfileScreen";
// Dummy screens
const RoomsScreen = () => <View style={styles.center}><Text>Rooms</Text></View>;
const CarBookingScreen = () => <View style={styles.center}><Text>Car Booking</Text></View>;
const CarWashingScreen = () => <View style={styles.center}><Text>Car Washing</Text></View>;
import SettingsScreen from "../screens/SettingsScreen";
const Tab = createBottomTabNavigator();

// -------------------- MAIN BOTTOM TAB NAVIGATOR --------------------
const BottomTabNavigator = () => {
  return (
    <><Tab.Navigator
              screenOptions={{
                  headerShown: false,
                  tabBarShowLabel: true,
                  tabBarStyle: {
                      backgroundColor: "transparent",
                      height: 70,
                      borderTopWidth: 0,
                      elevation: 0,
                      position: "absolute",
                  },
              }}
              tabBar={(props) => <CustomTabBar {...props} />} //  ✅ USE CUSTOM TAB BAR HERE
          ><Tab.Screen
          name="FindRoom"
          component={FindRoomScreen}
          options={{
              tabBarIcon: ({ focused }) => (
                  <Image
                      source={{ uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png" }}
                      style={[styles.icon, { tintColor: focused ? "#fff" : "#d9f3ff" }]} />
              ),
          }} />


              <Tab.Screen
                  name="BookCar"
                  component={BookCarScreen}
                  options={{
                      tabBarIcon: ({ focused }) => (
                          <Image
                              source={{ uri: "https://cdn-icons-png.flaticon.com/512/743/743131.png" }}
                              style={[styles.icon, { tintColor: focused ? "#fff" : "#d9f3ff" }]} />
                      ),
                  }} />

              <Tab.Screen
                  name="Car washing"
                  component={CarWashingScreen}
                  options={{
                      tabBarIcon: ({ focused }) => (
                          <Image
                              source={{ uri: "https://cdn-icons-png.flaticon.com/512/1008/1008211.png" }}
                              style={[styles.icon, { tintColor: focused ? "#fff" : "#d9f3ff" }]} />
                      ),
                  }} />

              <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                      tabBarIcon: ({ focused }) => (
                          <Image
                              source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" }}
                              style={[styles.icon, { tintColor: focused ? "#fff" : "#d9f3ff" }]} />
                      ),
                  }} />

              <Tab.Screen
                  name="SettingsScreen"
                  component={SettingsScreen}
                  options={{
                      tabBarIcon: ({ focused }) => (
                          <Image
                              source={{ uri: "https://cdn-icons-png.flaticon.com/512/3524/3524659.png" }}
                              style={[styles.icon, { tintColor: focused ? "#fff" : "#d9f3ff" }]} />
                      ),
                  }} />
          </Tab.Navigator></>
  );
};

export default BottomTabNavigator;

// -------------------- CUSTOM TAB BAR (ADD BELOW NAVIGATOR) --------------------
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabWrapper}>
      <LinearGradient
        colors={["#00A6FF", "#0BD18A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.tabContainer}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tabItem}
            >
              {options.tabBarIcon({ focused: isFocused })}
              <Text style={[styles.label, { color: isFocused ? "#fff" : "#d9f3ff" }]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
};

// -------------------- STYLES --------------------
const styles = StyleSheet.create({
  tabWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabContainer: {
    height: 80,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 6,
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: { width: 26, height: 26, marginBottom: 4 },
  label: { fontSize: 12, fontWeight: "600" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
