import React from "react";
import Stock from "./Stock";

let stockDisplay = [];

function StockContainer(props) {

  props.isLoaded ? createStocks() : stockDisplay = <h3>Stocks loading...</h3>;

  function createStocks() {
    const searchFiltered = searchFilter();
    const sortFiltered = sortFilter(searchFiltered);
    return stockDisplay = sortFiltered.map((stock) => {
      return <Stock key={stock.ticker} stock={stock} name={stock.name} price={stock.price} handlePurchase={props.handlePurchase} purchased={false}/>
    })
  }

  function searchFilter() {
    if (props.searchValue === "None") {
      return props.stockData;
    } else {
      return props.stockData.filter((stock) => {
        return stock.type === props.searchValue;
      });
    }
  };

  function sortFilter(array) {
    if (props.sortValue === "Alphabetically") {
      return array.sort((a, b) => {
        let fa = a.ticker.toLowerCase(),
            fb = b.ticker.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else if (props.sortValue === "Price") {
      return array.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      return array;
    }
  };

  return (
    <div>
      <h2>Stocks</h2>
      {stockDisplay}
    </div>
  );
}

export default StockContainer;
