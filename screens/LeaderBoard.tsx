import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function LeaderBoardScreen() {
  return (
    <View style={styles.container}>
      <Text>Leader</Text>
    </View>
  );
}