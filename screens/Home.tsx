import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}