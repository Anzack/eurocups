import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import teams from './teams';
import team from './team';
import comments from './comments';

const euroApp = combineReducers({
	teams,
	team,
	comments,
	form: formReducer
});

export default euroApp;
