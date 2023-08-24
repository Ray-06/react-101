import React, { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Step() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  console.log(messages[step], step);

  const pressBtn = (x) => {
    if (x == "+") {
      if (step < messages.length - 1) {
        setStep((prevState) => prevState + 1);
      }
    } else {
      if (step > 0) {
        setStep((prevState) => prevState - 1);
      }
    }
  };

  return (
    <React.Fragment>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">{`Step ${step + 1}: ${messages[step]}`}</p>
          <div className="buttons">
            <button
              onClick={() => pressBtn("-")}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>

            <button
              onClick={() => pressBtn("+")}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Step;
