import { useState } from 'react'
import './AmbiguousCase.css'

function AmbiguousCase() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [angleA, setAngleA] = useState('');
    const [result, setResult] = useState('');

    const ambiguousCase = (a, b, angleA) => {
        let height = b * Math.sin(angleA * (Math.PI / 180));
        height = Math.round(height * 100) / 100;
        const sideA = Math.round(a * 100) / 100;
        const sideB = Math.round(b * 100) / 100;

        if (angleA <= 90) {
            if (sideA < height) {
                return "no triangle";
            } else if (sideA == height) {
                return "right triangle";
            } else if (sideA > sideB) {
                return "one triangle";
            } else if (height < sideA && sideA < sideB) {
                return "two triangles (ambiguous case)";
            }
        } else if (angleA < 180) {
            if (sideA <= sideB) {
                return "no triangle";
            } else if (sideA > sideB) {
                return "one triangle";
            }
        } else {
            return "no triangle";
        }
    }

    const handleAmbiguous = (event) => {
        event.preventDefault();
        const sideA = parseFloat(a);
        const sideB = parseFloat(b);
        const angle = parseFloat(angleA);
        const result = ambiguousCase(sideA, sideB, angle);
        setResult(result);
    }

    return (
        <div className="ambiguous-case">
            <h1>Ambiguous Case</h1>
            <form>
                <label htmlFor="ambiguous-angle-a">Angle A:</label>
                <input type="number" name="ambiguous-angle-a" value={angleA} onChange={(e) => setAngleA(e.target.value)} />
                <label htmlFor="ambiguous-side-a">Side a:</label>
                <input type="number" name="ambiguous-side-a" value={a} onChange={(e) => setA(e.target.value)} />
                <label htmlFor="ambiguous-side-b">Side b:</label>
                <input type="number" name="ambiguous-side-b" value={b} onChange={(e) => setB(e.target.value)} />
                <label htmlFor="ambiguous-result">Triangle Type (Result):</label>
                <input type="text" name="ambiguous-result" readOnly value={result} />
                <button onClick={handleAmbiguous}>Calculate</button>
            </form>
        </div>
    )
}

export default AmbiguousCase