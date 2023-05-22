import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

function Regions() {
    const [selectedValue,setSelectedValue] = useState('');
    const [regionList,setRegionList] = useState([]);
    const headers= {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBwYXBlciIsImV4cCI6MTY4NTYwNzY4MX0.rZgZWvj7gCxV6Qvx4AN1wOIUQJiEJdHgYOEADNthrDXSWsEeHxhjp-0Tl5CVQTTky2PlGxpN10Fc11i99Lwc-Q',
      };
    useEffect(()=>{
      const fetchData = async()=>{
        const response = await axios.get('http://camerich.neofruition.co.in/api/v1/region/getAllByPartner',{headers});
         console.log(response.data.dataList);
         const regionDataList = response.data.dataList;
         setRegionList([...regionList,...(regionDataList && regionDataList.length>0?regionDataList:[])]);
      }
      fetchData();
    },[]);

    const handleSelectedValue =(event)=>{
        setSelectedValue(event.target.value);
    }
    const divStyle = {
        justifyContent : 'center'
    }
  return (
    <div style={divStyle}>
      <label htmlFor='Name'>Name</label>
      <input id='Name' type='text' placeholder='Enter Name'></input>
      <label htmlFor='dropdown'>Parent Region</label>
      <select id = 'dropdown' value={selectedValue} onChange={handleSelectedValue}>
        {
            regionList && regionList.length > 0?regionList.map((value)=>(
                <option key={value.id} value={value.name}>{value.name}</option>
            )):<div>Loading ...</div>
        }
      </select>
    </div>
  )
}

export default Regions