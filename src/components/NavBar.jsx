import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </header>
    )
}

//laddar inte om sidan längre :) allt är "samma sida"