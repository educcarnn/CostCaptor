import "./style.css";

function TotalMoney({ listTransactions}) {

  const SumTotal = listTransactions.length > 0
    ? listTransactions
        .filter(({ type }) => type === "Entrada" || type === "Saída")
        .reduce((acumulador, item) => {
            if (item.type === "Entrada") {
                return acumulador + Number(item.value);
            } else {
                return acumulador - Number(item.value);
            }
        }, 0)
    : 0;

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
