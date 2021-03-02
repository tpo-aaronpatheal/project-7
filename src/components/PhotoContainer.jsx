import React from 'react';
// import Photo from './Photo';
// import NotFound from './NotFound';
const data = require('../data.json');

const PhotoContainer = () => {

    return ( 
        <div class="photo-container">
        <h2>Results</h2>
        <ul>
            {console.log(data)}
        </ul>
      </div>
     );
}
 
export default PhotoContainer;