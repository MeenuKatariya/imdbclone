import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Menu.css";
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import StarsIcon from '@mui/icons-material/Stars';
import Stars from '@mui/icons-material/Stars';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CloseIcon from '@mui/icons-material/Close';


export const Menu=()=> {
  // const [close,setClose]=React.useState=(false)

const navigate=useNavigate()
   const handleClick=()=>{
    navigate("/")
   }

   const handleChange=()=>{
    navigate("/")
   }



  return (
    <>
       <div style={{height:"100%",width:"100%", backgroundColor:"#1f1f1f"}}>
        <div className='imdbImages'  style={{marginTop:0}}>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" className='imdbMainImage' alt="" />
            <div   style={{backgroundColor:"#F5C518",height:40,width:50, borderRadius:"50%"}}  ><CloseIcon onClick={handleChange} style={{marginTop:8,marginLeft:13}}/>
               {/* <img src="https://thumbs.dreamstime.com/b/close-cross-delete-cancel-abstract-circle-background-flat-color-icon-148746708.jpg" className='crossImage'   alt="" />  */}
            </div>
        </div>


     <div className='allMovies'  >

        <div className='Movies'>
          <div className='imagesAllDiv' >
            <div>
            {/* <img   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX//wAAAACwsAAhIQCHhwCoqADn5wDz8wCTkwAoKADFxQAvLwB9fQB4eAC3twBqagDU1ABVVQD4+ABlZQBcXAB5eQClpQCurgCXlwDZ2QB0dAATEwCFhQCOjgAdHQBRUQAXFwCengANDQAeHgA1NQA9PQBKSgDQ0ADt7QAkJABDQwC9vQDf3wAKCgASEgAqKgA9AcDtAAAEB0lEQVR4nO3dW3eiShCG4QJPicfEKCoo0XjIxMzE///vNmyS7Lbo3mMusKnye73rNLPqWboys4BBCrRHvgeoPAjlB6H8IJTft/AlSdNtI2vt3Ltu1KW/zLhN18mfc+Exbs43UTQLs2Ln0dOwLk2dM8b5j2dRtJk34+O3cNt/pf+aOY8OqS6Fzhlnxq7X1akQnqKOeXRLtLBlbhvPdrkwmY/PjlYkpPF7LxNOzoGqhETTgJIhW9MlHH5Q4xdb0yVcpHTPj9Yl7LxRjx+tS0gn2vEldcI9X1Im3NGRLykT7unAl5QJj/TMl5QJn9ULH7MXS5lwkr1YkWhhxLdahO2uq/Z1xr+gH8xoESrrSb1wBKH4RtnnVHej7KW7gXrhVL1Q/3sIofz0C/X/plmqFzazz6numtnnVHe38B5CKD0I5Qeh/G5SOO64Gtv+BC/9YEaLMEzu7X28X2f8C3r/cMyYlK48WITKrsxACKGnIDSCEEJPQWgEIYSegtAIQg3CPl9SJ1zyJXXCJl+CsA5BaAQhhJ6C0MgiDLc9e2mNzginjhm3ljPCJWGn7apGZ/WdM3b4VotQWRDKD0L5QSg/COUHofwglB+E8oNQfhDKD0L5QSi/mxR2fi+yHizxJ7v569f3TAvWJWeEu/vkxX5NYMa3eotft/jzkpU2Gtu30pUHi3Ao+srMJdctfnC0tyA0ukmh7KfsXiKUfQ0YwjwI69AtC0v/7lInxP00eRDWIQiNIITQUxAaQQihpyA0sgjdT7uuz/lS95mW0tOubWeEB3178cN1xr+gh9gx46DLt97kdQtlQSg/COUHofwglB+E8oNQfhDKD0L5QSg/COUHofzswnERf5L01adzN7Zk32kRtofRZn6XtzpvWZ9z3ovVXdG8aJMXZbV+860W4fuH5OsW/Jvi9d1BC+H/Hw3h9YLQCEIIPQWhEYQQegpCo1sQlp4FrU5Yep63OmH5G60grEEQGlmEsv+3OoR5ENahqoRCz5eWhIvVstlcDuKsp6LHokPpHmpvdQ+fM31OmA87yMdeLfjWm/weUmXhu9Xlt6SR7xEqrq9eOIBQfBDKb6peOKAn3yNUXEwT3yNU3AhC8Y3o0fcIFfdEz75HqLgJhOKb0NH3CBX3qF74THvfI1TckXa+R6i4PfV8j1BxOzr5HqHienTP7wB//bqHmreqz33eD84ZX/nWEzXabEnX82k6b5Ryta5nDC1SeuHvjC7hMKEgZmu6hP2Agh57FL0qYXeXCYNdePbrVJFwPNwHuTA4nf09IPuJ5eZvlcVdLyiEQXCIV5tWWBQ7j56GdWnqnDH+3NHarAaHf1fo60dJ2ihaO49eN+rS32dMk68Vcu7VEoTyg1B+EMpPv/AfxDhqgwrpqqIAAAAASUVORK5CYII=" alt="" srcset="" /> */}
           <TheatersIcon style={{marginTop:10, color:"#F5C518"}} />
            <h2>Movies</h2>
            </div>
            </div>
           <div className='allPara'>
           <p>Release Calender</p>
           <p>Top 250 Movies</p>
           <p>Most Popular Movies</p>
           <p>Browse Movies by Genre</p>

           <p>Top Box Office</p>
           <p>Sowtimes & Tickets</p>
           <p>Movie News</p>
           <p>India Movie Spotlight</p>
        
           </div>
        </div>

        <div className='Movies'>
          <div className='imagesAllDiv'  >
           <div>
           {/* <img  src="./tv.jpg" alt="" srcset="" /> */}
           <TvIcon style={{marginTop:10, color:"#F5C518"}}  />
            <h2>TV Shows</h2>
           </div>

            </div>
           <div className='allPara'>
           <p>What's on Tv & Streaming</p>
           <p>Top 250 TV Shows</p>
           <p>Browsw TV Shows by Genre</p>
           <p>TV News</p>

           <p>India TV Spotlight</p>
           </div>
           <div>
             
           <div className='imagesAllDiv'   >
           <div>
             {/* <img   src="data:image/png;base64,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" alt="" srcset="" /> */}
           {/* <Stars/> */}
           <AddToPhotosIcon style={{marginTop:10, color:"#F5C518"}} />
            <h2>Watch</h2>
           </div>
            </div>
           <div className='allPara'>
           <p>What to Watch</p>
           <p>Latest Trailers</p>
           <p>IMDb Originals</p>
           <p>IMDb Picks</p>
           <p>IMDb Podcasts</p>
           </div>

    
           </div>
         </div>

        <div className='Movies'>
          <div  className='awards' >
          <div className='awardsImg' >
          {/* <img  src="https://w1.pngwing.com/pngs/603/327/png-transparent-yellow-star-line-area-triangle-circle-symbol-symmetry.png" alt="" srcset="" /> */}
          <StarsIcon style={{marginTop:10, color:"#F5C518"}} />
        <h2>Awards & Events</h2>
          </div>
            </div>
           <div className='allPars'>
           <p>Oscars</p>
           <p> Best Picture Winners</p>
           <p>STARmenter Awards</p>
           <p>San Diego Comic-Con</p>

           <p>New York Comic-Con</p>
           <p>Sundance Film Festival</p>
           <p> Toronto INT'I Film Festival</p>
           <p>Awards Central</p>
           <p>Festival Central</p>

           <p>All Events</p>
           </div>

        
        </div>


    </div>
      
    <div  style={{marginBottom:20}} className='celebsCommunity'>
    <div className='Celebs'>
          <div className='imagesAllDiv' >
           <div>
        {/* <img src="data:image/png;base64,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" alt="" /> */}
            
            <PeopleIcon  style={{marginTop:10, color:"#F5C518"}} /> 

            <h2>Celebs</h2>
           </div>
          </div>
          <div className='celebsPara'>
          <p>Born Today</p>
          <p>Most Popular Celebs</p>
          <p>Celebrity News</p>
          </div>
        </div>
        < div className='Community'>

    <div className='imagesAllDiv'>
       <div>
         {/* <img src="data:image/png;base64,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" alt="" /> */}
         <PublicIcon style={{marginTop:10, color:"#F5C518"}} />
            <h2>Community</h2>
       </div>

    </div>

          
         <div className='celebsPara'>
         <p>Help Center</p>
          <p>Contributor Zone</p>
          <p>Polls</p>
         </div>
        </div> 
    </div>
    </div>
    </>
  )
}
