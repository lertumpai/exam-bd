import {StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../root.navigation";
import Button from "../components/Button";
import {colors} from "../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderStyle: 'solid',
    borderColor: colors.black,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 30,
    margin: 5
  },
});


type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Button
        title="Exam"
        textStyle={
          {
            color: colors.black,
            fontSize: 18
          }}
        buttonStyle={styles.button}
        onPress={() =>
          navigation.navigate('Exam')
        }
      />
      <Button
        title="Leader Board"
        textStyle={
          {
            color: colors.black,
            fontSize: 18
          }}
        buttonStyle={styles.button}
        onPress={() =>
          navigation.navigate('LeaderBoard')
        }
      />
    </View>
  );
}