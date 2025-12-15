import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AppImages } from "../utils/appImages";

const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Signin");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
        <Image source={AppImages.splash} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00AEEF",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "700",
  },
});

export default SplashScreen;
