import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  function prevent(e) {
    e.preventDefault();
  }

  function Dates() {
    const items = {
      description,
      type,
      value,
    };

    if(type !== '') {
      setListTransactions([...listTransactions, items]);
    }
  }

  return (
    <div className="Form">
      <form onSubmit={prevent} className="Form-Items">
        <div className="Form-Descrition">
          <span style={{marginBottom: '0.2rem'}}>Descrição</span>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
            className="Input-Descrition"
          />
          <span
          style={{paddingTop: '0.5rem', fontSize: '12px', color: '#868E96'}}
          >Ex: Compra de roupas</span>
        </div>
        <div className="Form-Value">
          <span style={{ marginBottom: "1rem" }}>Valor</span>
          <input
            type="number"
            placeholder="1              R$"
            onChange={(event) => setValue(event.target.value)}
            style={{
              width: "8rem",
              height: "3rem",
              paddingLeft: "1rem",
              border: "none",
              backgroundColor: "#F8F9FA",
              borderRadius: "0.5rem",
            }}
          />
        </div>
        <div className="Form-Select">
          <span style={{ marginLeft: "-2rem" }}>Tipo de valor</span>
          <select 
          style={{width: '8rem',
            height: '3rem',
            paddingLeft: '1rem',
            marginLeft: '-2rem',
            border: 'none',
            marginTop: '1rem',
            backgroundColor: '#F8F9FA'
          }}
          onChange={(event) => setType(event.target.value)
          }>
            <option value="" selected disabled hidden>Escolha o valor</option>
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
