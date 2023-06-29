import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/PokeForm'></NavLink>
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