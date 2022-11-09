import './styledHeader.scss';
import Logo from '../../img/logo.png';
import {SmallWhiteButton} from '../buttons/buttons';

const Header = () =>{
    return(
        <header className='header_container'>
            <div className='header_wrapper'>
                <div className='header_menu'>
                    <ul className='header_menu_items'>
                        <img src={Logo}/>
                        <li className='header_menu_item'><a href='#'>Product</a></li>
                        <li className='header_menu_item'><a href='#'>Use Cases</a></li>
                        <li className='header_menu_item'><a href='#'>Developers</a></li>
                        <li className='header_menu_item'><a href='#'>Pricing</a></li>
                        <li className='header_menu_item'><a href='#'>About</a></li>
                    </ul>
                </div>
                <div className='header_login'>
                    <p className='header_login_text'><a href='#'>Login</a></p>
                    <SmallWhiteButton>Get API Keys</SmallWhiteButton>
                </div>
            </div>
        </header>
    )
}

export default Header;