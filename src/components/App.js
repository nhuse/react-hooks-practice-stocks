import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
const API_URL = "http://localhost:3001/stocks"

function App() {
  const [stockList, setStockList] = useState([])
  const [sortType, setSortType] = useState("none")
  const [checkedRadio, setCheckedRadio] = useState(null)

  let permanentList=[]
  useEffect(() => {
    fetch(API_URL)
    .then(resp => resp.json())
    .then(json => {
      setStockList(json)
      permanentList=[...json]
    })
  }, [])

  function sortButton(event) {
    setSortType(event.target.value)
  }

  let sortedList=[]
  if(sortType === "Alphabetically"){
    sortedList = stockList.sort((a,b) => {
      if(a.name<b.name){
        return -1
      }if(a.name>b.name){
        return 1
      }
      return 0
    })
  }else if(sortType === "Price"){
    sortedList = stockList.sort((a,b) => {
      if(a.price<b.price){
        return -1
      }if(a.price>b.price){
        return 1
      }
      return 0
    })
  }
  useEffect(() => setStockList(sortedList), [sortType])

  return (
    <div>
      <Header />
      <MainContainer sortButton={sortButton} stockList={stockList} />
    </div>
  );
}

export default App;
