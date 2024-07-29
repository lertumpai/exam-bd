import {StyleSheet, TextInput, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../root.navigation";
import {useState} from "react";
import Button from "../../components/Button";
import {colors} from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey["50"],
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    borderWidth: 1,
    borderColor: colors.black,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 5,
  },
  text: {
    fontSize: 18,
    color: colors.black
  },
  input: {
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
  },
  inputError: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.red["500"],
    padding: 5,
    fontSize: 18,
  },
});


type RegisterExamScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'RegisterExam'>;

export default function RegisterExamScreen({navigation}: RegisterExamScreenNavigationProp) {
  const [name, setName] = useState<string>('');
  const [isInputError, setIsInputError] = useState<boolean>(false);

  function onRegister() {
    if (!name) {
      return setIsInputError(true);
    }
    navigation.pop()
    navigation.navigate('Exam', {name});
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={isInputError ? styles.inputError : styles.input}
        onChangeText={setName}
        value={name}
        placeholder="please enter your name"
        placeholderTextColor={isInputError ? colors.red["500"] : colors.grey["400"]}
      />
      <Button onPress={onRegister} title={'register'} buttonStyle={styles.button} textStyle={styles.text}/>
    </View>
  );
}