import {ScrollView, StyleSheet, Text, View} from "react-native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../../root.navigation"
import QuestionAndAnswer from "./components/QuestionAndAnswer"
import {generateMathExam} from "./utils/generateExam"
import {useCallback, useMemo, useState} from "react"
import Button from "../../components/Button"
import {colors} from "../../styles"
import CustomModal from "../../components/Modal"
import {getScoresCollection} from "../../database/db";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey["50"],
    justifyContent: 'flex-start',
    padding: 10,
  },
  scrollView: {
    width: '100%',
    height: '100%',
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
    borderColor: colors.grey["200"],
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
  },
  alertText: {
    fontSize: 18,
    color: colors.grey["50"],
    backgroundColor: colors.red["500"],
    width: '100%',
    padding: 5
  }
})

type ExamScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Exam'>

export default function ExamScreen({route}: ExamScreenNavigationProp) {
  const startDateTime = useMemo(() => new Date(), [])
  const [finishedTime, setFinishedTime] = useState<Date>(null)
  const exams = useMemo(() => generateMathExam(5), [])
  const [alert, setAlert] = useState(false)
  const [selectedMap, setSelectedMap] = useState(new Map<number, number>())
  const [scoreModalVisible, setScoreModalVisible] = useState(false)

  const onSelected = useCallback((questionNumber: number, selected: number) => {
    setSelectedMap(prevSelectedMap => {
      const newSelectedMap = new Map(prevSelectedMap)
      newSelectedMap.set(questionNumber, selected)
      return newSelectedMap
    })
  }, [])

  const calculateScore = (): number => {
    return exams.reduce((score, exam) =>
        exam.answerIndex === selectedMap.get(exam.id) ? score + 1 : score
      , 0)
  }

  const calculateTimeInSeconds = (): number => finishedTime ? Math.floor((finishedTime.getTime() - startDateTime.getTime()) / 1000) : 0

  const textScore = (): string => `${route.params.name} score is ${calculateScore()}/${exams.length} within ${calculateTimeInSeconds()} seconds`

  const onSubmit = () => {
    if (exams.length !== selectedMap.size) {
      setAlert(true)
      return setTimeout(() => setAlert(false), 3000)
    }
    const finishedTime = new Date()
    setFinishedTime(finishedTime)
    setScoreModalVisible(true)

    // save data
    const scores = getScoresCollection()
    scores.insert({
      name: route.params.name,
      score: calculateScore(),
      startDateTime,
      finishDateTime: finishedTime,
    })
  }

  return (
    <View style={styles.container}>
      {!!finishedTime &&
          <Text
              style={styles.finishText}>{'You have already finished the examination. Please start a new test.'}</Text>}
      {alert &&
          <Text
              style={styles.alertText}>{'Please do every question'}</Text>}
      <ScrollView style={styles.scrollView}>
        {exams.map((exam) => (
          <QuestionAndAnswer
            key={exam.id}
            questionNumber={exam.id}
            question={exam.question}
            choices={exam.choices}
            selected={selectedMap.get(exam.id)}
            onPress={onSelected}
            finished={!!finishedTime}
            answerIndex={exam.answerIndex}
          />
        ))}
      </ScrollView>
      <Button
        onPress={onSubmit}
        title={'Submit'}
        textStyle={!!finishedTime ? styles.submitFinishText : styles.submitText}
        buttonStyle={!!finishedTime ? styles.submitFinishButton : styles.submitButton}
        disabled={!!finishedTime}
      />
      <CustomModal
        text={textScore()}
        modalVisible={scoreModalVisible}
        onClosed={() => setScoreModalVisible(false)}
      />
    </View>
  )
}