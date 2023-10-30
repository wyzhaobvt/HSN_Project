import logo from './logo.svg';
import './App.css';
import SearchBar from './component/SearchBar';
import { useEffect, useState } from 'react';
// import data from '../public/data.json'
function App() {
  let [data,setData]=useState()
  useEffect(()=>{
    let fetchData = async()=>{
      let resp = await fetch('./data.json')
      let data = await resp.json()
      setData(data)
      console.log(data)
    }
    fetchData()
  },[])
  return (
    <div>
     
     {data && <SearchBar data={data}/>}
    </div>
  );
}

export default App;
