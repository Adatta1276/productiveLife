import { StatusBar } from "expo-status-bar";
function SystemBar() {
  // @customElement
  //Returns a normal statusbar
  return <StatusBar style="auto" translucent={true} />;
}
module.exports = SystemBar;
