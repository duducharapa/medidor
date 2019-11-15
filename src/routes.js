import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import App from './index';
import Home from './components/home';

const navigator = createStackNavigator({
    App, Home
},{
    initialRouteName: 'App',
    headerMode: 'none'
});

const container = createAppContainer(navigator);

export default container;