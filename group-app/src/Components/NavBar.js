

function NavBar() {
    function handleLinkClick(e) {
        e.preventDefault()
        return (e.target.pathname)
    }
    return (
        <nav>
            {/* <Link onClick={handleLinkClick} href='/'>Home</Link>
            <Link onClick={handleLinkClick} href='/PokePage'>Poke Page</Link>
            <Link onClick={handleLinkClick} href='/RandomButton'>Random Button</Link> */}
        </nav>
    )
}

export default NavBar;