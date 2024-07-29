import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../../../styles";

type Props = {
  onPress: (questionNumber: number, selected: number) => void;
  questionNumber: number,
  question: string,
  choices: string[],
  selected?: number,
}

function QuestionAndAnswer(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{props.questionNumber}. {props.question}</Text>
      {props.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => props.onPress(props.questionNumber, index)}
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

export default React.memo(QuestionAndAnswer);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 5,
    borderColor: colors.grey["200"],
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

