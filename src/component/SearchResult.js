import { useState } from "react";

const SearchResult = ({selectProduct}) => {
    let [starters,setStarters]=useState(true)
   
    return ( 
        <div className="m-3">
            <div className="d-flex justify-content-between w-100 my-2">
            <button className="btn btn-primary" onClick={()=>setStarters(true)}>Starters</button>
            <button className="btn btn-primary" onClick={()=>setStarters(false)}>MainCourses</button>
            </div>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col" className="w-25">Item No</th>
                        <th scope="col" className="w-50">Item</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {(starters)?
                        selectProduct[0].starters.map((ele,index)=>
                        ( 
                        <tr key={index}>
                        <td scope="row" >{index+1}</td>
                        <td scope="row" >{ele}</td>
                        </tr>)
                        )
                        
                         :
                        selectProduct[0].mainCourses.map((ele,index)=>
                        ( 
                        <tr key={index}>
                        <td scope="row" >{index+1}</td>
                        <td scope="row" >{ele}</td>
                        </tr>)
                        )
                        }
                      
                   
                    
                   
                </tbody>
            </table>
        </div>
        
        </div>
     );
}
 
export default SearchResult;