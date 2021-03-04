import React, { useState } from 'react';
import axios from 'axios';

require("dotenv").config();

const SearchContext = React.createContext();

export const SearchProvider = (props) => {
    const [ activeKeyword, setActiveKeyword ] = useState();
    const [ photoData, setPhotoData ] = useState();

    const onChange = e => {
        setActiveKeyword(e.target.value);
    }

    const onClick = (text) => {
        setActiveKeyword(text);
    }

    const dataFetch = (activeKeyword) => {
        const apiKey = process.env.REACT_APP_FLICKR_KEY;
        //let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${activeKeyword}&per_page=24&page=1&format=json&nojsoncallback=1`
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&page=1&format=json&nojsoncallback=1`

        axios(url)
            .then(response => setPhotoData(response.data));
    }

    return(
        <SearchContext.Provider value={{ activeKeyword, onChange, onClick, dataFetch, photoData }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;