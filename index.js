/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/store/store';

const store = createStore(reducer);

const AppContainer = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
