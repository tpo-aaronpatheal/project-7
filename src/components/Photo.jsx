import React from 'react';

const Photo = (props) => {
    const { source, alt } = props;
    
    return ( 
        <li>
        <img src={source} alt={alt} />
        </li>
     );
}
 
export default Photo;