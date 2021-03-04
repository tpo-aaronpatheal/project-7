import React, { useState } from 'react';
import axios from 'axios';

require("dotenv").config();

const SearchContext = React.createContext();

export const SearchProvider = (props) => {
    const [ activeKeyword, setActiveKeyword ] = useState('chair');
    const [ inputValue, setInputValue ] = useState();
    const [ photoData, setPhotoData ] = useState();

    const onChange = e => {
        setInputValue(e.target.value);
    }

    const onClick = (e, text) => {
        setActiveKeyword(text);
        e.preventDefault();
    }

    const dataFetch = () => {
        const apiKey = process.env.REACT_APP_FLICKR_KEY;
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${activeKeyword}&per_page=24&page=1&format=json&nojsoncallback=1`
        
        axios(url)
            .then(response => setPhotoData(response.data.photos.photo))
    }

    return(
        <SearchContext.Provider value={{ activeKeyword, inputValue, onChange, onClick, dataFetch, photoData }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;