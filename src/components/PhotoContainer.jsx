import React, { useEffect, useContext } from 'react';
import Loading from './Loading';
import Photo from './Photo';
import SearchContext from './Context';


const PhotoContainer = (props) => {
    const { fetchData, photoData, setPhotoData }  = useContext(SearchContext);
    const { path } = props;

    useEffect( () => {
        setPhotoData([]);
        fetchData(path);
        // eslint-disable-next-line
    }, [path])

    let data = photoData ? photoData : [];

    let urlArr = data.map(item => {
        const { farm, server, id, secret, title } = item;
        const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
        return {
            id,
            src: url,
            alt: title
        }
    })

    return ( 
        <div className="photo-container">
            { urlArr.length > 0 ? <h2>Results for "{path}"</h2> : null}
        <ul>
            { urlArr.length > 0 ? urlArr.map(photo => {
                return <Photo key={photo.id} src={photo.src} alt={photo.alt} />
            }) : <Loading /> }
        </ul>
      </div>
     );
}
 
export default PhotoContainer;