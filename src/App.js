import "./App.css";
import HeaderCard from "./components/Header";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import NoItems from "./components/NoItems";
import { Filters } from "./components/Filters";
import ShowFilters from "./components/ShowFilters";
import PageFirst from "./pages/home";


function App() {
  
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setfilterTransactions] = useState([]);
  const [sumTotal, setSumTotal] = useState([])
  const [home, setHome] = useState(true);
  
  
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
    const newTransactions = listTransactions.filter((_, i) => i !== index);
    setListTransactions(newTransactions);
  
    const newFilterTransactions = filterTransactions.filter((_, i) => i !== index);
    setfilterTransactions(newFilterTransactions);
    
    setSumTotal(calculateSumTotal(newTransactions));
  }

  function removeFilter(value) {
    const newItemsFilter = filterTransactions.filter(
      (item, index) => index !== value
    );

    setfilterTransactions(newItemsFilter);
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
    <div>
      {home ? (
        <PageFirst setHome={setHome} home={home}></PageFirst>
      ) : (
        <div>
          <div>
            <HeaderCard setHome={setHome}></HeaderCard>
            <Filters
              listTransactions={listTransactions}
              SumTotal={sumTotal}
              setListTransactions={setListTransactions}
              filterTransactions={filterTransactions}
              setfilterTransactions={setfilterTransactions}
            ></Filters>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            ></Form>
            <></>
            {listTransactions.length > 0 ? (
              <TotalMoney listTransactions={listTransactions} SumTotal={SumTotal}></TotalMoney>
            ) : (
              <>
                <NoItems></NoItems>
              </>
            )}
            <>
              {filterTransactions.length > 0 ? (
                <ShowFilters
                  filterTransactions={filterTransactions}
                  removeFilter={removeFilter}
                />
              ) : (
                <>
                  <List
                    listTransactions={listTransactions}
                    remove={remove}
                  ></List>
                </>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
