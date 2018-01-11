import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Welcome from './pages/welcome';
import Repositories from './pages/repositories';
import Organizations from './pages/organizations';
import Header from './components/header';
import colors from './styles/colors';

const createRootNavigator = (userExists = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          activeTintColor: colors.white,
          inactiveTintColor: colors.inactive,
          style: {
            backgroundColor: colors.primary,

          },
          indicatorStyle: {
            opacity: 0
          },
        },
      }),
    },
  }, {
    initialRouteName: userExists ? 'User' : 'Welcome',
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  });

export default createRootNavigator;
