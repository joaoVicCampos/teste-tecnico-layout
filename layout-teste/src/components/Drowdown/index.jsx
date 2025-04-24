import { useState } from "react"
import { optNav } from "../../assets/optionsNav"
import './style.css'


const DropDown = () => {
    const [openDropdown, setOpenDropdown] = useState(false)

    const toggleDropdown = () => {
        setOpenDropdown(prevState => !prevState)
    }
    return (
        <div>
            <div className="hamburger-container">
                <div
                    className="hamburger"
                    onClick={toggleDropdown}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span className="dropdown-text"><strong>Todas as Categorias</strong></span>
            </div>

            {openDropdown && (
                <div className="dropdown-menu">
                    {optNav.map((option, index) => (
                        <a
                            href={`#${option.toLowerCase().replace(/\s/g, '-')}`}
                            key={index}
                            className="dropdown-item"
                        >
                            {option}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropDown