import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    function handleLinkClick(e) {
        e.preventDefault()
        return (e.target.pathname)
    }
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/Home'></NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/PokePage'></NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/RandomButton'></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;