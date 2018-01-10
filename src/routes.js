import {StackNavigator, TabNavigator} from 'react-navigation'

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';
import Organizations from './pages/Organizations';

const Routes = StackNavigator({
  Welcome: {screen: Welcome},
  User: {screen: TabNavigator({
    Repositories: {screen: Repositories},
    Organizations: {screen: Organizations},
    })
  }
},{
    initialRouteName: 'User',
});

export default Routes;