import { Box } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { errorPopularMovie, getFilteredData, getMovieDetails, loadingPopularMovie } from "../store/moviedetails/action";
import { Loading } from "./Loading";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export const PhotoGallary = ()=>{

    const { loading, error, movieDetails } = useSelector((state) => state.movieDetails);
    const data=movieDetails[0];
    const dispatch = useDispatch();
    const id="tt8426926";
    useEffect(() => {
      dispatch(loadingPopularMovie());
      axios({
        method: "get",
        url: `http://localhost:8080/movieDetails?id=${id}`,
      })
        .then((res) => {
          dispatch(getMovieDetails(res.data));
        })
        .then((err) => dispatch(errorPopularMovie()));
    }, [dispatch]);
  
    return (<Box variant="div" className="photo-gallary">
        <Box variant="div" sx={{width:"50%", margin :"auto",backgroundColor:"white"}}>
            <img src="https://m.media-amazon.com/images/I/71id-Plo6eL.jpg" width="95%"/>

            {
            (movieDetails.length===0 )?<Loading/>:<Box>
                <ImageList sx={{ width: "70%",padding:"10px 25px" ,"&::-webkit-scrollbar":{display:"none"}}} cols={5} >
                    {(movieDetails[0].images.items).map((el) => (
                        <ImageListItem key={el.image} sx={{width:"130px",height:"130px"}}>
                        
                        <img
                            width="100%"
                            style={{height:"135px"}}
                            src={el.image}
                            srcSet={el.image}
                            alt={el.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
            </ImageList>
            </Box>
        }



        </Box>
        
    </Box>)
}