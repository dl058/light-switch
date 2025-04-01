import { useState } from "react";
import "./Switch2.css";

const Switch2 = () => {
  const [lamp, setLamp] = useState(false);
  console.log(lamp);

  return (
    <div className="Switch2">
      <p> Lamp is {lamp === true ? "on!" : "off."} </p>
      {lamp === false}
      {lamp === true && <div className="lamp">LAMP</div>}
      <div className="buttonBox">
        <button
          className="lampBtnOn"
          onClick={() => {
            setLamp(true);
          }}
        >
          On
        </button>
        <button
          className="lampBtnOff"
          onClick={() => {
            setLamp(false);
          }}
        >
          Off
        </button>
      </div>
    </div>
  );
};

export default Switch2;
