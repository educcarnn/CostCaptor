import ButtonTrash from "../../imgs/trash.png";
import "./style.css"

function List({ listTransactions, remove }) {

  function Item() {
    return (
      <ul className="Ul-Father">
        {listTransactions.map((name, index) => (
          <li key={index} className="List">
            {name.type === "Entrada" ? (
              <div className="listGreen">
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
                      className="buttonTrash"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div className="listGray">
                <div className="Description-Wrapper">
                  <span className="Description">{name.description}</span>
                  <span className="Type">{name.type}</span>
                </div>
                <div>
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
                      className="buttonTrash"
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