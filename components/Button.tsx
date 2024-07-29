import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {GestureResponderEvent} from "react-native/Libraries/Types/CoreEventTypes";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function Button(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
        <Text style={props.textStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

