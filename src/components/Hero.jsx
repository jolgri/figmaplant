import './componentsStyle/hero.scss';
import Button from './Button.jsx';

export default function Hero() {
    return (
        <>
            <div className="light-bg">
                <div className="leaf">
                    <div className="wrapper hero">
                        <div className="hero-mid">
                            <h1 className="main-title">Plants are our Passion</h1>
                            <p className="slogan">Even if you don’t have a green thumb, you can still have a green home.</p>
                            <Button className={'white-btn'} children={'Get Planting'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='dark-line'></div>
        </>

    )
}