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
  TouchableNativeFeedback
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
      <View style={styles.topView}>
      <TouchableOpacity style={[styles.menuIcon, { top: "40.5%" }]}>
        <Image
          source={require("../assets/icons/menu2.png")}
          style={{width: 39,
    height: 30,}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={[
            styles.menuIcon,
            { width: 30, height: 32, right: "1%", left: "41%", top: "30%" },
          ]}>
        <Image
          source={require("../assets/icons/search.png")}
          style={{width:30, height:32}}
        /></TouchableOpacity>
        <Image
          source={require("../assets/images/boy.png")}
          style={styles.avatar}
        ></Image>

        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 25,
            left: "15%",
            top: "14%",
          }}
        >
          Ayush Datta
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 17,
            left: "15%",
            top: "14%",
            opacity: 0.6,
          }}
        >
          Student, coder
        </Text>
        <View style={{ right: "25%", bottom: "21%" }}>
          <CircularProgress
            value={100}
            activeStrokeWidth={8}
            radius={60}
            duration={2000}
            textColor={"transparent"}
            activeStrokeColor={"#e46471"}
            inActiveStrokeColor={"transparent"}
            maxValue={200}
            titleColor={"white"}
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6588e4", //#2659d9, #1f47ad
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topView: {
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
  },
});
