import './Nav.css';
function Nav()
{
    return(
        <nav class="navbar bg-dark">
            <a href="/" class="navbar-brand text-light">Portfolio</a>
            <div class="navbar nav">
                <a href="/Home-in" class="nav-link">Home</a>
                <a href="/About" class="nav-link">About</a>
                <a href="/Projects" class="nav-link">Projects</a>
                <a href ="/Contact" class="nav-link ">Contact</a>
            </div>
        </nav>
    )
}
export default Nav;