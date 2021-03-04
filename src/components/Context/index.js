import React, { useState } from 'react';

const SearchContext = React.createContext();

export const SearchProvider = (props) => {
    const [ activeKeyword, setActiveKeyword ] = useState();

    const onChange = e => {
        setActiveKeyword(e.target.value);
    }

    const onClick = (text) => {
        setActiveKeyword(text);
    }

    return(
        <SearchContext.Provider value={{ activeKeyword, onChange, onClick }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;