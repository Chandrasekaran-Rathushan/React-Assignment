import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class NavLink extends React.Component {

    render() {
        const { pathname } = this.props.location;
        var isActive = pathname === this.props.to;
        var className = isActive ? 'active' : '';

        return(
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default withRouter(props => <NavLink {...props}/>);;