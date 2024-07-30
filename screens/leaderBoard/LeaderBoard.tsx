import {StyleSheet, View} from "react-native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../../root.navigation";
import ScoreTable from "./components/ScoreTable";
import {colors} from "../../styles";
import {useEffect, useState} from "react";
import {getScoresCollection, ScoreSchema} from "../../database/db";
import {calculateTime} from "../../utils/date";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey["50"],
  },
})


type LeaderBoardScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'LeaderBoard'>

export default function LeaderBoardScreen(props: LeaderBoardScreenNavigationProp) {
  const [scores, setScores] = useState<ScoreSchema[]>([]);

  function sortByScoresAndTime(a: ScoreSchema, b: ScoreSchema) {
    if (a.score === b.score) {
      return calculateTime(a.startDateTime, a.finishDateTime) - calculateTime(b.startDateTime, b.finishDateTime);
    }
    return b.score - a.score;
  }

  useEffect(() => {
    const scoresCollection = getScoresCollection();
    console.log("scoresCollection", scoresCollection.find())
    setScores(scoresCollection.find().sort(sortByScoresAndTime));
  }, []);

  return (
    <View style={styles.container}>
      <ScoreTable rows={scores}/>
    </View>
  )
}