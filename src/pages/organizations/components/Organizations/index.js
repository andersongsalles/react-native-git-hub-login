import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Organizations extends Component {


  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars0.githubusercontent.com/u/28929274?v=4&s=200' }}
        />
        <Text style={styles.title}>RocketSeat2</Text>
      </View>
    );
  }
}
