import { ERROR_MOVIE_DETAILS, GET_MOVIE_DETAILS, LOADING_MOVIE_DETAILS } from "./actionType"

export const getMovieDetails=(payload)=>{
    return{
        type:GET_MOVIE_DETAILS,
        payload
    }
}

export const loadingMovieDetails=()=>{
    return{
        type:LOADING_MOVIE_DETAILS
    }
}

export const errorMovieDetails=()=>{
    return {
        type:ERROR_MOVIE_DETAILS
    }
}



