import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav-bar'>
            <ul className="nav-item" >
                    <NavLink to='/'>
                    <button type='button'>Home</button></NavLink>
            </ul>
            <ul className="nav-item">
                    <NavLink to='/PokeForm'>
                    <button type='button'>Poke-Form</button></NavLink>
            </ul>
            <ul className="nav-item">
                    <NavLink to='/PokePage'>
                    <button type='button'>Poke-Page</button></NavLink>
            </ul>
            <ul className="nav-item">
                    <NavLink to='/RandomButton'>
                    <button type='button'>Random Button</button></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;