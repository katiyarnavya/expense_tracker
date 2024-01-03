import React from 'react';
import './App.css';
import Header from './components/header'
import {Balance} from './components/Balance'
import Incomeexpenses from './components/Incomeexpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import  {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
        <Incomeexpenses/>
        <TransactionList/>
        <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
