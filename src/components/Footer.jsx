import './componentsStyle/footer.scss';
import facebook from '../assets/social/facebook.svg';
import instagram from '../assets/social/instagram.svg';
import linkedin from '../assets/social/linkedin.svg';
import twitter from '../assets/social/twitter.svg';
import youtube from '../assets/social/youtube.svg';

export default function Footer() {
    return (
        <footer className="footer">

            <nav className='footer-menu wrapper'>
                <a href="#">Products</a>
                <a href="#">Returns</a>
                <a href="#">FAQ</a>
                <a href="#">Shipping</a>
                <a href="#">About us</a>
                <a href="#">Contact us</a>
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