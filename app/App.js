import React, {useState} from 'react';
import { View, TextInput, FlatList} from 'react-native';
import {styles} from './utils/Styles';
import Buttons from './components/Buttons';
import Layout from './components/Layout';
import Message from './components/Message';

const App = () => {
  const NR_COL = 5;
  const [buttonCount, setButtonCount] = useState(null);
  const [buttonsArray, setButtonsArray] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const [state, setState] = useState(false);

  const getButtonsArray = (event) => {
    event.preventDefault();
    const winButton = Math.floor(Math.random() * buttonCount + 1);
    let winner = false;
    for (let i = 1; i <= buttonCount; ++i) {
      if (i === winButton) {
        winner = true;
      }
      let currentButton = {'winner': winner};
      buttonsArray.push(currentButton);
    }
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
