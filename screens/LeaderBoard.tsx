import {StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../root.navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


type LeaderBoardScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'LeaderBoard'>;

export default function LeaderBoardScreen({navigation}: LeaderBoardScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Leader</Text>
    </View>
  );
}