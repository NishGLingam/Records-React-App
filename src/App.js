import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer/reducer'
import Table from './components/Table';
import AddRecord from './components/AddRecord';

const store = createStore(reducer);

function App() {
  return (
    <Provider store = {store}>
      <AddRecord />
      <Table />
    </Provider>
  );
}

export default App;
