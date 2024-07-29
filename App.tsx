import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import ExamScreen from "./screens/Exam";
import LeaderBoardScreen from "./screens/LeaderBoard";

const Stack = createNativeStackNavigator();

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
