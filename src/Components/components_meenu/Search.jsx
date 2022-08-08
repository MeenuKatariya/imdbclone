import React from 'react'
import "./Search.css"
export const  SearchBar=({prop})=> {
  
    const {Search}=prop;
  
  return (
    
<div >

{
  (Search==null)?<div></div>:<div  className='superPart'  >
    {
     Search.map((el)=>(<div className="parentDiv" style={{borderBottom:"1px solid white",paddingTop:"5px", width:"100%"}}  >
    
      <div  >
      <img src={el.Poster} alt="" />
      </div>
       <div>
       <p>{el.Title}</p>
      <p>{el.Year}</p>
      <p>{el.Type}</p> 
     
       </div>
      
     </div>))
    }
  </div>
}
</div>

  
  )
}

