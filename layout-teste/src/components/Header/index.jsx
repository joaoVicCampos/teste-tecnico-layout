import logo from '../../assets/logo.svg'
import './style.css'

const Header = () => {
    return (
        <div className='div-main'>
            <div className='div-logo'>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <div className='div-input'>

                <input type="text" placeholder='Digite aqui o que você procura' className='input' />

            </div>
        </div >
    )
}

export default Header