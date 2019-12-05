import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react'


const AuthNavigator = createStackNavigator({
    Login: {
        getScreen: () => require('./LoginScreen').default
    },
}, {
    headerMode: 'none',
})

const TabNavigator = createMaterialTopTabNavigator({
    Home: {
        getScreen: () => require('./HomeScreen').default
    }
})

const MainNavigator = createStackNavigator({
    Tab: TabNavigator
})

const AppNavigator = createSwitchNavigator({
    Splash: {
        getScreen: () => require('./SplashScreen').default
    },
    Auth: AuthNavigator,
    Main: MainNavigator
}, {
    initialRouteName: 'Splash'
})

const Container =  createAppContainer(AppNavigator);


class Navigation extends Component {
    state = {}

    render() {
        return (
            <Container />
        )
    }
}

export default Navigation;
