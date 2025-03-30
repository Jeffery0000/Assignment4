import { useState } from 'react'
import './HeronsFormula.css'

function HeronsFormula() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [area, setArea] = useState('');

    const heronCalculate = (a, b, c) => {
        return (1 / 4) * Math.sqrt((4 * a * a * b * b) - (Math.pow(((a * a) + (b * b) - (c * c)), 2)));
    }

    const handleHeron = (event) => {
        event.preventDefault();
        const sideA = parseFloat(a);
        const sideB = parseFloat(b);
        const sideC = parseFloat(c);
        const result = heronCalculate(sideA, sideB, sideC);
        setArea(result.toFixed(2));
    }

    return (
        <div className="herons-formula">
            <h1>Heron's Formula</h1>
            <form>
                <label htmlFor="heron-a">Side a:</label>
                <input type="number" name="heron-a" value={a} onChange={(e) => setA(e.target.value)} />
                <label htmlFor="heron-b">Side b:</label>
                <input type="number" name="heron-b" value={b} onChange={(e) => setB(e.target.value)} />
                <label htmlFor="heron-c">Side c:</label>
                <input type="number" name="heron-c" value={c} onChange={(e) => setC(e.target.value)} />
                <label htmlFor="heron-result">Area (result):</label>
                <input type="text" name="heron-result" readOnly value={area} />
                <button onClick={handleHeron}>Calculate</button>
            </form>
        </div>
    );
}

export default HeronsFormula