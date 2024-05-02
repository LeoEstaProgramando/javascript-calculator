import { useState } from "react";
import "./App.css";

function App() {
    const [value, setValue] = useState("0");
    const [displayValue, setDisplayValue] = useState("0");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState(0);

    const handleNumberClick = (num) => {
        if (displayValue === "0") {
            setDisplayValue(num);
            setValue(num);
            setOperator("");
        } else {
            setDisplayValue(displayValue + num);
            setValue(value + num);
            setOperator("");
        }
    };

    const handleOperatorClick = (op) => {
        if (value === "0") {
            setValue(displayValue + op);
            setDisplayValue(op);
            setOperator(op);
        } else if (operator !== "") {
            setValue(value.slice(0, -1) + op);
            setDisplayValue(op);
            setOperator(op);
        } else if (result !== "0") {
            setValue(value + op);
            setDisplayValue(op);
            setOperator(op);
        } else {
            setValue(value + op);
            setDisplayValue(op);
            setOperator(op);
        }
    };

    const handleDecimalClick = () => {
        if (!displayValue.includes(".")) {
            setDisplayValue(displayValue + ".");
            setValue(value + ".");
        }
    };

    const handleClearClick = () => {
        setDisplayValue("0");
        setValue("0");
        setOperator("");
        setResult("0");
    };

    const handleEqualClick = () => {
        setResult(eval(value));
        setValue(eval(value));
        setDisplayValue(eval(value));
    };

    return (
        <div className="container">
            <div>
                <p id="value">{value}</p>
                <p id="display">{displayValue}</p>
            </div>
            <button className="btn" id="clear" onClick={handleClearClick}>
                AC
            </button>
            <button
                className="btn operation"
                id="divide"
                value="/"
                onClick={() => handleOperatorClick("/")}
            >
                /
            </button>
            <button
                className="btn operation"
                id="multiply"
                value="*"
                onClick={() => handleOperatorClick("*")}
            >
                x
            </button>
            <button
                className="btn number"
                id="seven"
                value="7"
                onClick={() => handleNumberClick("7")}
            >
                7
            </button>
            <button
                className="btn number"
                id="eight"
                value="8"
                onClick={() => handleNumberClick("8")}
            >
                8
            </button>
            <button
                className="btn number"
                id="nine"
                value="9"
                onClick={() => handleNumberClick("9")}
            >
                9
            </button>
            <button
                className="btn operation"
                id="subtract"
                value="-"
                onClick={() => handleOperatorClick("-")}
            >
                -
            </button>
            <button
                className="btn number"
                id="four"
                value="4"
                onClick={() => handleNumberClick("4")}
            >
                4
            </button>
            <button
                className="btn number"
                id="five"
                value="5"
                onClick={() => handleNumberClick("5")}
            >
                5
            </button>
            <button
                className="btn number"
                id="six"
                value="6"
                onClick={() => handleNumberClick("6")}
            >
                6
            </button>
            <button
                className="btn operation"
                id="add"
                value="+"
                onClick={() => handleOperatorClick("+")}
            >
                +
            </button>
            <button
                className="btn number"
                id="one"
                value="1"
                onClick={() => handleNumberClick("1")}
            >
                1
            </button>
            <button
                className="btn number"
                id="two"
                value="2"
                onClick={() => handleNumberClick("2")}
            >
                2
            </button>
            <button
                className="btn number"
                id="three"
                value="3"
                onClick={() => handleNumberClick("3")}
            >
                3
            </button>
            <button
                className="btn number"
                id="zero"
                value="0"
                onClick={() => handleNumberClick("0")}
            >
                0
            </button>
            <button
                className="btn number"
                id="decimal"
                value="."
                onClick={handleDecimalClick}
            >
                .
            </button>
            <button
                className="btn"
                id="equals"
                value="="
                onClick={handleEqualClick}
            >
                =
            </button>
        </div>
    );
}

export default App;
