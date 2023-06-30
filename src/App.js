import "./styles/App.css";
import { useState } from "react";
import Principal from "./pages/Principal";
import PageFirst from "./pages/home"

function App() {
  const [home, setHome] = useState(true);

  return (
    <div>
      {home ? (
        <PageFirst setHome={setHome} home={home}></PageFirst>
      ) : (
        <Principal setHome={setHome}></Principal>
      )}
    </div>
  );
}

export default App;
