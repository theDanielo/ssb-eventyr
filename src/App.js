import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Words from './components/wordList'


import './css/main.css'
function App() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => <Words />} />
        </div>
      </BrowserRouter>
  );
}
export default App;
