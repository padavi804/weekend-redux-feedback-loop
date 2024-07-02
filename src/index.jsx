import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

const currentUnderstanding = (state = '', action) => {
    if (action.type === 'UPDATE_CURRENT_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}






/** Create store */
const storeInstance = createStore(
    combineReducers(
        {
            currentFeeling, currentUnderstanding,
        }
    ),
    // Setup logger
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
