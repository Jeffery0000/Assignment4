import { useState } from 'react'
import './NewtonsMethod.css'

function NewtonsMethod() {
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');

    const newtonsMethod = (guess) => {
        function f(x) {
            return (6 * Math.pow(x, 4)) - (13 * Math.pow(x, 3)) - (18 * Math.pow(x, 2)) + (7 * x) + 6;
        }

        function fPrime(x) {
            return (24 * Math.pow(x, 3)) - (39 * Math.pow(x, 2)) - (36 * x) + 7;
        }

        let x1 = guess;
        let i = 0;

        while (Math.abs(f(x1)) > 0.0001 && i < 1000) {
            x1 = x1 - (f(x1) / fPrime(x1));
            i++;
        }
        return Math.round(x1 * 100) / 100;
    }

    const handleNewtons = (event) => {
        event.preventDefault();
        const guessValue = parseFloat(guess);
        const resultValue = newtonsMethod(guessValue);
        setResult(resultValue);
    }

    return (
        <div className="newtons-method">
            <h1>Newton's Method</h1>
            <form>
                <label htmlFor="root-guess">Root Guess:</label>
                <input type="number" name="root-guess" value={guess} onChange={(e) => setGuess(e.target.value)} />
                <label htmlFor="root-approx">Root Approximation (Result):</label>
                <input type="text" name="root-approx" readOnly value={result} />
                <button onClick={handleNewtons}>Calculate</button>
            </form>
        </div>
    );
}

export default NewtonsMethod