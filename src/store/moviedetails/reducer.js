import { ERROR_MOVIE_DETAILS, GET_MOVIE_DETAILS, LOADING_MOVIE_DETAILS } from "./actionType";

const init={
    loading:false,
    error:false,
    movieDetails:[]
}

export const reducer = (state=init,{type,payload})=>{

    switch (type) {
        case GET_MOVIE_DETAILS:
            return{
                ...state,
                loading:false,
                error:false,
                movieDetails:payload
            }
        case LOADING_MOVIE_DETAILS:
            return{
                ...state,
                loading:true,
                error:false
            }
        
            case ERROR_MOVIE_DETAILS:
                return{
                    ...state,
                    loading:false,
                    error:true
                }
    
        default:
            return state
    }

}