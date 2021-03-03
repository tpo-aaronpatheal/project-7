import React, { useState } from 'react';

const SearchContext = React.createContext();

export const SearchProvider = (props) => {
    const [ searchInput, setSearchInput ] = useState();

    const onChange = e => {
        setSearchInput(e.target.value);
    }

    const [ activeKeyword, setActiveKeyword ] = useState();

    const updateActiveKeyword = (text) => {
        setActiveKeyword(text);
        console.log(activeKeyword)
    }

    return(
        <SearchContext.Provider value={{ searchInput, onChange, activeKeyword, updateActiveKeyword }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;