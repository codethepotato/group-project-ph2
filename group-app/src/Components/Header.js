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
                    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;

