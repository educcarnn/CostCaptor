import "./style.css";
export default function PageFirst({ setHome }) {
  return (
    <div className="background">
      <div>
        <div className="Name">Cost Captor</div>
        <button onClick={() => setHome(false)}>Iniciar</button>
      </div>
    </div>
  );
}
