import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index1.css';

import App from './App';
import { Header } from './components/layout/index'
import * as serviceWorker from './serviceWorker';



// ReactDOM.render( React.createElement(App),  document.getElementById('root'));
// ReactDOM.render( React.createElement(Header) , document.getElementById('header'));

ReactDOM.render( <App/>,  document.getElementById('root'));
ReactDOM.render( <Header/> , document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
