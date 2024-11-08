import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CalculatorProvider } from './components/CalculatorProvider';
import Result from './components/Result';
import Calculator from './components/Calculator';
import './App.css';

function App() {

  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path='/' element= {<Calculator/>}/>
          <Route path='/result' element= {<Result/>}/>
        </Routes>
      </Router>
    </CalculatorProvider>
    
  );
}

export default App;
