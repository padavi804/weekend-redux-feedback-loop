import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const currentFeeling = (state = '', action) => {
    if (action.type === 'UPDATE_CURRENT_FEELING') {
        return action.payload;
    }
    return state;
}








/** TODO: Create store */
const storeInstance = createStore(
    combineReducers(
        {
            currentFeeling,
        }
    ),
    // Setup our logger
    applyMiddleware(logger)
);