import "./style.css";
export default function PageFirst({ setHome }) {
  return (
    <div>
      <div className="container">
        <div className="name">Cost Captor</div>
        <div className="text">Financie seus lucros e saídas, através dessa aplicação de forma simples e intuitiva</div>
        <button onClick={() => setHome(false)}>Iniciar</button>
      </div>
    </div>
  );
}
