import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button title="Box Screen" onPress={() => navigate("Box")} />
    </View>
  );
};

export default HomeScreen;
