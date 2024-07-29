import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../../../styles";

type Props = {
  onPress: (questionNumber: number, selected: number) => void;
  questionNumber: number,
  question: string,
  choices: string[],
  selected?: number,
}

export default function QuestionAndAnswer(props: Props) {

  const onPress = useCallback((selected: number) => {
    props.onPress(props.questionNumber, selected);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{props.questionNumber}. {props.question}</Text>
      {props.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(index)}
          activeOpacity={0.5}
          style={styles.touchable}>
          <Text style={props.selected === index ? styles.choose : styles.choice}>
            {index + 1}. {choice}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 5,
    borderColor: colors.grey["300"],
    borderWidth: 1,
    width: '100%',
    padding: 8,
  },
  touchable: {
    width: '100%',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  choice: {
    fontSize: 16,
    marginVertical: 4,
    width: '100%',
  },
  choose: {
    fontSize: 16,
    color: colors.grey["100"],
    backgroundColor: colors.grey["500"],
    marginVertical: 4,
    width: '100%',
  }
});

