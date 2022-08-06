import {
  ERROR_MOVIE_DETAILS,
  ERROR_POPULAR_MOVIE,
  GET_FILTERED_DATA,
  GET_MOVIE_DETAILS,
  GET_POPULAR_MOVIE,
  LOADING_MOVIE_DETAILS,
  LOADING_POPULAR_MOVIE,
} from "./actionType";

const init = {
  loading: false,
  error: false,
  movieDetails: [],
  movies:[],
  filterData:[]
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        error: false,
        movieDetails: payload,
      };
    case LOADING_MOVIE_DETAILS:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ERROR_MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_POPULAR_MOVIE:
      return {
        ...state,
        loading: false,
        error: false,
        movies: payload,
      };
    case LOADING_POPULAR_MOVIE:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ERROR_POPULAR_MOVIE:
      return {
        ...state,
        loading: false,
        error: true,
      };

      case GET_FILTERED_DATA:
      return {
        ...state,
        loading: false,
        error: false,
        filterData: payload,
      };

    default:
      return state;
  }
};
