import React, { useState } from 'react';

const SearchContext = React.createContext();

export const SearchProvider = (props) => {
    const [ searchInput, setSearchInput ] = useState();

    const onChange = e => {
        setSearchInput(e.target.value);
    }

    return(
        <SearchContext.Provider value={{ searchInput, onChange }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;