import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native"
import HomeScreen from "./screens/Home"
import {RootStackParamList} from "./root.navigation"
import ExamScreen from "./screens/exam/Exam"
import RegisterExamScreen from "./screens/exam/RegisterExam"
import LeaderBoardScreen from "./screens/leaderBoard/LeaderBoard";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Exam" component={ExamScreen}/>
        <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen}/>
        <Stack.Screen name="RegisterExam" component={RegisterExamScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
