import React from "react";

function Stock({ stock:{ id, name, ticker, price }, buyStock, isBought, sellStock}) {
  return (
    <div>
      <div className="card" onClick={() => {
        (isBought) ? sellStock(id) : buyStock(id)
        }}>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
