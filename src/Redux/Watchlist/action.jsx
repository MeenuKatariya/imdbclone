import { EDITWATCHLIST_SUCCESS, RECENTLY_VIEWED_DELETE, RECENTLY_VIEWED_SUCCESS, SORT_YEAR_ASC, SORT_YEAR_DESC, WATCHLIST_ERROR, WATCHLIST_LOAD, WATCHLIST_SUCCESS, SORT_IMDBRATING_ASC, SORT_IMDBRATING_DESC, SORT_RUNTIME_DESC, SORT_RUNTIME_ASC, SORT_DEFAULT } from "./actionTypes";

export const watchlistLoad = () => {
     return {

          type: WATCHLIST_LOAD
     }
}

export const watchlistSuccess = (payload) => {
     return {

          type: WATCHLIST_SUCCESS,
          payload
     }
}

export const watchlistError = () => {
     return {

          type: WATCHLIST_ERROR
     }
}


export const recentlyViewedSuccess = (payload) => {
     return {

          type: RECENTLY_VIEWED_SUCCESS,
          payload
     }
}

export const recentlyViewedDelete = () => {
     return {

          type: RECENTLY_VIEWED_DELETE
     }
}

export const editWatchlistSuccess = () => {
     return {

          type: EDITWATCHLIST_SUCCESS
     }


}

export const sortYearAsc = () => {
     return {
          type: SORT_YEAR_ASC

     }
}

export const sortYearDesc = () => {
     return {
          type: SORT_YEAR_DESC

     }
}

export const sortRuntimeAsc = () => {
     return {
          type: SORT_RUNTIME_ASC

     }
}

export const sortRuntimeDesc = () => {
     return {
          type: SORT_RUNTIME_DESC

     }
}

export const sortImdbRatingAsc = () => {
     return {
          type: SORT_IMDBRATING_ASC

     }
}

export const sortImdbRatingDesc = () => {
     return {
          type: SORT_IMDBRATING_DESC

     }
}

export const sortDefault = () => {
     return {
          type: SORT_DEFAULT

     }
}