import React from 'react'
import "./Search.css"
export const  SearchBar=({prop})=> {
    // console.log(prop)
    const {Search}=prop;

<<<<<<< HEAD
    console.log(data,"data")
=======
>>>>>>> 7263f93 (.)
  return (
    <>
     {/* <p>{data.Title}</p> */}
     {/* data.length==0?<div></div>:<div>
     {
     data.prop.map(e=>(

          console.log(e)
        
      ))
     }
     </div> */}
     

<div >
  
  {/* {
    !data.Response?<div></div>:<div>
        {
            (data.Search).map((el)=>(<div>{console.log(el)}</div>))
        }
    </div>
} */}

  {/* {
    !data.Response?<div></div>:<div>
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

       </div>
    
     </div>))
    }
  </div>
}
</div>

  
  )
}

