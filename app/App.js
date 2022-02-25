import React, {useState, useEffect} from 'react';
import { View, TextInput, FlatList} from 'react-native';
import {styles} from './utils/Styles';
import Buttons from './components/Buttons';
import Layout from './components/Layout';
import Message from './components/Message';

const App = () => {
  const NR_COL = 5;
  const [buttonCount, setButtonCount] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const [state, setState] = useState(false);
  const [buttonsArray, setButtonsArray] = useState([]);

  const getButtonsArray = () => {
    let winner = false;
    let id = 0;
    const winButton = Math.floor(Math.random() * buttonCount + 1);
    const array = Array(Number(buttonCount)).fill({'winner': winner});
    setButtonsArray(array.fill({'winner': true}, winButton, winButton + 1));
    setButtonCount('');
    setDisableSubmit(true);
  }
  
  const renderButtons = ({item}) => {
    return (
      <View>
        <Buttons button = {item} isWinner = {setIsWinner} getState = {setState} />
      </View>
    );
    }

  return (
    <View style = {styles.container}>
      <Layout
        onChange = {setButtonCount}
        value = {buttonCount}
        onPress = {getButtonsArray}
        disable = {disableSubmit}
      />
      <FlatList
       style = {{justifyContent: 'center'}}
       data = {buttonsArray}
       renderItem = {renderButtons}
       numColumns = {NR_COL}
      />
      <View>
      {
        state ? <Message winner = {isWinner} /> : null
      }
    </View>
    </View>
  );
};

export default App;
