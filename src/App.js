import React from 'react';
import './App.css';
import Main from './Main';
import { AppContextProvider } from './service/app.context';
import { BrowserRouter } from 'react-router-dom';
import Paperbase from './components/paperBase/Paperbase';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          {/* <Main></Main> */}
          <Paperbase></Paperbase>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
