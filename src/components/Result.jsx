import { useContext }  from "react";
import { Link } from 'react-router-dom';
import { CalculatorContext } from "./CalculatorProvider";

const Result = () => {
 const { numbers, totalSum, resetCalculator} = useContext(CalculatorContext);

    return(
        <div className="calculator">
            <h2>Result</h2>
            <p>Lista de Números: {numbers.join(', ')} </p>
            <p>Total suma: {totalSum}</p>
            <button onClick={resetCalculator}>Reset</button>
            <p><Link to="/">Volver a Calculator</Link></p>
        </div>
    )
}

export default Result;