import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appContainer = document.getElementById('root');

ReactDOM.render(<App />, appContainer);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, appContainer);
  });
}
