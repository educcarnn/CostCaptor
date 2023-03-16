import ButtonTrash from "../../imgs/ButtonTrash.svg";

import "./style.css"

function List({ listTransactions, remove }) {

  function Item() {
    return (
      <ul className="Ul-Father">
        {listTransactions.map((name, index) => (
          <li key={index} className="List">
            {name.type === "Entrada" ? (
              <div className="List-Border-Green">
                <div className="Description-Wrapper">
                  <span className="Description">{name.description}</span>
                  <span className="Type">{name.type}</span>
                </div>
                <div className="Value-Wrapper">
                  <span className="Value">R$ {name.value}</span>
                </div>
                <div className="Button-Wrapper">
                  <button
                    className="Button"
                    onClick={() => remove(index)}
                  >
                    <img
                      src={ButtonTrash}
                      alt="Botão de Remover Transação"
                      className="Button-Image"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div className="List-Border-Gray">
                <div className="Description-Wrapper">
                  <span className="Description">{name.description}</span>
                  <span className="Type">{name.type}</span>
                </div>
                <div className="Value-Wrapper">
                  <span className="Value">R$ -{name.value}</span>
                </div>
                <div className="Button-Wrapper">
                  <button
                    className="Button"
                    onClick={() => remove(index)}
                  >
                    <img
                      src={ButtonTrash}
                      alt="Botão de Remover Transação"
                      className="Button-Image"
                    />
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return listTransactions.length > 0 && <Item />;
}

export default List;