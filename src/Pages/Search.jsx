import React from 'react'
import "./Search.css"
export const  SearchBar=({prop})=> {
    // console.log(prop)
    const {Search}=prop;

<<<<<<< HEAD
    console.log(data,"data")
=======
>>>>>>> 7263f93d9e93204676b80cb31aa464ed292ae944
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
     

<div>
  
  {/* {
    !data.Response?<div></div>:<div>
        {
            (data.Search).map((el)=>(<div>{console.log(el)}</div>))
        }
    </div>
} */}

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

    </>
  )
}

