import {StyleSheet, Text, View} from "react-native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../root.navigation"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


type ScoreScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Score'>

export default function ScoreScreen({route}: ScoreScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Score: {route.params.score}/{route.params.totalQuestion}</Text>
    </View>
  )
}