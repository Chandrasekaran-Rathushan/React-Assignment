import React from 'react';
import NavLink from './NavLink';
import './Header.css';


class Header extends React.Component {

    render () {

        return(
            <nav className="navibar">
            <ul>
                <li><NavLink className="maio" to="/">Albums</NavLink></li>
                <li><NavLink className="maio" to="/photos">Photos</NavLink></li>
            </ul> 
            </nav>
        );
    }

}
export default Header;

