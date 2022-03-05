import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Constants } from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  ActivityIndicator,
} from "react-native";
import AppLoading from "expo-app-loading";
import ProgressBar from "react-native-animated-progress";
import CircularProgress from "react-native-circular-progress-indicator";
import { Shadow } from "react-native-shadow-2";
import {
  Ionicons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { SquircleView } from "react-native-figma-squircle";
import BouncyCheckbox from "react-native-bouncy-checkbox";

var streakTime = 7;
var username = "Ayush";
var timeInfo = new Date();
var currentHour = timeInfo.getHours();
var word = "";
var word2 = "Good";

if (currentHour >= 5 && currentHour < 12) {
  word = "morning";
} else if (currentHour >= 12 && currentHour < 17) {
  word = "afternoon";
} else if (currentHour >= 17 && currentHour < 21) {
  word = "evening";
} else {
  word = "night";
  word2 = "Late";
}

function ProgressModal() {
  return (
    <View style={styles.progressContainer}>
      <CircularProgress
        value={70}
        maxValue={100}
        radius={100}
        valueSuffix={"%"}
        textStyle={{
          fontFamily: "DMSans-Bold",
          fontSize: 41,
          fontWeight: "normal",
          alignSelf: "center",
          color: "#fff",
          top: "5%",
        }}
        subtitle={"Done"}
        subtitleStyle={{ fontFamily: "Poppins", color: "#fff", top: "5%" }}
        activeStrokeColor={"#3e2cb6"}
        activeStrokeSecondaryColor={"#ff7962"}
        inActiveStrokeColor={"transparent"}
        activeStrokeWidth={12}
        duration={1200}
        inActiveStrokeWidth={12}
      ></CircularProgress>
    </View>
  );
}

function BackButton() {
  return (
    <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
      <Ionicons name="chevron-back-outline" size={30} color="white" />
    </TouchableOpacity>
  );
}

function MoreButton() {
  return (
    <TouchableOpacity
      style={[styles.backButton, { left: "78%" }]}
      activeOpacity={0.7}
    >
      <Entypo name="dots-three-horizontal" size={25} color="white" />
    </TouchableOpacity>
  );
}

export default function MainScreen() {
  const window = useWindowDimensions();
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    DMSans: require("../assets/fonts/DM_Sans/DMSans-Regular.ttf"),
    "DMSans-Bold": require("../assets/fonts/DM_Sans/DMSans-Bold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackButton></BackButton>
      <MoreButton></MoreButton>
      <Text style={styles.welcomeText}>
        {word2} {word}, {username}
      </Text>
      <Text
        style={[
          styles.welcomeText,
          {
            fontFamily: "Poppins",
            bottom: "73.5%",
            fontSize: 17,
            color: "#f17f71",
          },
        ]}
      >
        70% tasks done ; 14/20 done today
      </Text>
      <ProgressModal></ProgressModal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101", //#2659d9, #1f47ad
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 220,
    height: 220,
    backgroundColor: "rgba(22, 23, 29,0)",
    borderRadius: 200,
    left: "20%",
  },
  backButton: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    top: "4%",
    right: "78%",
    borderRadius: 100,
  },
  welcomeText: {
    position: "absolute",
    fontFamily: "Poppins",
    color: "#fff",
    fontSize: 24,
    bottom: "79%",
  },
});
