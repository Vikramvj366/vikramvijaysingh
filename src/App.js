import { useEffect, useState } from 'react';
import './App.css';
import CoinList from './CoinList';
import CoinDetails from './CoinDetails';
import {
  Route,
  useHistory
} from "react-router-dom";

function App() {

  // Default Currency set to EUR
  const [currency, setCurrency] = useState('eur');

  return (
    <div className="App">
      <header className="App-header">
        Coin Gecko
      </header> 
          <Route
              exact path='/'
              render={() => <CoinList
              currency={currency}
              />}/> 
           <Route
              path='/:id'
              render={() => <CoinDetails
              currency={currency}
              />}/>
    </div>
  );
}

export default App;
