import { ERROR_MOVIE_DETAILS, ERROR_POPULAR_MOVIE, GET_MOVIE_DETAILS, GET_POPULAR_MOVIE, LOADING_MOVIE_DETAILS, LOADING_POPULAR_MOVIE } from "./actionType"

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

export const getPopularMovie=(payload)=>{
    return{
        type:GET_POPULAR_MOVIE,
        payload
    }
}

export const loadingPopularMovie=()=>{
    return{
        type:LOADING_POPULAR_MOVIE
    }
}

export const errorPopularMovie=()=>{
    return {
        type:ERROR_POPULAR_MOVIE
    }
}


