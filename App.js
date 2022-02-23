var appMode = "dev";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Shadow } from "react-native-shadow-2";
import { useFonts } from "expo-font";
var clickCount = 0;
var appTheme = "dark";

var themeData = {
  darkTheme: {
    textColor: "#ffffff",
    buttonShadowRadius: 17,
  },
  lightTheme: {
    textColor: "#000000",
    buttonShadowRadius: 10,
  },
};

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    DMSans: require("./assets/fonts/DM_Sans/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DM_Sans/DMSans-Bold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          appTheme === "light"
            ? require("./assets/images/intro.jpg")
            : require("./assets/images/intro_dark.jpg")
        }
        style={{ width: 350, height: 350, bottom: "5%" }}
      />
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 30,
          bottom: "1%",
          color:
            appTheme === "light"
              ? themeData.lightTheme.textColor
              : themeData.darkTheme.textColor,
        }}
      >
        Manage your tasks
      </Text>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 16,
          textAlign: "center",
          top: "1%",
          color:
            appTheme === "light"
              ? themeData.lightTheme.textColor
              : themeData.darkTheme.textColor,
        }}
      >
        Organize all of your to-do's in lists and projects. Color tag them to
        set priorities
      </Text>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 16,
          textAlign: "center",
          top: "0.3%",
          color:
            appTheme === "light"
              ? themeData.lightTheme.textColor
              : themeData.darkTheme.textColor,
        }}
      >
        and categories.
      </Text>
      <Shadow
        distance={
          appTheme === "light"
            ? themeData.lightTheme.buttonShadowRadius
            : themeData.darkTheme.buttonShadowRadius
        }
        startColor={"rgba(247,96,143,0.6)"}
        paintInside={true}
        offset={[0, 32.5]}
      >
        <TouchableOpacity
          touchSoundDisabled={true}
          activeOpacity={0.6}
          onPress={() => {
            clickCount = clickCount + 1;
            console.log(
              `The view has been clicked ${clickCount} times so far.`
            );
          }}
          style={{
            // elevation: 45,
            borderRadius: 100,
            //shadowColor: "rgb(0,204,255)",
            width: 70,
            height: 70,
            backgroundColor: "#f7608f",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            top: "45%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "DMSans-Bold",
              bottom: "7%",
              fontSize: 30,
              color:
                appTheme === "light"
                  ? themeData.lightTheme.textColor
                  : themeData.darkTheme.textColor,
            }}
          >
            →
          </Text>
        </TouchableOpacity>
      </Shadow>

      <StatusBar style="auto" translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme === "light" ? "#fff" : "#000", //#8b9fda
    alignItems: "center",
    justifyContent: "center",
  },
});
