import ButtonTrash from '../../imgs/ButtonTrash.svg'

function ShowFilters({ filterTransactions, removeFilter}) {
  console.log(filterTransactions);
  return (
    <ul className="Ul-Father">
    {filterTransactions.map((name, index) => (
      <li key={index} className="List">
        {name.type === "Entrada" ? (
          <div className="List-Border-Green">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                marginLeft: "1rem",
                marginTop: "1rem",
              }}
            >
              <span style={{ fontWeight: "700", fontSize: "16px" }}>
                {name.description}
              </span>
              <span style={{ fontSize: "12px", color: "#5B6166" }}>
                {name.type}
              </span>
            </div>
            <div>
              <div
                style={{
                  position: "relative",
                  marginTop: "-2rem",
                  marginLeft: "22rem",
                  fontSize: "12px",
                  color: "#212529",
                }}
              >
                R$ {name.value}
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <button
                src={ButtonTrash}
                style={{
                  marginLeft: "28rem",
                  marginTop: "-3.4rem",
                  position: "absolute",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => removeFilter(index)}
              >
                <img src={ButtonTrash} alt="Botão Todos" />
              </button>
            </div>
          </div>
        ) : (
          <div className="List-Border-Gray">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                marginLeft: "1rem",
                marginTop: "1rem",
              }}
            >
              <span style={{ fontWeight: "700", fontSize: "16px" }}>
                {name.description}
              </span>
              <span style={{ fontSize: "12px", color: "#5B6166" }}>
                {name.type}
              </span>
            </div>
            <div>
              <div
                style={{
                  position: "relative",
                  marginTop: "-2rem",
                  marginLeft: "22rem",
                  fontSize: "12px",
                  color: "#212529",
                }}
              >
                R$ {name.value}
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <button
                src={ButtonTrash}
                style={{
                  marginLeft: "28rem",
                  marginTop: "-3.4rem",
                  position: "absolute",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
                onClick={() => removeFilter(index)}
              >
                <img src={ButtonTrash} alt="Botão Todos" />
              </button>
            </div>
          </div>
        )}
      </li>
    ))}
  </ul>
  )
}
export default ShowFilters;
