import React from 'react';
import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <div>
          Home
          <Link to="/watchlist">WatchList</Link>
        </div>
    );
}
