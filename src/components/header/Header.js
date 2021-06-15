import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <a href="/" className="navbar-brand"><h1>Albums</h1></a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse2">
                <span className="navbar-toggler-icon"></span>
             </button>

            <div className="collapse navbar-collapse" id="navbarCollapse2">
                <div className="navbar-nav">
                    <NavLink to="/photos" className="nav-item nav-link active"><h5 style={{marginTop: '8px'}}>Photos</h5></NavLink>
                </div>
            </div>
    </nav>
    );
}



export default Header;