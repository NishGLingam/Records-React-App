import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer/reducer'
import Table from './components/Table';
import TopSection from './components/TopSection';

const store = createStore(reducer);

function App() {
  return (
    <Provider store = {store}>
      <div className = "app-container">
        <TopSection />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
