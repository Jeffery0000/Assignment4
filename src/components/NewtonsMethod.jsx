import { useState } from 'react'
import './NewtonsMethod.css'

function NewtonsMethod() {

    return (
        <div className="newtons-method">
            <h1>Newton's Method</h1>
            <form>
                <label for="root-guess">Root Guess:</label>
                <input type="number" name="root-guess" required step=".01" />
                <label for="root-approx">Root Approximation (Result):</label>
                <input type="text" name="root-approx" readonly />
                <input type="submit" value="Calculate" />
            </form>
        </div>
    )
}

export default NewtonsMethod