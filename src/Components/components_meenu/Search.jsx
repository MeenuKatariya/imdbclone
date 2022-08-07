import React from 'react'
import "./Search.css"
export const  SearchBar=({prop})=> {
  
    const {Search}=prop;
  
  return (
    
<div >

{
  (Search==null)?<div></div>:<div  className='superPart'>
    {
     Search.map((el)=>(<div className="parentDiv">
    
      <div>
      <img src={el.Poster} alt="" />
      </div>
       <div>
       <p>{el.Title}</p>
      <p>{el.Year}</p>
      <p>{el.Type}</p> 
      <hr  style={{backgroundColor:"#1f1f1f", width:"100%" }} />
       </div>

     </div>))
    }
  </div>
}
</div>

  
  )
}

