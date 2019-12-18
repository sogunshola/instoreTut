import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationService } from '../api/NavigationService';
import TabBar from '../components/TabBar';
import ButtomNav from '../components/ButtomNav';


const AuthNavigator = createStackNavigator({
    Login: {
        getScreen: () => require('./LoginScreen').default
    },
}, {
    headerMode: 'none',
})

const TabNavigator = createBottomTabNavigator({
    Home: {
        getScreen: () => require('./HomeScreen').default
    },
    List: {
        getScreen: () => require('./ListScreen').default
    },
    Store: {
        getScreen: () => require('./StoreScreen').default
    },
    Order: {
        getScreen: () => require('./OrderScreen').default
    },
}, {
    tabBarComponent: props => <ButtomNav {...props}/>
})

const MainNavigator = createStackNavigator({
    Tab: TabNavigator
}, {
    headerMode: 'none',
})

const AppNavigator = createSwitchNavigator({
    Splash: {
        getScreen: () => require('./SplashScreen').default
    },
    Auth: AuthNavigator,
    Main: MainNavigator
}, {
    initialRouteName: 'Splash',
})

const Container =  createAppContainer(AppNavigator);


class Navigation extends Component {
    state = {}

    render() {
        return (
            <Container ref={r => NavigationService.setTopLevelNavigator(r)} />
        )
    }
}

export default Navigation;
