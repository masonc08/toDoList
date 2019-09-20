import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { conditionalExpression } from '@babel/types';

export default class HelloWorldApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      enteredText: '',
      toDoList: [],
    };
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, justifyContent: 'center', backgroundColor: 'blue'}}>
          <Text style={{textAlign:'center', fontSize: 24, fontWeight: 'bold'}}>To-Do List</Text>
        </View>
        <View style={{flex: 9, padding: 10}}>
          <Text>What's on the agenda today?</Text>
          <TextInput 
              style={{height:40}} 
              placeholder="Add to to-do list..." 
              onChangeText={(enteredText) => this.setState({enteredText})}
              onSubmitEditing={() => {
                let tempList = this.state.toDoList;
                tempList.push(this.state.enteredText);
                this.setState({
                  toDoList: tempList
                });
              }}
              value={this.state.enteredText}
            />
        </View>
      </View>
    );
  }
}
