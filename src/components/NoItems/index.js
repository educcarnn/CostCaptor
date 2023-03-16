import SemLancamento from "../../imgs/Rectangle/SemLancamento.svg";
import "./style.css";

export default function NoItems() {
  return (
    <div className="No-Items-Father">
      <img src={SemLancamento} alt="Texto sem Sem Lancamento"></img>
    </div>
  );
}

