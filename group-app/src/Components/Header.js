// import logo from './logo.svg';

function Header() {
    return (
        <div id='header'>
            <header className="App-header">
                <img src={'logo'} className="App-logo" alt="Get wrecked" />
                <p>Howdy Y'all</p>
                <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg  width="40" height="32"></svg>
                    <span class="fs-4">Poke-Dexer</span>
                </a>
                <ul class="nav nav-pills">
                    <li className="nav-item"><Link   aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link >Features</Link></li>
                    <li className="nav-item"><Link>FAQs</Link></li>
                    <li className="nav-item"><Link >About</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;

