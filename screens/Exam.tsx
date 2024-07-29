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

type ExamScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Exam'>;

export default function ExamScreen() {
  return (
    <View style={styles.container}>
      <Text>Exam</Text>
    </View>
  );
}