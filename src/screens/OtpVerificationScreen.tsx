import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { AppImages } from "../utils/appImages";

const { width, height } = Dimensions.get("window");

const OtpVerificationScreen = ({ navigation }) => {
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  /* TIMER */
  useEffect(() => {
    let interval;

    if (!canResend) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [canResend]);

  /* OTP HANDLER — auto move + auto submit */
  const handleOtpChange = (value, index) => {
    const temp = [...otp];
    temp[index] = value;
    setOtp(temp);

    if (value.length === 1 && index < 3) inputRefs[index + 1].current?.focus();
    if (value === "" && index > 0) inputRefs[index - 1].current?.focus();

    if (temp.every((d) => d !== "")) {
      setTimeout(() => {
        navigation.replace("Tabs");
      }, 300);
    }
  };

  return (
    <ImageBackground source={AppImages.splash} style={styles.bg} resizeMode="cover">
      <View style={styles.card}>
        <Text style={styles.title}>Verify Account</Text>
        <Text style={styles.subTitle}>VERIFY MOBILE NUMBER</Text>
        <Text style={styles.info}>
          OTP has been sent to your mobile number, please enter it below
        </Text>

        {/* OTP BOXES */}
        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              value={digit}
              onChangeText={(val) => handleOtpChange(val, index)}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpInput}
            />
          ))}
        </View>

        <Text style={styles.otpText}>Didn't receive OTP?</Text>

        <View style={styles.buttonRow}>
          {/* Resend Button */}
          <TouchableOpacity
            disabled={!canResend}
            style={[
              styles.actionBtn,
              { backgroundColor: canResend ? "#27AE60" : "#9FD9B6" },
            ]}
            onPress={() => {
              if (canResend) {
                setTimer(30);
                setCanResend(false);
              }
            }}
          >
            <Text style={styles.actionBtnText}>
              {canResend ? "Resend OTP" : `Resend in ${timer}s`}
            </Text>
          </TouchableOpacity>

          {/* Change Number */}
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: "#0A84FF" }]}
            onPress={() => navigation.replace("Signup")}
          >
            <Text style={styles.actionBtnText}>Change number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

/* ========================= RESPONSIVE STYLES ========================= */

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: width * 0.9,
    backgroundColor: "#fff",
    padding: width * 0.06,
    borderRadius: width * 0.05,
    elevation: 6,
  },

  title: {
    fontSize: width * 0.07,
    fontWeight: "700",
    textAlign: "center",
    color: "#000",
  },

  subTitle: {
    marginTop: height * 0.03,
    textAlign: "center",
    fontSize: width * 0.04,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  info: {
    marginTop: height * 0.01,
    textAlign: "center",
    fontSize: width * 0.035,
    color: "#7A7A7A",
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.04,
    paddingHorizontal: width * 0.08,
  },

  otpInput: {
    width: width * 0.12,
    height: width * 0.15,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: width * 0.07,
    fontWeight: "700",
    color: "#000",
  },

  otpText: {
    marginTop: height * 0.02,
    textAlign: "center",
    fontSize: width * 0.038,
    color: "#444",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.04,
  },

  actionBtn: {
    width: "48%",
    paddingVertical: height * 0.018,
    borderRadius: width * 0.03,
    alignItems: "center",
  },

  actionBtnText: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "600",
  },
});

export default OtpVerificationScreen;
