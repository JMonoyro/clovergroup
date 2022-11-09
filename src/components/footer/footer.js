import './footer.scss';
import {SmallGreenButton} from '../buttons/buttons';
import footerLogo from '../../img/footerLogo.png';
import { Footer_list, Footer_list_title, Footer_list_items, Footer_list_item } from './footerItems';

export const Footer = () =>{
    return(
        <footer className='footer'>
            <div className='footer_container'>
                <div className='footer_menu'>
                    <img className='footer_logo' src={footerLogo}/>
                    <div className='footer_btns'>
                        <p className='footer_login'><a href='#'>Login</a></p>
                        <SmallGreenButton>Get API Keys</SmallGreenButton>
                    </div>
                </div>
                <div className='footer_lists'>
                    <div className='footer_lists_wrapper'>
                        <Footer_list>
                            <Footer_list_title>Product</Footer_list_title>
                            <Footer_list_items>
                                <Footer_list_item>Emission Calculations</Footer_list_item>
                                <Footer_list_item>Diverse Offset Portfolio</Footer_list_item>
                                <Footer_list_item>Matching the Offset</Footer_list_item>
                                <Footer_list_item>Transparent Reporting</Footer_list_item>
                                <Footer_list_item>Flexible API Integration</Footer_list_item>
                                <Footer_list_item>Verified Carbon Offsets</Footer_list_item>
                            </Footer_list_items>
                        </Footer_list>
                        <Footer_list>
                            <Footer_list_title>Use Cases</Footer_list_title>
                            <Footer_list_items>
                                <Footer_list_item>Ecommerce</Footer_list_item>
                                <Footer_list_item>Rideshare</Footer_list_item>
                                <Footer_list_item>Flights</Footer_list_item>
                                <Footer_list_item>Enterprise Resource Planning</Footer_list_item>
                                <Footer_list_item>Energy</Footer_list_item>
                                <Footer_list_item>Supply Chain</Footer_list_item>
                                <Footer_list_item>Fintech</Footer_list_item>
                                <Footer_list_item>Fleet</Footer_list_item>
                            </Footer_list_items>
                        </Footer_list>
                        <Footer_list>
                            <Footer_list_title>Developers</Footer_list_title>
                            <Footer_list_items>
                                <Footer_list_item>API Docs</Footer_list_item>
                                <Footer_list_item>Ask Cloverly</Footer_list_item>
                            </Footer_list_items>
                        </Footer_list>
                        <Footer_list>
                            <Footer_list_title>About</Footer_list_title>
                            <Footer_list_items>
                                <Footer_list_item>How It Works</Footer_list_item>
                                <Footer_list_item>Offset Projects</Footer_list_item>
                                <Footer_list_item>Partners</Footer_list_item>
                                <Footer_list_item>About Us</Footer_list_item>
                                <Footer_list_item>Blog</Footer_list_item>
                                <Footer_list_item>News & Press</Footer_list_item>
                                <Footer_list_item>Contact</Footer_list_item>
                            </Footer_list_items>
                        </Footer_list>
                        <div className='footer_link_list'>
                            <Footer_list_item>FAQ</Footer_list_item>
                            <Footer_list_item>Careers</Footer_list_item>
                            <Footer_list_item>Terms of Service</Footer_list_item>
                            <Footer_list_item>Privacy Policy</Footer_list_item>
                        </div>
                    </div>
                </div>
                <div className='footer_copy'><p>&#169; 2020 Cloverly</p></div>
            </div>
        </footer>
    );
}