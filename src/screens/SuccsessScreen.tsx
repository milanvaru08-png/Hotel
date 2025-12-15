import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

const SuccessScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      }}
      style={styles.bg}
      blurRadius={2}
    >
      <View style={styles.overlay} />

      <Text style={styles.title}>THANK YOU</Text>
      <Text style={styles.sub}>YOUR ORDER IS SUCCESSFUL</Text>
      <TouchableOpacity onPress={()=>(navigation.navigate('DirectionScreen'))}><Text>Back TO Direction</Text></TouchableOpacity>
    </ImageBackground>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,200,150,0.3)",
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
  },

  sub: {
    fontSize: 18,
    marginTop: 10,
    color: "#fff",
    fontWeight: "600",
  },
});
