import React from 'react'
import "./CreateAccount.css"
export const CreateAccount=() =>{
  return (
    <div className='BigPart'>
        <div className='signLeft'>
            <h3>Sign in</h3>
            <div className='signImdb'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" alt="" />
                <div>
                <p>Sign in with IMDb</p>
                </div>
            </div>
            <br />
            <div className='signImdb'>
                <img src="data:image/png;base64,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" alt="" />
                <div>
                <p>Sign in with Amazon</p>
                </div>
            </div>
            <br />
            <div className='signImdb'>
                <img src="data:image/png;base64,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" alt="" />
                <div>
                <p>Sign in with Google</p>
                </div>
            </div>
            <br />
            
            <div className='signImdb'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAclBMVEX///8AAADs7OzS0tLW1tbz8/P5+flZWVmamprf39+/v7/8/PzNzc25ubnBwcGfn5+tra0xMTGNjY3n5+dnZ2dPT09iYmJ9fX2lpaVAQEAtLS2FhYVsbGwSEhImJiZ1dXU5OTlHR0cZGRkgICCLi4sNDQ0w45DiAAAFaklEQVR4nO2d6XbiMAyF48CQBAINO2Wny/u/4jTAFEjs4EyJry71959zpItjW7JkB4HH4/m9tBfzqUrRVgikk0XqSBdtiTjSmfpHH22LMPpbdSFDWyOKwbu6xo+cC+FU3TJAWySHF1WkhTZJCp3XkjZqjDZKCO2yNEqhjRJCX6fNEG2VDMrTTc4cbZYIYq02fiXPyfTaqD9owwSQGrTxU04Q/DFoo17QlglgaBInRFuGZ2TSZoq2DE9i0sYHVhUf1RvaMjymVdxvcr4wavOOtgzPwiiOz62bB06EtgyPNhY/4iOHQJPfOuEz68HYpM0MbZkADJkKtUEbJgHTBtAHVeZwvI02TAIDvTZ+h5Ojj8f9WdWRSKdNgrZKCJuyNK8dtFFSKGszQpskhk5RmqX/pL4pruQ+ZLjiVpwF2hxZ9C7KRD5fXOQkzHDe7aEtEUgrTdu+AsejIUzSQbebJjXTeuNuvJsuN+ptH61Xi8HzDa72Yn1dMxvFliFTmE3Ke8Op7a8J6PVnZQeVmtw9iRrHS90Pj+yeIlhvrY0OqnWFh51sb/7hkZg96941//dnD/VpvlTzNWmGD3OOsFCArmdaavcITcnkMivWPdH4YO3idSa0X6xbr4bzDN3+7z/qky/RvSTTzt2VRHw5n9BYS/J42DLwhmR5Q3BlN+p9Uj/nA+1wDXaOtWEqbrfaozyYFdppSxDasFQpzyHacJyM6hteXCA/ljA1LjhAfE2lsXHBASPpcZaxcK1xNuKPAHETjvxy0xCmDcGper1kwwMhCK5gKxXD7Sjb+278Wm26IG0IvinYwKFIV4BmHPlreA5oqUK7bQVoj8ORP3adGT1BkgHUFMo6AO21HeaW5yYhOdGDfFVLtNeWODzDu0BSVwlJcrH04bs94TzDUqv8gRCHpYIAkR6laYsFaMOyjpubnpuE5atCzMc0V3ghTh1YSgcg5+MsU46+d7VhOJIVASZ4oCnRBmhDkq0IvDhV9O678nBY0hWQmHyPdtoWRHKdZg+IEGeLdtoWyLEM2mlbvDgVQJKkLEF56Y4OF9B0CSPEITl6wIjDUc8fYM6CJ2inbYGUH6OdtqV+Z+YDYJmRVwhxWM70IJXrB7TXlmAKSeX3EB3RvkbVODHabTsgW2Sa9QojDsnpDOJshqZAx/hCTLNQVPZX3LvfLGi/rYCUWXyxQztuBUgcim5y0IysOBKCmOp+xRFEtFDiUEw7MHEYogjYpMOQMDU/TdU84scOpm3mjPi2q0+kOtLfsYSkSi/IvucDt5ifkH2dBVgctZVcX4q6rOvCRG5WGf1d5azFTj1oZXLEXt4ASgfeIHbkoDJeVwi+8e2A1kZymIXKJF+Q3BCB1kb0fTHoKVl0KRzygskctP/VVLyA4QDB03EONKujpF9OCrtHURG0xGIqdU5IXsdPHGDaEJzR4IaO3HzFBdQZjfgkew4q/JQ/4+S4fxIjR3YK+RtM9STaa1sQJdscBXA5Ng+iPRaaXmHEci42O6rB9ZxMsYx/41gctLv1cHuGxfYgrMuyAoKgqoC7G9k/0a7Wx10UIbl+wISrOjiSuKGAm/B8j3bz/3BzHxNHMF7GxUaZ4SkVPc1PO1xb41uaPsbaox38Efdeq/8hDC0zZppNfDHF4jqavLGKohGtkuYOiEkapytpakF/Bm0sx040ytJ2kiTttB9bvczMu8G5JbzTMxJlxatwwuxe7MEYbRqoqL0YZvr1uJNVJD32rEGDFtNeeVc1AlqmC53EN5/VJNQNnvjeJi7UFRnOGCoGatIqTCM7u23KoBCCzFmu6qpJuDjr8zmL6+TE24vd4e3rZ8NJzL/vq6IzHj/VZOrxeGrwF7wqVa4OUfXrAAAAAElFTkSuQmCC" alt="" />
               <div>
               <p>Sign in with Apple</p>
               </div>
            </div>

            <div className='showMoreOptions'>
                <p  style={{color:"#136CB2", fontfamily:"14px Verdana,Arial,sans-serif"}}>Show More Options</p>

            </div>
            <div  style={{}}className='or'>
                {/* <hr  style={{width:100}}/> */}
                <p> <hr /> Or <hr /></p>
                {/* <hr style={{width:100}} /> */}
            </div>

            <div className='CreateAccountButton'>
                <button style={{height:40,width:200,fontWeight:400, fontSize:15,borderRadius:6,backgroundColor:"#E4B721",borderColor:"#E4B721"}} >Create a New Account</button>
            </div>
            <div>
                <p>By signing in, you agree to IMDb's Conditions of Use and Privacy Policy.</p>
            </div>
        </div>
        <hr style={{height:370,backgroundColor:'white'}} />
        <div className='signRight'>
  
         <h3>Benefits of your free IMDb account</h3>
        <div className='personalized'>
        <h6>Personalized Recommendations</h6>
         <p>Discover shows you'll love.</p>
        </div>
        <div  className='personalized' >
            <h6>
                Your Watchlist
            </h6>
            <p>Track everything you want to watch and recieve e-mail when movies opens in theaters.</p>
        </div>
        <div   className='personalized'>
            <h6>Your Ratings</h6>
            <p>Rate and remember everything you've seen</p>

        </div>
        <div  className='personalized'>
            <h6>Contribute to IMDb</h6>
            <p>Add data that will be seen by millions of people and get cool badges.</p>
        </div>


        </div>
    </div>
  )
}
