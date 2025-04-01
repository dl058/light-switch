import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";
import Header from "./components/Header";
import Switch2 from "./components/Switch2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Switch />
      <Switch2 />
    </>
  );
}

export default App;
