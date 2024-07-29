import {ScrollView, StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../root.navigation";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import {generateMathExam} from "./utils/generateExam";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  scrollView: {
    width: '100%',
  },
});

type ExamScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Exam'>;

export default function ExamScreen() {
  const exams = generateMathExam(20)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {exams.map((exam) => (
          <QuestionAndAnswer
            key={exam.id}
            questionNumber={exam.id}
            question={exam.question}
            choices={exam.choices}
            onPress={() => {
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}