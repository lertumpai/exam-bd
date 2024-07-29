import {StyleSheet, View} from "react-native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../../root.navigation";
import ScoreTable from "./components/ScoreTable";
import {useQuery} from "@realm/react";
import {ScoreSchema} from "../../database/score.schema";
import {colors} from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey["50"],
  },
})


type LeaderBoardScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'LeaderBoard'>

export default function LeaderBoardScreen(props: LeaderBoardScreenNavigationProp) {
  const scoreQuery = useQuery(ScoreSchema);

  function getScore() {
    return scoreQuery.map((score: ScoreSchema) => score);
  }

  return (
    <View style={styles.container}>
      <ScoreTable rows={getScore()}/>
    </View>
  )
}