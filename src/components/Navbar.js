import "./NavbarStyles.css";
// eslint-disable-next-line no-unused-vars
import  { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faHome,faBook,faMapMarkerAlt,faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
        <nav className="NavbarItems">
            <h1 className="nav-logo">GhTour</h1>
            <div className="menu-icons" onClick={this.handleClick}>
            <FontAwesomeIcon icon={this.state.clicked ?  faTimes : faBars } />
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
           
              <li> <Link className="nav-links" to = "/" > <FontAwesomeIcon icon={faHome} className="nav-icon"/> Home</Link> </li> 
              <li> <Link className="nav-links" to = "/sites" > <FontAwesomeIcon icon={faMapMarkerAlt} className="nav-icon"/> Tour Sites</Link> </li> 
              <li> <Link className="nav-links" to = "/booking" > <FontAwesomeIcon icon={faBook} className="nav-icon"/> Booking</Link> </li> 
           
            </ul> 
        </nav>
        );
    }
    }

    export default Navbar;