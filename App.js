import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useFonts } from "expo-font";

const colors = {
  offWhite: "#FFF9EC",
  chrome: "#F9BE7C",
  reddishPink: "#E46472",
  randomBlue: "#6488E4",
  greenish: "#309397",
  bluishBlack: "#0D253F",
};

/* COLORS FOR SIGN UP AND LOGIN SCREEN (OLD ONE NOT METAFY) : 

#050507
#554454
#8D0696
#9D0570
#B8B8B8
#C44BC1

*/

const ProgressCard = (props) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: props.backgroundColor, //"#E46472"
          width: props.cardWidth,
          height: props.cardHeight,
          borderRadius: props.borderRadius,
          //bottom: '92%',
        }}
      ></View>
    </View>
  );
};

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    DMSans: require("./assets/fonts/DM_Sans/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DM_Sans/DMSans-Bold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
 {/*DO FLOATING ACTION BUTTON WITH VIEW*/}
  return ( 
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={{width:230, height:170, backgroundColor:'#031956', borderRadius:40, elevation:30, shadowColor:'#344fa1'}}></View>

      
    
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#344fa1",
    alignItems: "center",
    justifyContent: "center",
  },
});

/* import CircularProgress from "react-native-circular-progress-indicator";
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
} */
