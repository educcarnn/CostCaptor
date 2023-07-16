import "./style.css";

export default function InfoBlock() {
  return (
    <div className="container-block">
      <div className="row">
        <div className="info">
          <p className="paragraph">58% dos brasileiros</p>
          <p>não se dedicam às próprias finanças</p>
        </div>
        <div className="info">
          <p className="paragraph">78,3% em abril de 2023</p>
          <p>é a parcela de famílias brasileiras com dívidas</p>
        </div>
        <div className="info">
          <p className="paragraph">46% dos brasileiros</p>
          <p>não controlam seu orçamento</p>
        </div>
      </div>
    </div>
  );
}
