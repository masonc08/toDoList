import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { conditionalExpression } from '@babel/types';

export default class HelloWorldApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      enteredText: '',
      toDoList: [],
    };
  }
  addToList() {
    let tempList = this.state.toDoList;
    tempList.push(this.state.enteredText);
    this.setState({
      enteredText: '',
      toDoList: tempList
    });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, justifyContent: 'center', backgroundColor: 'blue'}}>
          <Text style={{textAlign:'center', fontSize: 24, fontWeight: 'bold'}}>To-Do List</Text>
        </View>
        <View style={{flex: 9, padding: 10}}>
          <Text style={{fontWeight:'bold'}}>What's on the agenda today?</Text>
          <TextInput 
              style={{height:40}} 
              placeholder="Add to to-do list..." 
              onChangeText={(enteredText) => this.setState({enteredText})}
              onSubmitEditing={() => {this.addToList()}}
              value={this.state.enteredText}
            />
            <Button
              title="Add"
              onPress={() => {this.addToList()}}
            />
            <Text style={{paddingTop:10, fontWeight:'bold'}}>Tasks:</Text>
            {this.state.toDoList.map((item, key) => (
              <View style={{flexDirection: 'row'}}>
                <View style={{flex:9}}>
                  <Text key={key}>{item}</Text>
                </View>
                <View style={{flex:1}}>
                  <Icon name="delete" size={30}/>
                </View>
              </View>
            ))}
        </View>
      </View>
    );
  }
}
