import React from 'react'
import "./Search.css"
export const  SearchBar=({prop})=> {
  
    const {Search}=prop;
  
  return (
    
<div>

{
  (Search==null)?<div></div>:<div>
    {
     Search.map((el)=>(<div>
      {console.log(el.Title)}
     </div>))
    }
  </div>
}
</div>

  
  )
}

