import "./style.css";

export default function FinancialTips() {
  return (
    <div>
      <h2 className="tipsTitle">Dicas</h2>
      <div className="containerTips">
        <div className="tip">
          <h3>Faça um orçamento:</h3>
          <p>
            Antes de mais nada, é importante ter um orçamento mensal para saber
            exatamente quanto dinheiro você tem disponível e para onde está indo
            cada centavo.
          </p>
        </div>
        <div className="tip">
          <h3>Corte gastos desnecessários:</h3>
          <p>
            Identifique gastos que podem ser cortados ou reduzidos, como
            assinaturas de serviços que você não usa ou compras por impulso.
          </p>
        </div>
        <div className="tip">
          <h3>Esteja preparado para imprevistos:</h3>
          <p>
            Tenha sempre uma reserva de emergência para lidar com gastos
            inesperados, como uma emergência médica ou um conserto de carro.
          </p>
        </div>
        <div className="tip">
          <h3>Evite compras por impulso:</h3>
          <p>
            Pense bem antes de fazer uma compra e avalie se você realmente
            precisa daquele item ou se é apenas um desejo momentâneo.
          </p>
        </div>
        <div className="tip">
          <h3>Aprenda sobre investimentos:</h3>
          <p>
            Busque conhecimento sobre investimentos e diversifique suas
            aplicações para aumentar suas chances de obter bons retornos.
          </p>
        </div>
        <div className="legend">
          <p className="paragraghLegend">
            Lembre-se sempre de que cada pessoa tem uma situação financeira
            única, por isso é importante adaptar essas dicas de acordo com suas
            necessidades e objetivos pessoais.
          </p>
        </div>
      </div>
    </div>
  );
}
