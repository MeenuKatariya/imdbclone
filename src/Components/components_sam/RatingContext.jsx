import axios from "axios";
import React, { createContext, useState } from "react";
export const RatingContext = createContext();
export const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState(null);

  const handleRating = (id) => {
    axios({
            method: "get",
            url: `https://imdb-clone-database.herokuapp.com/movieDetails?id=${id}`,
          }).then((res) => {setRating(res.data[0].ratings)}).catch((err) => console.log(err));
      
  }

  const handleUpdateRating=(body)=>{
    const {id,value,ratings}=body;
    
      axios({
        method:"PATCH",
        url:`https://imdb-clone-database.herokuapp.com/movieDetails/${id}`,
        data:{
          ratings:value
        }
      });
     
   
   
    handleRating(id);
  }

  const value = {
    handleRating,
    handleUpdateRating,
    rating,
    setRating
  };

  return <RatingContext.Provider  value={value}>{children}</RatingContext.Provider>;
};
