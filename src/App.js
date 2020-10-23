import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer/reducer'
import Table from './components/Table';
import AddRecord from './components/AddRecord';
import Filters from './components/Filters';

const store = createStore(reducer);

function App() {
  return (
    <Provider store = {store}>
      <Table />
      <AddRecord />
      <Filters />
    </Provider>
  );
}

export default App;
