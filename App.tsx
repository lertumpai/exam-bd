import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import LeaderBoardScreen from "./screens/LeaderBoard";
import {RootStackParamList} from "./root.navigation";
import ExamScreen from "./screens/exam/Exam";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Exam" component={ExamScreen}/>
        <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
