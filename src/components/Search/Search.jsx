import React from 'react';

import './Search.css';

const Search = ({searchFlight}) => {

    return(
        <div className="search">
            <input onChange={searchFlight} type="text" placeholder="Введите № рейса" />
            <button type="button">Поиск</button>
        </div>
    )
}

export default Search;