import { useState } from 'react'
import './AmbiguousCase.css'

function AmbiguousCase() {


    return (
        <div className="ambiguous-case">
            <h1>Ambiguous Case</h1>
            <form>
                <label for="ambiguous-angle-a">Angle A:</label>
                <input type="number" name="ambiguous-angle-a" required step=".01" min="0" />
                <label for="ambiguous-side-a">Side a:</label>
                <input type="number" name="ambiguous-side-a" required step=".01" min="0" />
                <label for="ambiguous-side-b">Side b:</label>
                <input type="number" name="ambiguous-side-b" required step=".01" min="0" />
                <label for="ambiguous-result">Triangle Type (Result):</label>
                <input type="text" name="ambiguous-result" readonly />
                <input type="submit" value="Calculate" />
            </form>
        </div>
    )
}

export default AmbiguousCase