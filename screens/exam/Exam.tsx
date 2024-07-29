import {ScrollView, StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../root.navigation";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import {generateMathExam} from "./utils/generateExam";
import {useCallback, useMemo, useState} from "react";
import Button from "../../components/Button";
import {colors} from "../../styles";
import CustomModal from "../../components/Modal";

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
    marginBottom: 10,
  },
  submitText: {
    fontSize: 18,
    color: colors.black
  },
  submitButton: {
    borderWidth: 1,
    borderColor: colors.black,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5
  },
  submitFinishText: {
    fontSize: 18,
    color: colors.grey["200"]
  },
  submitFinishButton: {
    borderWidth: 1,
    color: colors.grey["200"],
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5
  },
  finishText: {
    fontSize: 18,
    color: colors.black,
    backgroundColor: colors.grey["300"],
    width: '100%',
    padding: 5
  }
});

type ExamScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Exam'>;

export default function ExamScreen({navigation}: ExamScreenNavigationProp) {
  const exams = useMemo(() => generateMathExam(1), []);
  const [finish, setFinish] = useState(false);
  const [selectedMap, setSelectedMap] = useState(new Map<number, number>());
  const [scoreModalVisible, setScoreModalVisible] = useState(false);

  const onSelected = useCallback((questionNumber: number, selected: number) => {
    setSelectedMap(prevSelectedMap => {
      const newSelectedMap = new Map(prevSelectedMap);
      newSelectedMap.set(questionNumber, selected);
      return newSelectedMap;
    });
  }, []);

  const calculateScore = (): number => {
    return exams.reduce((score, exam) =>
        exam.answerIndex === selectedMap.get(exam.id) ? score + 1 : score
      , 0)
  }

  const textScore = (): string => `Your score is ${calculateScore()}/${exams.length}`

  const onSubmit = () => {
    if (exams.length !== selectedMap.size) {
      return
    }
    setFinish(true)
    setScoreModalVisible(true)
  }

  return (
    <View style={styles.container}>
      {finish &&
          <Text
              style={styles.finishText}>{'You have already finished the examination. Please start a new test.'}</Text>}
      <CustomModal
        text={textScore()}
        modalVisible={scoreModalVisible}
        onClosed={() => setScoreModalVisible(false)}
      />
      <ScrollView style={styles.scrollView}>
        {exams.map((exam) => (
          <QuestionAndAnswer
            key={exam.id}
            questionNumber={exam.id}
            question={exam.question}
            choices={exam.choices}
            selected={selectedMap.get(exam.id)}
            onPress={onSelected}
            disabled={finish}
          />
        ))}
        <Button
          onPress={onSubmit}
          title={'Submit'}
          textStyle={finish ? styles.submitFinishText : styles.submitText}
          buttonStyle={finish ? styles.submitFinishButton : styles.submitButton}
          disabled={finish}
        />
      </ScrollView>
    </View>
  );
}