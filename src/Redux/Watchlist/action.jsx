import { EDITWATCHLIST_SUCCESS, RECENTLY_VIEWED_DELETE, RECENTLY_VIEWED_SUCCESS, WATCHLIST_ERROR, WATCHLIST_LOAD, WATCHLIST_SUCCESS } from "./actionTypes";

export const watchlistLoad = () => {
    return {
     
         type : WATCHLIST_LOAD
    }
}

export const watchlistSuccess= (payload) => {
    return {
     
         type : WATCHLIST_SUCCESS,
         payload
    }
}

export const watchlistError = () => {
    return {
     
         type : WATCHLIST_ERROR
    }
}


export const recentlyViewedSuccess= (payload) => {
    return {
     
         type : RECENTLY_VIEWED_SUCCESS,
         payload
    }
}

export const recentlyViewedDelete = () => {
    return {
     
         type : RECENTLY_VIEWED_DELETE
    }
}

export const editWatchlistSuccess= () => {
    return {
     
         type : EDITWATCHLIST_SUCCESS
    }
}