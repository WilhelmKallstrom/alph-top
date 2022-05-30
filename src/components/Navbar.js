import DarkModeSwitch from "./DarkModeSwitch"

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container pe-0">
                <span className="navbar-brand mb-0 h1 fw-bold">Explore Alephium</span>

                <DarkModeSwitch />


            </div>
        </nav>
    )

}

export default Navbar