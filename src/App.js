import React from 'react';
import './App.scss';
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
      <div className = "app-container">
        <h1> Shafeeq's Record Database </h1>
        <Filters />
        <Table />
        <AddRecord />
      </div>
    </Provider>
  );
}

export default App;
