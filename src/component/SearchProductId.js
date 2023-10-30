import { useState } from "react";
import SearchResult from "./SearchResult";
const SearchProductId = ({selectedOrder}) => {
    
    let [productOptionShow,setProductOptionShow]=useState(false)
    let focusHandler=()=>{
        setProductOptionShow(true)
    }
    let [selectProductId,setSelectProductId] = useState('')
    let clickHandler=(e)=>{
        setSelectProductId(e.target.innerText)
    }
    let [submitSuccess,setSubmitSuccess]=useState(false)
    let [selectProduct,setSelectProduct] = useState()
    let submitHandler=(e)=>{
        e.preventDefault()
        
        let product =selectedOrder[0].Products.filter((ele)=>ele.productId == selectProductId)
        if (product.length>0){
             setSubmitSuccess(true)
             setProductOptionShow(false)
             setSelectProduct(product)
        }
       
       
        
    }
    let [productIdArr,setProductIdArr]=useState(selectedOrder[0].Products)
    let changeHandler=(e)=>{
        let searchKey = e.target.value
        let productIds = selectedOrder[0].Products.filter((ele)=>ele.productId.toString().includes(searchKey))
        setProductIdArr(productIds)
        setSelectProductId(e.target.value)
    }
   
    return (
        <> 
        <div className="m-3 w-50">
        <h3>Product ID</h3>
        <form className="d-flex" onSubmit={submitHandler}>
        <input onFocus={focusHandler} value={selectProductId} onChange={changeHandler}
          className="form-control me-2" type="search" aria-describedby="helpId" placeholder=""/>
          <button className="btn btn-outline-secondary " type="submit" >Search</button>
      </form>
        <ul className="list-group w-75 mt-1">
         
        {
        //  productOptionShow && selectedOrder && selectedOrder[0].Products.map((ele)=>
        productOptionShow && productIdArr && productIdArr.map((ele)=>
           (<li key={ele.productId} onClick={clickHandler} className="list-group-item list-group-item-action">
            {ele.productId}</li>) )
        }
        </ul>
        </div>
        {submitSuccess?
         <SearchResult selectProduct={selectProduct}/>:''}
        </>
     );
}
 
export default SearchProductId;