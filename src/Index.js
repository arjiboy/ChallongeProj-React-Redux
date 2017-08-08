import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Container from './MockChallonge/App'
import { Provider,connect } from 'react-redux';
import store from './MockChallonge/Redux/Store'


ReactDOM.render(<Provider store={store}><Container /></Provider>,document.getElementById('root'));