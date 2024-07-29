import {StyleSheet, View} from "react-native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../../root.navigation";
import ScoreTable from "./components/ScoreTable";
import {colors} from "../../styles";
import {useEffect, useState} from "react";
import {getScoresCollection, ScoreSchema} from "../../database/db";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey["50"],
  },
})


type LeaderBoardScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'LeaderBoard'>

export default function LeaderBoardScreen(props: LeaderBoardScreenNavigationProp) {
  const [scores, setScores] = useState<ScoreSchema[]>([]);

  useEffect(() => {
    const scoresCollection = getScoresCollection();
    setScores(scoresCollection.find());
  }, []);

  return (
    <View style={styles.container}>
      <ScoreTable rows={scores}/>
    </View>
  )
}