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
  Alert,
} from "react-native";
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
//785,410
//110,180
//7.14, 2.3 (RATIO OF HEIGHTS, RATIO OF WIDTHS)

{
  /*<View style={styles.progressContainer}>
        <CircularProgress
          value={65}
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
      </View>*/
}

const showAlert = () =>
  Alert.alert(
    "Great Work!",
    "You've completed 65% of your weekly goal",
    [
      {
        text: "Cool!",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );

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
    return null;
  }
  return (
    <View style={styles.container}>
      {/* onAnimationComplete={showAlert}*/}
      <View style={styles.topView}>
        <TouchableOpacity activeOpacity={0.5} style={[styles.menuIcon, { top: "43.5%" }]}>
          <Feather name="menu" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
          style={[
            styles.menuIcon,
            { width: 30, height: 32, right: "1%", left: "42%", top: "33.5%" },
          ]}
        >
          <Feather name="search" size={32} color="white" />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/boy.png")}
          style={styles.avatar}
        ></Image>

        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 25,
            color: "#fff",
            left: "15%",
            top: "18.5%",
          }}
        >
          Ayush Datta
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 17,
            left: "15%",
            top: "18.5%",
            color: "#fff",
            opacity: 0.6,
          }}
        >
          Student, coder
        </Text>
        <View style={{ right: "25%", bottom: "14%" }}>
          <CircularProgress
            value={65}
            activeStrokeWidth={8}
            radius={60}
            duration={2000}
            textColor={"transparent"}
            activeStrokeColor={"#e46472"}
            inActiveStrokeColor={"transparent"}
            maxValue={100}
            titleColor={"white"}
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>
      </View>
      <Text
        style={{
          color: "#fff",
          fontFamily: "Poppins-Bold",
          fontSize: 22,
          bottom: "19%",
          right: "28%",
        }}
      >
        Categories
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "15%",
          height: "7%",
          backgroundColor: "#007b83",
          borderWidth: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1000,
          bottom: "25%",
          left: "38%",
        }}
      >
        <Feather name="calendar" size={26} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "15%",
          height: "7%",
          backgroundColor: "#e46472",
          borderWidth: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1000,
          bottom: "22%",
          right: "38%",
        }}
      >
        <Feather name="clock" size={26} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "15%",
          height: "7%",
          backgroundColor: "#f8bf7c",
          borderWidth: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1000,
          bottom: "20%",
          right: "38%",
        }}
      >
        <MaterialCommunityIcons
          name="progress-upload"
          size={28}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "15%",
          height: "7%",
          backgroundColor: "#6488e4",
          borderWidth: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1000,
          bottom: "18%",
          right: "38%",
        }}
      >
        <Feather name="check-circle" size={25} color="white" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010101", //#2659d9, #1f47ad
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 220,
    height: 220,
    backgroundColor: "rgba(22, 23, 29,0)",
    borderRadius: 200,
    bottom: "5%",
  },
  topView: {
    backgroundColor: "#16171d",
    width: "100%",
    height: "38%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    bottom: "21%",
  },
  menuIcon: {
    width: 39,
    height: 30,
    right: "40.5%",
    top: "6.5%",
  },
  avatar: {
    width: 85,
    height: 85,
    right: "25%",
    top: "46.5%",
    backgroundColor: "rgb(0,150,255)",
    //borderWidth: 2,
    //borderColor: "#e46471",
    borderRadius: 100,
  },
});
