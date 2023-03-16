import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  

  const prevent = (e) => {
    e.preventDefault();
  };

  const Dates = () => {
    const items = {
      description,
      type,
      value,
    };

    if (type !== "") {
      setListTransactions([...listTransactions, items]);
    }
  };

  return (
    <div className="Form">
      <form onSubmit={prevent} className="Form-Items">
        <div className="Form-Descrition">
          <span className="Form-Label">Descrição</span>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
            className="Input-Descrition"
          />
          <span className="Form-HelpText">
            Ex: Compra de roupas
          </span>
        </div>
        <div className="Form-Value">
          <span className="Form-Label">Valor</span>
          <input
            type="number"
            placeholder="1              R$"
            onChange={(event) => setValue(event.target.value)}
            className="Input-Value"
          />
        </div>
        <div className="Form-Select">
          <span className="Form-Label">Tipo de valor</span>
          <select
            onChange={(event) => setType(event.target.value)}
            className="Select-Type"
          >
            <option value="" selected disabled hidden>
              Escolha o valor
            </option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
        <div className="Div-Button">
          <button type="submit" className="button" onClick={Dates}>
            Inserir valor
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
