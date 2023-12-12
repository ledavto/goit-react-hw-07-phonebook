import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// https://mockapi.io/projects/657855f2f08799dc8044f5c3#

// npm install redux
// npm install react-redux
// npm install @redux-devtools/extension
