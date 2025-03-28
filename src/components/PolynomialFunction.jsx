import { useState } from 'react'
import './PolynomialFunction.css'

function PolynomialFunction() {
    return (
        <div className="polynomial-function">
            <h1>Polynomial Function</h1>
            <form>
                <label for="coefficients">Coefficients:</label>
                <input type="text" name="coefficients" required />
                <label for="exponents">Exponents:</label>
                <input type="text" name="exponents" required />
                <label for="x-value">x Value:</label>
                <input type="number" name="x-value" required step=".01" />
                <label for="polynomial-func">Polynomial Function (result):</label>
                <input type="text" name="polynomial-func" readonly />
                <label for="polynomial-evaluation">Polynomial Evaluation (result):</label>
                <input type="text" name="polynomial-evaluation" readonly />
                <input type="submit" value="Calculate" />
            </form>
        </div>
    )
}

export default PolynomialFunction