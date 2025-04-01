import { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [lightSwitch, setLightSwitch] = useState("On");
  return (
    <div className="Switch">
      <p>Switch</p>
      <p className="theBulb">{lightSwitch}</p>
      <button
        className="onBtn"
        onClick={() => {
          setLightSwitch("On");
          //   console.log("On");
        }}
      >
        On
      </button>

      <button
        className="offBtn"
        onClick={() => {
          setLightSwitch("Off");
        }}
      >
        Off
      </button>
    </div>
  );
};

export default Switch;
