import "./style.css";

function TotalMoney({SumTotal}) {


  function Sum() {
    return (
      <div>
        <div className="Reduce">
          <span className="First-Span">
            Valor total <span className="Second-Span">R${SumTotal}</span>
          </span>
          <span className="Msg-Text">ValXor se refere ao saldo</span>
        </div>
      </div>
    );
  }

  return <Sum></Sum>;
}
export default TotalMoney;
