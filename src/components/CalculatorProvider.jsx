import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);

  const addNumber = (num) => {
    setCurrentNumber(prev => prev * 10 + num);
  };

  const saveNumber = () => {
    setNumbers(prevNumbers => [...prevNumbers, parseInt(currentNumber, 10)]);
    setCurrentNumber(0);
  };

  const resetCalculator = () => {
    setNumbers([]);
    setCurrentNumber(0);
  };

  const totalSum = numbers.reduce((acc, num) => acc + num, 0);
  

  return (
    <CalculatorContext.Provider value={{ numbers, currentNumber, addNumber, saveNumber, resetCalculator, totalSum }}>
      {children}
    </CalculatorContext.Provider>
  );
};