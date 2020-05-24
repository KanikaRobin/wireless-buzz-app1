import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
  render(){
    return(
      <Button color="red" title="Click Me"/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <RedButton />
        <Text>My First React Component</Text>
      </View>
    );
  }
}