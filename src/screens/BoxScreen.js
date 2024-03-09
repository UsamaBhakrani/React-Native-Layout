import { StyleSheet, Text, View } from "react-native";
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Child 1</Text>
      <Text style={styles.text}>Child 2</Text>
      <Text style={styles.text}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "black",
  },
  text: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
