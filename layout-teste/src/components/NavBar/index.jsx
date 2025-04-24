import './style.css'
import { optNav } from "../../assets/optionsNav"

const NavBar = () => {

    return (
        <div className="navbar-container">
            {optNav.map((option, index) => (
                <a
                    href={`#${option.toLowerCase().replace(/\s/g, '-')}`}
                    key={index}
                    className="option-navbar"
                >
                    {option}
                </a>
            ))}
        </div>
    )
}

export default NavBar