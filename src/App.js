import React from 'react';
import { Provider } from 'react-redux';

import './styles/normalize.css';
import './styles/main.css';
import Layout from './components/Layout';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
