import "./style.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HeaderCard({ setHome }) {
  let history = useHistory();
  const handleContents = () => {
    history.push("/");
  };
 
  return (
    <div className="headerCard">
      <div className="name">Cost Captor</div>
      <div>
        <button onClick={handleContents} className="buttonNone">
          Início
        </button>
      </div>
    </div>
  );
}
