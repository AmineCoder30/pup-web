import React from 'react'
import Home from './page/Home'
import {BrowserRouter} from 'react-router-dom'
import './bootstrap.css'
import './index.css'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
