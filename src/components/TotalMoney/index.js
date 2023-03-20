
import "./style.css";

export default function TotalMoney({ SumTotal }) {
  return (
    <div>
      <div className="reduce">
        <span className="firstSpan">
          Valor total <span className="secondSpan">R${SumTotal}</span>
        </span>
        <span className="message">Valor se refere ao saldo</span>
      </div>
    </div>
  );
}
