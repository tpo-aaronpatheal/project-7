import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return ( 
        <nav class="main-nav">
        <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to="/dinos">Dinos</NavLink></li>
        </ul>
      </nav>
    );
}
 
export default Nav;