import { combineReducers } from 'redux';

import persons from './persons';
import auth from './auth';

export default combineReducers({ persons, auth });