import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

require("dotenv").config();

const SearchContext = React.createContext();

export const SearchProvider = (props) => {

    const [ inputValue, setInputValue ] = useState('');
    const [ photoData, setPhotoData ] = useState();

    let history = useHistory();

    const onChange = e => {
        e.preventDefault()
        setInputValue(e.target.value);
    }

    const onClick = (text) => {
        history.push(text);
        history.replace(text);
    }

    const fetchData = (text) => {
        const apiKey = process.env.REACT_APP_FLICKR_KEY;
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${text}&per_page=24&page=1&format=json&nojsoncallback=1`
        
        axios(url)
            .then(response => setPhotoData(response.data.photos.photo))
    }

    return(
        <SearchContext.Provider value={{ inputValue, onChange, onClick, fetchData, photoData, setPhotoData }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;