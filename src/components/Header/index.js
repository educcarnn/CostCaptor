import "./style.css";

export default function HeaderCard({ setHome }) {
  return (
    <div className="headerCard">
      <div className="name">Cost Captor</div>
      <div>
        <button onClick={() => setHome(true)} className="buttonNone">
          Início
        </button>
      </div>
    </div>
  );
}
