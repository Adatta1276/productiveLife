import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ProgressCard = (props) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: props.backgroundColor, //"#E46472"
          width: props.cardWidth,
          height: props.cardHeight,
          borderRadius: props.borderRadius,
        }}
      ></View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ProgressCard
        backgroundColor={"#E46472"}
        cardWidth={180}
        cardHeight={200}
        borderRadius={60}
      />
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

/*import CircularProgress from "react-native-circular-progress-indicator";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1, backgroundColor:'#000' }}>
      <CircularProgress
        value={200}
        radius={120}
        duration={3000}
        activeStrokeColor={"#2465FD"}
        activeStrokeSecondaryColor={"#C25AFF"}
        maxValue={200}
      />
    </View>
  );
}*/
