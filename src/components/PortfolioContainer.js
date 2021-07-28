import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ boughtStockList, sellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStockList.map(stock => < Stock key={stock.id} stock={stock} isBought={true} sellStock={sellStock}/>)}

    </div>
  );
}

export default PortfolioContainer;
