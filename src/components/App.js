import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
const API_URL = "http://localhost:3001/stocks"

function App() {
  const [stockList, setStockList] = useState([])
  const [sortType, setSortType] = useState("none")
  const [filter, setfilter] = useState("")
  let filteredList=[]

  useEffect(() => {
    fetch(API_URL)
    .then(resp => resp.json())
    .then(json => {
      setStockList(json)
    })
  }, [])
  let stockData = sortListCriteria(stockList)
  
  function sortButton(event) {
    setSortType(event.target.value)
  }

  function sortListCriteria(list){
    let sortedList=[]
    if(sortType === "Alphabetically"){
      sortedList = list.sort((a,b) => {
        if(a.name<b.name){
          return -1
        }if(a.name>b.name){
          return 1
        }
        return 0
      })
    }else if(sortType === "Price"){
      sortedList = list.sort((a,b) => {
        if(a.price<b.price){
          return -1
        }if(a.price>b.price){
          return 1
        }
        return 0
      })
    }else{sortedList=list}
    return sortedList;
  }
  // let sortedList=[]
  // let activeList=stockList
  // if(filteredList.length > 0){
  //   setFilteredList(sortListCriteria(filteredList))
  // }else{
  //   setStockList(sortListCriteria(stockList))
  // }
  // if(sortType === "Alphabetically"){
  //   sortedList = activeList.sort((a,b) => {
  //     if(a.name<b.name){
  //       return -1
  //     }if(a.name>b.name){
  //       return 1
  //     }
  //     return 0
  //   })
  // }else if(sortType === "Price"){
  //   sortedList = activeList.sort((a,b) => {
  //     if(a.price<b.price){
  //       return -1
  //     }if(a.price>b.price){
  //       return 1
  //     }
  //     return 0
  //   })
  // }
  // useEffect(() => sortingFilterLi ? setFilteredList(sortedList) : setStockList(sortedList), [sortType])


  function filterHandle(event) {
    setfilter(event.target.value)
  }

  if(filter !== ""){
    filteredList = stockList.filter((stock) => stock.type === filter)
    filteredList = sortListCriteria(filteredList)
  }


  return (
    <div>
      <Header />
      <MainContainer sortButton={sortButton} stockList={filteredList.length === 0 ? stockData : filteredList} filterHandle={filterHandle}/>
    </div>
  );
}

export default App;
