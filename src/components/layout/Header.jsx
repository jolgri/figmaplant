import logo from '../../assets/logo.svg';
import search from '../../assets/Search.svg';
import cart from '../../assets/Cart.svg';
import '../componentsStyle/header.scss';
import { Link, NavLink } from 'react-router-dom';
export default function Header() {
    return (<div className="header-bg">
        <div className="wrapper header">
            <a href="#"><img src={logo} alt='logo'></img></a>
            <nav className='header-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/about'>About us</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <Link to="https://www.figma.com/design/OpHShyjtKZ6zYUEy7KQgzy/Green-Plant-shop?node-id=0-1&p=f&t=2uybQgFVkpXpclMQ-0" target="_blank">Figma</Link>
            </nav>
            <div className="header-side">
                <div className="side-search">
                    Search
                    <img src={search} alt="search"></img>
                </div>
                <div className='side-cart'>
                    <Link to='/cart'><img src={cart} alt='cart'></img></Link>
                </div>
            </div>
        </div>
    </div>
    )
}