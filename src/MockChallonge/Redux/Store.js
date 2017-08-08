import { createStore } from 'redux';
import rootReducer from './CombinedReducers'


const store = createStore(rootReducer,window.devToolsExtension ? window.devToolsExtension() : undefined);

export default store;
