import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SearchContext from './Context';

const Nav = () => {
  const { onClick } = useContext(SearchContext);

    return ( 
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats' onClick={e => onClick(e, 'cats')}>Cats</NavLink></li>
          <li><NavLink to='/dogs' onClick={e => onClick(e, 'dogs')}>Dogs</NavLink></li>
          <li><NavLink to="/dinos" onClick={e => onClick(e, 'dinos')}>Dinos</NavLink></li>
        </ul>
      </nav>
    );
}
 
export default Nav;