import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import Store from './store/Store';

ReactDOM.render(
<Provider store={Store}>
  <App />
</Provider>, document.getElementById('root'));

