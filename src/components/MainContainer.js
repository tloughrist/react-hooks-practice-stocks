import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockData, setStockData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState("None");
  const [sortValue, setSortValue] = useState("Alphabetically");
  const [portfolio, setPortfolio] = useState([]);

  function fetchStocks() {
    return(fetch("http://localhost:3001/stocks")
    .then((response) => response.json())
    .then((data) => setStockData(data))
    .then(() => setIsLoaded(true)));
  };

  useEffect(() => fetchStocks(), []);

  function handleSearch(searchString) {
    return setSearchValue(searchString);
  }

  function handleSort(sortValue) {
    return setSortValue(sortValue);
  }

  function handlePurchase(stock) {
    return setPortfolio([...portfolio, stock]);
  }

  function handleSale(stock) {
    return setPortfolio(portfolio.filter((portStock) => {
      return portStock !== stock;
    }))
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} handleSort={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={stockData} searchValue={searchValue} sortValue={sortValue} isLoaded={isLoaded} handlePurchase={handlePurchase}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleSale={handleSale}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;