import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Constants } from "expo-constants";
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import ProgressBar from "react-native-animated-progress";
import CircularProgress from "react-native-circular-progress-indicator";
import { Shadow } from "react-native-shadow-2";
import { useFonts } from "expo-font";
//785,410
//110,180
//7.14, 2.3 (RATIO OF HEIGHTS, RATIO OF WIDTHS)

export default function MainScreen() {
  const window = useWindowDimensions();
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    DMSans: require("../assets/fonts/DM_Sans/DMSans-Regular.ttf"),
    "DMSans-Bold": require("../assets/fonts/DM_Sans/DMSans-Bold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.appBarText}>Hello, Ayush</Text>
      <Image
        style={styles.notifImg}
        source={require("../assets/icons/bell_icon.png")}
      />
      <View style={styles.dot}></View>
      <View style={styles.topCard}>
        <Image
          style={styles.topCardImg}
          source={require("../assets/images/topCardImg.jpg")}
        />
        <Text style={styles.todayTxt}>Today</Text>
        <Text style={styles.tasksCompletedTxt}>2/10 tasks</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255,255,255)", //#2659d9, #1f47ad
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appBarText: {
    fontFamily: "Poppins-Bold",
    fontSize: 23,
    bottom: "28%",
    right: "22%",
  },
  notifImg: {
    width: 30,
    height: 30,
    left: "40%",
    bottom: "33%",
  },
  dot: {
    backgroundColor: "#06ceaa",
    width: 7.5,
    height: 7.5,
    borderRadius: 50,
    bottom: "36.8%",
    left: "42.6%",
  },
  topCard: {
    backgroundColor: "#6d4bfa",
    width: "87%",
    height: "18%",
    borderRadius: 31,
    bottom: "29%",
    justifyContent: "center",
  },
  topCardImg: {
    width: "59%",
    height: "89%",
    left: "37%",
    top: "26%",
  },
  todayTxt: {
    fontFamily: "Poppins",
    color: "#ffffff",
    left: "8%",
    fontSize: 18,
    opacity: 0.8,
    bottom: "52%",
  },
  tasksCompletedTxt: {
    fontFamily: "Poppins-Bold",
    color: "#ffffff",
    left: "8%",
    fontSize: 25,
    opacity: 0.8,
    bottom: "28%",
  },
  /*topView: {
    backgroundColor: "#1f47ad",
    width: "100%",
    height: "38%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    bottom: "35%",
  },
  menuIcon: {
    width: 39,
    height: 30,
    right: "41%",
    top: "6.5%",
  },
  avatar: {
    width: 100,
    height: 100,
    right: "25%",
    top: "42%",
    backgroundColor: "rgb(0,150,255)",
    //borderWidth: 2,
    //borderColor: "#e46471",
    borderRadius: 100,
  },*/
});
