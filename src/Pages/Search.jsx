import React from 'react'
import "./Search.css"
export const  SearchBar=({prop})=> {
    // console.log(prop)
    const {Search}=prop;


    console.log(data,"data")
  return (
    
   

<div >
  

{
  (Search==null)?<div></div>:<div  className='superPart'>
    {
     Search.map((el)=>(<div className="parentDiv">jsd
    
      <div>
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

