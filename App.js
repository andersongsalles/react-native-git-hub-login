/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,

} from 'react-native';
import Routes from './src/routes';


export default class App extends Component<{}> {
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({

});
