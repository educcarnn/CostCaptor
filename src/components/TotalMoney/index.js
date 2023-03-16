import "./style.css";

export default function TotalMoney({ SumTotal }) {
  return (
    <div>
      <div className="Reduce">
        <span className="First-Span">
          Valor total <span className="Second-Span">R${SumTotal}</span>
        </span>
        <span className="Msg-Text">Valor se refere ao saldo</span>
      </div>
    </div>
  );
}
