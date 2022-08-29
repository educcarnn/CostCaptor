import "./style.css";
import NuKenzie from "../../imgs/NuKenzie.svg";
import Home from "../../imgs/Home.svg";

function HeaderCard({setHome}) {
  return (
    <>
      <>
        <img
          src={NuKenzie}
          alt="Símbolo NuKenzie"
          className="Img-NuKenzie"
        ></img>
      </>
      <>
        <button 
        onClick={() => setHome(true)}
        className="Button-None"
        >
          <img src={Home} alt="Home" className="Img-Home"></img>
        </button>
      </>
      <div className="HeaderCard"></div>
    </>
  );
}
export default HeaderCard;
