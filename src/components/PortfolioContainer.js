import React from "react";
import Stock from "./Stock";

function PortfolioContainer(props) {
  
  const portfolioDisplay = props.portfolio.map((stock) => {
    return <Stock key={stock.ticker} stock={stock} name={stock.name} price={stock.price} handleSale={props.handleSale} purchased={true}/>
  });
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioDisplay}
    </div>
  );
}

export default PortfolioContainer;
