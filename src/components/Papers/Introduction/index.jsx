import "./style.css";
import { useHistory } from "react-router-dom";

import mulhercelular from "../../../assets/mulhercelular.png";

export default function Introduction() {
  let history = useHistory();
  const handleContents = () => {
    history.push("/costcaptor");
  };

  return (
    <div className="container">
        <div className="name">Cost Captor</div>
        <div className="content-text">
          <div>
            <p className="text">
              Gerenciar suas finanças de forma eficiente é essencial para
              alcançar a liberdade financeira e ter uma vida tranquila e
              equilibrada.
            </p>
            <div>
              <p className="second-text">
                Com o avanço da tecnologia e as ferramentas disponíveis hoje em
                dia, tornou-se mais fácil acompanhar e controlar seus gastos,
                fazer um planejamento financeiro e tomar decisões inteligentes
                sobre suas finanças.
              </p>
              <button onClick={handleContents}>Comece</button>
            </div>
          </div>
          <img
            src={mulhercelular}
            alt={mulhercelular}
            className="imagem-principal"
          />
        </div>


    </div>
  );
}
