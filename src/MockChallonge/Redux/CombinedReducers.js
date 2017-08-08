import {combineReducers} from 'redux';
import TeamsReducer from './Reducers/TeamsReducer';
import TitleReducer from './Reducers/TitleReducer';

const rootReducer = combineReducers({
	teams: TeamsReducer,
	title: TitleReducer
})

export default rootReducer;