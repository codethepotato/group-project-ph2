// import logo from './logo.svg';

function Header() {
    return (
        <div id='header'>
            <header className="App-header">
                <img src={'logo'} className="App-logo" alt="Get wrecked" />
                <p>Howdy Y'all</p>
                    <svg  width="40" height="32"></svg>
                    <span class="fs-4">Poke-Dexer</span>
                <ul class="nav nav-pills">
                    <li class="nav-item">Home</li>
                    <li class="nav-item">Features</li>
                    <li class="nav-item">FAQs</li>
                    <li class="nav-item">About</li>
                </ul>
            </header>
        </div>
    )
}

export default Header;

