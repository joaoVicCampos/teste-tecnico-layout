import logo from '../../img/logo.svg'
import './style.css'
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi'
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
                <div className="div-input-wrapper">
                    <div className='input-wrapper'>
                        <FiSearch className="input-icon" />

                        <input type="text" placeholder="Digite aqui o que você procura" className="input" />
                    </div>
                    <div className="user-profile">
                        <FiUser className="user-icon" />
                        <span className="user-greeting">Olá, nome do Cliente!</span>
                    </div>
                    <div className="cart-icon">
                        <FiShoppingCart />
                    </div>
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
