import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function ErrorScreen() {
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
        <Image
        source={require("../assets/images/errorImg2.png")}
        style={{ width: "70%", height: "35%", bottom: "12%", left: "2%" }}
      />
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 25,
          color: "#fff",
          top: "1%",
        }}
      >
        Oops.....
      </Text>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 15,
          color: "#fff",
          top: "5%",
        }}
      >
        There's a connection error. Please check your
      </Text>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 15,
          color: "#fff",
          top: "5.5%",
        }}
      >
        internet connection and try again.
      </Text>

      <TouchableOpacity
      onPress={() => {}}
        activeOpacity={0.7}
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          top: "17%",
          width: 300,
          height: 50,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontFamily: "Poppins", fontSize: 15, top: "1%" }}>
          Try again
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
