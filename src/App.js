import "./App.css";
import HeaderCard from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import NoItems from "./components/NoItems";
import { Filters } from "./components/Filters";
import ShowFilters from "./components/ShowFilters";
import PageFirst from "./pages/home";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setfilterTransactions] = useState([]);
  const [home, setHome] = useState(true);

  function remove(value) {
    const newItems = listTransactions.filter((item, index) => index !== value);

    setListTransactions(newItems);
  }

  function removeFilter(value) {
    const newItemsFilter = filterTransactions.filter((item, index) => index !== value);

    setfilterTransactions(newItemsFilter);
  }

  return (
    <div className="App">
        {home ? (
          <PageFirst setHome={setHome} home={home}></PageFirst>
        ) : (
          <div className="Container">
          <div>
            <HeaderCard setHome={setHome}></HeaderCard>
            <Filters
              listTransactions={listTransactions}
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
              <TotalMoney listTransactions={listTransactions}></TotalMoney>
            ) : (
              <>
                <NoItems></NoItems>
              </>
            )}
            <>
              {filterTransactions.length > 0 ? (
                <ShowFilters filterTransactions={filterTransactions} removeFilter={removeFilter} />
              ) : (
                <>
                  <List listTransactions={listTransactions} remove={remove}></List>
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
