import {StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../root.navigation";
import QuestionAndAnswer from "./components/QuestionAndAnswer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
});

type ExamScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Exam'>;

export default function ExamScreen() {
  return (
    <View style={styles.container}>
      <QuestionAndAnswer
        questionNumber={1}
        question="What is the capital of Thailand?"
        choices={["Bangkok", "Hanoi", "Jakarta", "Manila"]}
        onPress={() => {
        }}
      />
    </View>
  );
}