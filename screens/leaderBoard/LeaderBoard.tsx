import {StyleSheet, View} from "react-native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../../root.navigation";
import ScoreTable from "./components/ScoreTable";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})


type LeaderBoardScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'LeaderBoard'>

export default function LeaderBoardScreen({navigation}: LeaderBoardScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <ScoreTable/>
    </View>
  )
}