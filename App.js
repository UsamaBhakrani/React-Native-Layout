import { StyleSheet, Text, View } from "react-native";
import BoxScreen from "./src/screens/BoxScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <BoxScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
