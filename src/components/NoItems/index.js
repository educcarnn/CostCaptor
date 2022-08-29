import Rectangle from "../../imgs/Rectangle/Rectangle.svg";
import Rectangle61 from "../../imgs/Rectangle/Rectangle61.svg";
import Rectangle60 from "../../imgs/Rectangle/Rectangle60.svg";
import SemLancamento from "../../imgs/Rectangle/SemLancamento.svg"
import "./style.css";

function NoItems() {
  return (
    <div className="No-Items-Father">
      
      <div className="No-Items">
      <img src={SemLancamento} alt="Texto sem Sem Lancamento"></img>
        <img src={Rectangle} Alt="Retângulo Pai"></img>
        <img src={Rectangle61} className="Mini-Bar" Alt="Barra menor"></img>
        <img src={Rectangle60} className="Long-Bar" Alt="Barra maior"></img>
      </div>
      <div className="No-Items">
        <img src={Rectangle} Alt="Retângulo Pai" style={{marginTop: '13px'}}></img>
        <img src={Rectangle61} Alt="Barra menor" className="Mini-Bar"></img>
        <img src={Rectangle60} Alt="Barra maior" className="Long-Bar"></img>
      </div>
      <div className="No-Items">
        <img src={Rectangle} Alt="Retângulo Pai"></img>
        <img src={Rectangle61} Alt="Barra menor" className="Mini-Bar"></img>
        <img src={Rectangle60} Alt="Barra maior" className="Long-Bar"></img>
      </div>
    </div>
  );
}

export default NoItems;
