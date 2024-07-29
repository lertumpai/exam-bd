import {ScrollView, StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../root.navigation";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import {generateMathExam} from "./utils/generateExam";
import {useCallback, useMemo, useState} from "react";

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
    marginBottom: 10
  },
});

type ExamScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Exam'>;

export default function ExamScreen(props: ExamScreenNavigationProp) {
  const exams = useMemo(() => generateMathExam(20), []);
  const [selectedMap, setSelectedMap] = useState(new Map<number, number>());

  const onSelected = useCallback((questionNumber: number, selected: number) => {
    setSelectedMap(prevSelectedMap => {
      const newSelectedMap = new Map(prevSelectedMap);
      newSelectedMap.set(questionNumber, selected);
      return newSelectedMap;
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {exams.map((exam) => (
          <QuestionAndAnswer
            key={exam.id}
            questionNumber={exam.id}
            question={exam.question}
            choices={exam.choices}
            selected={selectedMap.get(exam.id)}
            onPress={onSelected}
          />
        ))}
      </ScrollView>
    </View>
  );
}