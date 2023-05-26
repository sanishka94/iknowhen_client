import React from 'react';

import {APP_NAME} from "./config"
import './App.css';

const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App-header"> 
        <div>{APP_NAME}</div>
      </header>
    </div>
  );
}

export default App;
