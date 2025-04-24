import logo from '../../img/logo.svg'
import './style.css'
import NavBar from '../NavBar'
import Dropdown from '../Drowdown'
import SaleMsg from '../SaleMsg'

const Header = () => {
    return (
        <div className="div-main">
            <div className='sale-msg-container'>
                <SaleMsg />
            </div>

            <div className="div-top">

                <div className="div-logo">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="div-input">
                    <input type="text" placeholder="Digite aqui o que você procura" className="input" />
                </div>
            </div>
            <div className="navbar-wrapper">
                <Dropdown />
                <NavBar />
            </div>
        </div >
    )
}

export default Header
