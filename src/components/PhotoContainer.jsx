import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
const data = require('../data.json');

const PhotoContainer = () => {

    
    const urlArr = data.map(item => {
        const { farm, server, id, secret, title } = item;
        const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
        return {
            id,
            src: url,
            alt: title
        };
    })

    return ( 
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            { urlArr.length > 0 ? urlArr.map(photo => {
                return <Photo key={photo.id} src={photo.src} alt={photo.alt} />
            }) : <NotFound /> }
        </ul>
      </div>
     );
}
 
export default PhotoContainer;