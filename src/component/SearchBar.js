import { useState } from 'react'
import Select from 'react-select'
import SearchProductId from './SearchProductId'

const SearchBar = ({data}) => {
 let [orderIdArr,setOrderIdArr]=useState(data)
 let [submitSuccess,setSubmitSuccess]=useState(false)
 let [selectOrderId,setSelectOrderId]=useState('')
 let [selectedOrder,setSelectedOrder]=useState()
 let [optionShow,setOptionShow]=useState(false)

  let orderIds
  let changeHandler=(e)=>{
    let searchKey = e.target.value
    orderIds = data.filter((ele)=>ele.orderId.toString().includes(searchKey))
    setOrderIdArr(orderIds)
    setSelectOrderId(e.target.value)
  }
  let submitHandler = async (e)=>{
    e.preventDefault()
    let order = await data.filter((ele)=>ele.orderId==selectOrderId)
    if (order.length>0){
      setSubmitSuccess(true)
      setSelectedOrder(order)
      setOptionShow(false)
    }
    
  }
 
  let clickHandler=(e)=>{
    setSelectOrderId(e.target.innerText)
  }
  let focusHandler=()=>{
    setOptionShow(true)
    setSubmitSuccess(false)
  }

    return ( 
      <>
        <div className='w-50 m-3'>
        <h3>HSN Order Search</h3>
        <form className="d-flex" onSubmit={submitHandler}>
        <input className="form-control me-2" value={selectOrderId} onFocus={focusHandler} onChange={changeHandler} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
      <ul className="list-group w-75 mt-1">
      {
       optionShow && orderIdArr && orderIdArr.map((ele)=>
  
         (<li key={ele.orderId} onClick={clickHandler} className="list-group-item list-group-item-action">{ele.orderId}</li>) )
      }
      </ul>
      </div>
      {(submitSuccess)? 
      <SearchProductId selectedOrder={selectedOrder}/>:''}
      
      </>
  
     );
}
 
export default SearchBar;