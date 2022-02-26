var appMode = "dev";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Shadow } from "react-native-shadow-2";
import { useFonts } from "expo-font";
import { Constants } from "expo-constants";
import MainScreen from "./screens/MainScreen";
const Stack = createNativeStackNavigator();

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

//! Main function
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function OnboardingScreen({ navigation }) {
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

      <TouchableOpacity
        style={{
          bottom: "68%",
          left: "35%",
          width: 85,
          height: 30,
          backgroundColor: "#9b86fd",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("MainScreen");
        }}
      >
        <Text
          style={{
            color: "#fff",
            top: "1%",
            fontFamily: "Poppins",
            fontWeight: "900",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <Shadow
        distance={
          appTheme === "light"
            ? themeData.lightTheme.buttonShadowRadius
            : themeData.darkTheme.buttonShadowRadius
        }
        startColor={"rgba(247,96,143,0.5)"}
        paintInside={true}
        offset={[0, 13]}
      >
        <TouchableOpacity
          touchSoundDisabled={true}
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            // elevation: 45,
            borderRadius: 100,
            //shadowColor: "rgb(0,204,255)",
            width: 70,
            height: 70,
            backgroundColor: "rgba(247,96,143,1)",
            borderRadius: 100,

            top: "17%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-Bold",
              fontWeight: "900",
              paddingBottom: 5,
              //bottom: "7%",
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
      <Pressable
        style={{ top: "8%" }}
        onPress={() => {
          navigation.navigate("MainScreen");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Poppins",
          }}
        >
          Already a member? Sign in
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function SignUpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>Sign up here!</Text>
    </View>
  );
}

function SignInScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>Sign in here!</Text>
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
