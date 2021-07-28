import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, buyStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map((stock) => < Stock key={stock.id} stock={stock} isBought={false} buyStock={buyStock}/>)}
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
