import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stockList, sortButton, filterHandle }) {
  const [boughtStockList, setBoughtStockList] = useState([])

  function buyStock(id) {
    let notBoughtYet = true
    const newBoughtStock = stockList.find((stock) => stock.id === id)

    console.log(newBoughtStock)

    boughtStockList.map((stock) => {
      if(stock.id === newBoughtStock.id){
        notBoughtYet = false
      }
    })
    notBoughtYet ? setBoughtStockList([...boughtStockList, newBoughtStock]) : setBoughtStockList([...boughtStockList])
  }



  function sellStock(id) {
    const newBoughtStockList = boughtStockList.filter(stock => stock.id !== id)
    setBoughtStockList(newBoughtStockList)
  }


  return (
    <div>
      <SearchBar sortButton={sortButton} filterHandle={filterHandle}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStockList={boughtStockList} sellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
