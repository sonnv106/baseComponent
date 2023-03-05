import {Text, View, Button, } from 'react-native';
import React, {Component} from 'react';

export default class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update', nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update',prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handlePress() {
    console.log('abc')
  }
  navigateTo(){
    
  }
  render() {
    console.log('Render');
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <Button title="Press me" onPress={this.handlePress} />
        
      </View>
    );
  }
}
