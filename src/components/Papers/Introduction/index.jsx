import "./style.css";
import { useHistory } from "react-router-dom";
import HeaderIntroduction from "./HeaderIntroduction";
import mulhercelular from "../../../assets/mulhercelular.png";
import InfoBlock from "./InfoBlock";

export default function Introduction() {
  let history = useHistory();
  const handleContents = () => {
    history.push("/costcaptor");
  };

  return (
    <div className="container">
      <HeaderIntroduction />
      <div className="content-text">
        <div className="content-second">
          <img
            src={mulhercelular}
            alt={mulhercelular}
            className="imagem-principal"
          />
          <div className="block-one">
            <p className="text">
              Gerenciar suas finanças de forma eficiente é essencial para
              alcançar a liberdade financeira e ter uma vida tranquila e
              equilibrada.
            </p>
            <button onClick={handleContents}>Comece</button>
          </div>

          <p className="second-text">
            Com o avanço da tecnologia e as ferramentas disponíveis hoje em dia,
            tornou-se mais fácil acompanhar e controlar seus gastos, fazer um
            planejamento financeiro e tomar decisões inteligentes sobre suas
            finanças.
          </p>
        </div>
      </div>
      <InfoBlock />
    </div>
  );
}
