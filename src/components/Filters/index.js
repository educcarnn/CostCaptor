import "./style.css";
import Resumofinanceiro from "../../imgs/Filters/Resumofinanceiro.svg";
import ButtonDisable from "../../imgs/Filters/ButtonDisable.svg";
import ButtonDisable1 from "../../imgs/Filters/ButtonDisable1.svg";
import ButtonDisable2 from "../../imgs/Filters/ButtonDisable2.svg";
import { useState } from "react";

function Filters({ listTransactions, setfilterTransactions }) {
  const [totalEntrada, setTotalEntrada] = useState(0);
  const [totalSaida, setTotalSaida] = useState(0);

  const Todos = () => {
    setfilterTransactions(listTransactions);
  }

  const Entrada = () => {
    const listTransactionsEntrada = listTransactions.filter(({ type }) => type === 'Entrada');
    const sumTotalEntrada = listTransactionsEntrada.reduce((total, transaction) => total + Number(transaction.value), 0);
    setTotalEntrada(sumTotalEntrada);
    setfilterTransactions(listTransactionsEntrada);
  }

  const Saida = () => {
    const listTransactionsSaida = listTransactions.filter(({ type }) => type === 'Saída');
    const sumTotalSaida = listTransactionsSaida.reduce((total, transaction) => total + Number(transaction.value), 0);
    setTotalSaida(sumTotalSaida);
    setfilterTransactions(listTransactionsSaida);
  }



  return (
    <>
      <div className="Img-Header">
        <img src={Resumofinanceiro} alt="Texto resumo financeiro"></img>
        <ul className="Ul-Father-Button">
          <li className="Li-Style-Button">
            <button className="Border-Style" onClick={Todos}>
              <img src={ButtonDisable} alt="Botão Todos" />
            </button>
          </li>
          <li className="Li-Style-Button">
            <button className="Border-Style" onClick={Entrada}>
              <img src={ButtonDisable1} alt="Botão Entrada" />
            </button>
          </li>
          <li className="Li-Style-Button">
            <button className="Border-Style" onClick={Saida}>
              <img src={ButtonDisable2} alt="Botão Despesa" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export { Filters };
