import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../screens/SigninScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import TrackDriverScreen from "../screens/TrackDriverScreen";
import FaqScreen from "../screens/FaqScreen";

import SplashScreen from "../screens/SplashScreen";
import SignupScreen from "../screens/SignupScreen";
import OtpVerificationScreen from "../screens/OtpVerificationScreen";
import FindRoomScreen from "../screens/FindRoomScreen";
import HotelListScreen from "../screens/HotelListScreen";
import HotelDetailScreen from "../screens/HotelDetailScreen";
import PaymentScreen from "../screens/PaymentScreen";
import SuccsessScreen from "../screens/SuccsessScreen";
import FoodListScreen from "../screens/FoodListScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import DirectionsScreen from "../screens/DirectionsScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import BookCarScreen from "../screens/BookCarScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PasscodeScreen from "../screens/PasscodeScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import SettingsScreen from "../screens/SettingsScreen";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OtpVerify" component={OtpVerificationScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
<Stack.Screen name="PasscodeScreen" component={PasscodeScreen} />
  <Stack.Screen name="Tabs" component={BottomTabNavigator} />
<Stack.Screen name="FindRoom" component={FindRoomScreen} />
<Stack.Screen name="HotelList" component={HotelListScreen} />
<Stack.Screen name="HotelDetail" component={HotelDetailScreen} />
<Stack.Screen name="PaymentScreen" component={PaymentScreen} />
<Stack.Screen name="SuccsessScreen" component={SuccsessScreen} />
<Stack.Screen name="FoodList" component={FoodListScreen} />
<Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
<Stack.Screen name="BookCar" component={BookCarScreen} />
<Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
<Stack.Screen name="FaqScreen" component={FaqScreen} />


<Stack.Screen name="TrackDriver" component={TrackDriverScreen} />
<Stack.Screen name="SettingsScreen" component={SettingsScreen} />


<Stack.Screen name="DirectionScreen" component={DirectionsScreen} />
<Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
