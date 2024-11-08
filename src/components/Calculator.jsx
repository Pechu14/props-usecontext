import React, { useContext }  from "react";
import { Link } from 'react-router-dom';
import { CalculatorContext } from "./CalculatorProvider";


const Calculator = () => {
    const { currentNumber, addNumber, saveNumber } = useContext(CalculatorContext);

    return (
        <div className="calculator">
          <h2>Calculator</h2>
          <div className="container">
            <p>Número marcado: {currentNumber}</p>
            <div>
              <button onClick={() => addNumber(0)}>0</button>
              <button onClick={() => addNumber(1)}>1</button>
              <button onClick={() => addNumber(2)}>2</button>
              <button onClick={() => addNumber(3)}>3</button>
              <button onClick={() => addNumber(4)}>4</button>
              <button onClick={() => addNumber(5)}>5</button>
              <button onClick={() => addNumber(6)}>6</button>
              <button onClick={() => addNumber(7)}>7</button>
              <button onClick={() => addNumber(8)}>8</button>
              <button onClick={() => addNumber(9)}>9</button>
            </div>
            <p><button onClick={saveNumber}>SUMAR</button></p>
          </div>
          <p><Link to="/result">Ir a Result</Link></p>
        </div>
      );
    };
    
    export default Calculator;