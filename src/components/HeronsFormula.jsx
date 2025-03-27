import { useState } from 'react'
import './HeronsFormula.css'

function HeronsFormula() {



    return (
        <div className="herons-formula">
            <h1>Heron's Formula</h1>
            <form id="heron-form">
                <label for="heron-a">Side a:</label>
                <input type="number" name="heron-a" required min="0" step=".01" />
                <label for="heron-b">Side b:</label>
                <input type="number" name="heron-b" required min="0" step=".01" />
                <label for="heron-c">Side c:</label>
                <input type="number" name="heron-c" required min="0" step=".01" />
                <label for="heron-result">Area (result):</label>
                <input type="text" name="heron-result" readonly />
                <input type="submit" value="Calculate" />
            </form>
        </div>
    )
}

export default HeronsFormula