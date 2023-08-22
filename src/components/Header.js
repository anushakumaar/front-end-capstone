import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../components/Header.css"
import { useState } from "react";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Menu",
        path: "/menu"
    },
    {
        name: "Reservations",
        path: "/booking"
    },
    {
        name: "Order Online",
        path: "/order-online"
    },
    {
        name: "Login",
        path: "/login"
    }

];

const Header = () => {
    const { pathname } = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <header>
            <nav className="container grid nav-bar">
                <Link className="nav-bar-logo" to="/">
                    <img src={logo} alt="Little Lemon restaurant" />
                </Link>
                <button className="nav-bar-hamburger" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    {isNavExpanded ?
                        <FontAwesomeIcon icon={faXmark} size="2x" /> :
                        <FontAwesomeIcon icon={faBars} size="2x" />}
                </button>
                <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}
                    onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    {navLinks.map((item, index) =>
                        <li key={index}><Link className={pathname === item.path ? 'current-location' : ''} to={item.path}>{item.name}</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;