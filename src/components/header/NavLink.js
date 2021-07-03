import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Header.css';


class NavLink extends React.Component {

    render() {
        
        var pathname  = this.props.location.pathname;
        var isActive = pathname === this.props.to;
        var className = isActive ? 'active' : '';

        return(
            <div className={className}>
                <Link {...this.props}>
                {this.props.children}
            </Link>
            </div>
            
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default withRouter(props => <NavLink {...props}/>);;