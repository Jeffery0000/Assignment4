import { useState } from 'react'
import './PolynomialFunction.css'

function PolynomialFunction() {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [x, setX] = useState('');
    const [result, setResult] = useState('');
    const [polynomial, setPolynomial] = useState('');

    const polynomialEvaluation = (coefficients, exponents, x) => {
        let answer = 0;
        for (let i = 0; i < coefficients.length; i++) {
            answer += coefficients[i] * Math.pow(x, exponents[i]);
        }
        return answer;
    }

    const polynomialFunction = (coefficients, exponents) => {
        let func = '';
        for (let i = 0; i < coefficients.length; i++) {
            if (coefficients[i] != 0) {
                if (func == '') {
                    if (exponents[i] == 0) {
                        func += coefficients[i];
                    } else {
                        func += coefficients[i] + 'x^' + exponents[i];
                    }
                } else if (coefficients[i] > 0) {
                    if (exponents[i] == 0) {
                        func += ' + ' + coefficients[i];
                    } else {
                        func += ' + ' + coefficients[i] + 'x^' + exponents[i];
                    }
                } else if (coefficients[i] < 0) {
                    if (exponents[i] == 0) {
                        func += ' - ' + Math.abs(coefficients[i]);
                    } else {
                        func += ' - ' + Math.abs(coefficients[i]) + 'x^' + exponents[i];
                    }
                }
            }
        }
        return func;
    }

    const handlePolynomial = (event) => {
        event.preventDefault();
        const coefficientsArray = coefficients.split(' ');
        const exponentsArray = exponents.split(' ');
        const xValue = parseFloat(x);
        const answer = polynomialEvaluation(coefficientsArray, exponentsArray, xValue);
        const func = polynomialFunction(coefficientsArray, exponentsArray);
        setPolynomial(func);
        setResult(answer);
    }

    return (
        <div className="polynomial-function">
            <h1>Polynomial Function</h1>
            <form>
                <label htmlFor="coefficients">Coefficients:</label>
                <input type="text" name="coefficients" value={coefficients} onChange={(e) => setCoefficients(e.target.value)} />
                <label htmlFor="exponents">Exponents:</label>
                <input type="text" name="exponents" value={exponents} onChange={(e) => setExponents(e.target.value)} />
                <label htmlFor="x-value">x Value:</label>
                <input type="number" name="x-value" value={x} onChange={(e) => setX(e.target.value)} />
                <label htmlFor="polynomial-func">Polynomial Function (result):</label>
                <input type="text" name="polynomial-func" readOnly value={polynomial} onChange={(e) => setPolynomial(e.target.value)} />
                <label htmlFor="polynomial-evaluation">Polynomial Evaluation (result):</label>
                <input type="text" name="polynomial-evaluation" readOnly value={result} onChange={(e) => setResult(e.target.value)} />
                <button onClick={handlePolynomial}>Calculate</button>
            </form>
        </div>
    );
}

export default PolynomialFunction