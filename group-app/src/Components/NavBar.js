import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/PokeForm'>Poke-Form</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/PokePage'>Poke-Page</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/RandomButton'>Random Button</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;