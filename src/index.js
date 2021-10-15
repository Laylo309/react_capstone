import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
