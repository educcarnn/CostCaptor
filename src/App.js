import "./styles/App.css";
import { useState } from "react";
import { Routes } from "./routes";


function App() {
  const [home, setHome] = useState(true);

  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
