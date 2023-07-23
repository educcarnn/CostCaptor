import { useState } from "react";
import "./style.css";

export default function FormValues({ listTransactions, setListTransactions }) {
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
    <>
      <form onSubmit={prevent} className="formItems">
        <div className="descrition">
          <span>Descrição</span>
          <input
            type="text"
            placeholder="Digite aqui sua descrição (Ex: Compra de roupas)"
            onChange={(event) => setDescription(event.target.value)}
            className="inputDescrition"
          />
        </div>
        <div className="contentValues">
          <div className="formValue">
            <span>Valor</span>
            <input
              type="number"
              placeholder="1              R$"
              onChange={(event) => setValue(event.target.value)}
              className="Input-Value"
            />
          </div>
          <div className="formSelect">
            <span>Tipo de valor</span>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="Select-Type"
            >
              <option value="" disabled hidden>
                Escolha o valor
              </option>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
          <div>
            <button type="submit" className="button" onClick={Dates}>
              Inserir valor
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
