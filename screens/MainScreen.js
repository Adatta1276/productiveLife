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
import {
  Ionicons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
//785,410
//110,180
//7.14, 2.3 (RATIO OF HEIGHTS, RATIO OF WIDTHS)

function Icon(props) {
  return (
    <View
      style={{
        backgroundColor: props.bgColor,
        width: props.viewWidth,
        height: props.viewHeight,
        borderRadius: props.viewBorderRadius,
        //  overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
}

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
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6588e4", //#2659d9, #1f47ad
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
