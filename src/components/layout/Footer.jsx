import '../componentsStyle/footer.scss';
import facebook from '../../assets/social/facebook.svg';
import instagram from '../../assets/social/instagram.svg';
import linkedin from '../../assets/social/linkedin.svg';
import twitter from '../../assets/social/twitter.svg';
import youtube from '../../assets/social/youtube.svg';
import { NavLink } from 'react-router-dom';

export default function Footer({ isHomePage }) {
    return (
        <footer className={`footer ${isHomePage ? '' : 'light-bg'}`}>

            <nav className='footer-menu wrapper'>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/returns">Returns</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
            </nav>
            <div className='social-icons'>
                <a href="#"><img src={youtube} /></a>
                <a href="#"><img src={facebook} /></a>
                <a href="#"><img src={twitter} /></a>
                <a href="#"><img src={instagram} /></a>
                <a href="#"><img src={linkedin} /></a>
            </div>
            <div className='footer-banner dark-bg'>
                <p className="wrapper">Copyright Green thumb. All Rights Reserved</p>
            </div>

        </footer>
    )
}