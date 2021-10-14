import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';

export const rootReducer = combineReducers({ countries: countriesReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
