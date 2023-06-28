// import logo from './logo.svg';
import Link from 'react-router-dom'

function Header() {
    return (
        <div id='header'>
            <header className="App-header">
                <img src={'logo'} className="App-logo" alt="Get wrecked" />
                <p>Howdy Y'all</p>
                    <svg  width="40" height="32"></svg>
                    <span className="fs-4">Poke-Dexer</span>
            </header>
        </div>
    )
}

export default Header;

