import React from "react";
import Home from "./day3/Home";
import UserCard from "./day3/UserCard";
import NumberGenerator from "./day6/NumberGenerator";
import WorldPopulation from "./day6/WorldPopulation";
import MouseEvent from "./day11/MouseEvent";
import ToDo from "./component/ToDo";
import Login from "./component/Login";
import Table from "./component/Table";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Regions from "./component/Regions";
function App() {

  // const [details,setDetails] = useState([]);

  const myStyle = {
    backgroundColor:'#bfb4a8',
    height:'100vh'
  }
  // useEffect(()=>{
  //   const fetchData =async()=>{
     
  //     const config = {
  //       headers: {
  //         Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBwYXBlciIsImV4cCI6MTY4NTU0MDk1OX0.5vZFZnLhSBkjKwy36sixBPHlCawIhMb-oLkOU8AIvpBXMkQ2LyxG5Fw8L7J6pspV7gCdAKNwpg1xil_no1zgzg',
  //       },
  //     };
  
  //     const response = await axios.post('http://localhost:8080/api/v1/chemical/itemStock/getStockList/v2', {}, config);
  //     debugger;
  //     const dataList = response.data.dataList;
  //     setDetails([...details,...(dataList.length>10?dataList.slice(0,10):dataList)]);
  //     console.log(dataList);
  //   }
  //   fetchData()
  // },[]);
  // const tableName = 'Items';
  // const head = ['Name','Hsn code','Uom','price','description']
  return (
    <div style={myStyle}>
      {/* <Home />
      <UserCard />
      <NumberGenerator/> */}
      {/* <WorldPopulation/> */}
      {/* <MouseEvent/> */}
      {/* <ToDo/> */}
      {/* <Login/> */}
       {/* <Table tableName={tableName} head={head} details={details}/>
       */}
       <Regions/>
    </div>
  );
}

export default App;
