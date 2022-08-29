import "./style.css";
import Resumofinanceiro from "../../imgs/Filters/Resumofinanceiro.svg"
import ButtonDisable from "../../imgs/Filters/ButtonDisable.svg"
import ButtonDisable1 from "../../imgs/Filters/ButtonDisable1.svg"
import ButtonDisable2 from '../../imgs/Filters/ButtonDisable2.svg'


function Filters({listTransactions, setfilterTransactions}) {
  
  function Todos(){
    const listTransactionsTodos = listTransactions.filter((fruits) => {
      return fruits.type 
  
    })
    setfilterTransactions(listTransactionsTodos)

  }


  function Entrada(){
    const listTransactionsEntrada = listTransactions.filter((fruits) => {
 
      return fruits.type === 'Entrada'
    })

    setfilterTransactions(listTransactionsEntrada) 
  }

  function Saida(){
    const listTransactionsSaida =  listTransactions.filter((fruits) => {
      return fruits.type === 'Saída'
  })
  
    setfilterTransactions(listTransactionsSaida)
  }


  return (
    <>
      <div className="Img-Header">
          <img src={Resumofinanceiro} alt="Texto resumo financeiro"></img>
          <ul className="Ul-Father-Button">
              <li className="Li-Style-Button">
              <button className="Border-Style" onClick={Todos}>
                  <img src={ButtonDisable} alt="Botão Todos" /></button>
              </li>
              <li className="Li-Style-Button">
              <button className="Border-Style" onClick={Entrada}>
                  <img src={ButtonDisable1} alt="Botão Entrada"  /></button>
              </li>
              <li className="Li-Style-Button">
              <button className="Border-Style" onClick={Saida} >
                  <img src={ButtonDisable2} alt="Botão Despesa" /></button>
              </li>
          </ul>
      </div>
      
    </>
  );

  
}

export {Filters}

