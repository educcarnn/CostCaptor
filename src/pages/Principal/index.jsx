import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import NoItems from "../../components/NoItems";
import HeaderCard from "../../components/Header";
import FormValues from "../../components/Form";
import "./style.css";
import PieChart from "../../components/PieChart";
import { useEffect, useState } from "react";

export default function Principal({ setHome }) {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setfilterTransactions] = useState([]);
  const [sumTotal, setSumTotal] = useState([]);
  const [pieChartData, setPieChartData] = useState({});

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

  const updatePieChartData = (transactions) => {
    const data = transactions.reduce((acc, transaction) => {
      if (acc[transaction.type]) {
        acc[transaction.type] += Number(transaction.value);
      } else {
        acc[transaction.type] = Number(transaction.value);
      }
      return acc;
    }, {});

    setPieChartData(data);
  };

  useEffect(() => {
    setSumTotal(calculateSumTotal(listTransactions));
    updatePieChartData(listTransactions);
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
            <>
              <TotalMoney
                listTransactions={listTransactions}
                SumTotal={sumTotal}
              ></TotalMoney>
              <div className="pie-chart-container">
                <PieChart data={pieChartData}></PieChart>
              </div>
            </>
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
