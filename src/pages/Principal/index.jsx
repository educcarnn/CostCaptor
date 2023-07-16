import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import NoItems from "../../components/NoItems";
import HeaderCard from "../../components/Header";
import FormValues from "../../components/Form";
import "./style.css";
import { useEffect, useState } from "react";


export default function Principal({ setHome }) {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setfilterTransactions] = useState([]);
  const [sumTotal, setSumTotal] = useState([]);

  function calculateSumTotal(listTransactions) {
    return listTransactions
      .filter(({ type }) => type === "Entrada" || type === "Saída")
      .reduce((acumulador, item) => {
        if (item.type === "Entrada") {
          return acumulador + Number(item.value);
        } else {
          return acumulador - Number(item.value);
        }
      }, 0);
  }

  useEffect(() => {
    setSumTotal(calculateSumTotal(listTransactions));
  }, [listTransactions, filterTransactions]);

  function remove(index) {
    const newList = listTransactions.filter((item, i) => i !== index);

    setListTransactions(newList);

    const newSumTotal = newList.reduce((acumulador, item) => {
      if (item.type === "Entrada") {
        return acumulador + Number(item.value);
      } else {
        return acumulador - Number(item.value);
      }
    }, 0);
    setSumTotal(newSumTotal || 0);

    const newFilterTransactions = filterTransactions.filter(
      (item) => item !== index
    );
    setfilterTransactions(newFilterTransactions);
  }

  const SumTotal = listTransactions
    .filter(({ type }) => type === "Entrada" || type === "Saída")
    .reduce((acumulador, item) => {
      if (item.type === "Entrada") {
        return acumulador + Number(item.value);
      } else {
        return acumulador - Number(item.value);
      }
    }, 0);

  return (
    <>
      <div>
        <HeaderCard setHome={setHome}></HeaderCard>
      </div>
      <div className="containerElement">
        <div className="contentForm">
          <FormValues
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></FormValues>
          {listTransactions.length > 0 ? (
            <TotalMoney
              listTransactions={listTransactions}
              SumTotal={SumTotal}
            ></TotalMoney>
          ) : (
            <div>
              <NoItems />
            </div>
          )}
        </div>
        {filterTransactions.length > 0 ? (
          <div>
            <NoItems />
          </div>
        ) : (
          <>
            <List listTransactions={listTransactions} remove={remove}></List>
          </>
        )}
      </div>
    </>
  );
}
