import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const Message = (props) => {
  const[message, setMessage] = useState('');

  useEffect (()=> {
  props.winner ? setMessage(`Excellent`) : setMessage('Duh');}, [props.winner]);

  return  <Text>{message}</Text>
}

export default Message;
