import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            className: '',
        }
    }

    onClick(){
        console.log("cliekd")
        const pathname = window.location.pathname;
        console.log(pathname);
        var isActive = pathname === this.props.to;
        this.setState({className: isActive ? 'active' : ''});
        console.log(pathname + " " + this.props.to);
    }

    render () {

        return(
            <nav className="navibar">
            <ul onClick={() => this.onClick()}>
                <li className={this.state.className} to="/"><NavLink to="/">Albums</NavLink></li>
                <li className={this.state.className} to="/photos"><NavLink to="/photos">Photos</NavLink></li>
            </ul> 
        </nav>
        );
    }

}
export default Header;

