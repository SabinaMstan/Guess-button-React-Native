import React, {useState} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from '../utils/Styles';

const Buttons = (props) => {
  const doOnPress = () => {
    props.isWinner(props.button.winner);
    props.getState(true);
  }

  return (
    <TouchableOpacity onPress={doOnPress} style={styles.button}>
      <Text style = {{color: 'white'}}>Pick me!</Text>
    </TouchableOpacity>
  );
}

export default Buttons;
