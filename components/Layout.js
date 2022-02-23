
import React from 'react';
import {TextInput, Button, View} from 'react-native';
import {styles} from '../utils/Styles';


const Layout = (props) => {
return (
<View style = {{flexDirection: 'row', justifyContent: 'center'}}>
  <TextInput
    style = {styles.input}
    onChangeText = {props.onChange}
    value = {props.value}
    placeholder = 'Enter a number'
  />
  <Button
    style = {{flex: 1}}
    type ='submit'
    title ='Submit'
    onPress = {props.onPress}
    disabled = {props.disable}
  />
</View>
);
}

export default Layout;
