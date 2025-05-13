import { Link } from 'react-router-dom';
import './componentsStyle/title.scss';


export default function Title({ text1, text2, showLink = false }) {
    return (
        <>
            <div className='title-box'>
                <h2 className="title">
                    <span className="green-text">{text1} </span>
                    <span>{text2}</span>
                </h2>

                {
                    showLink && (
                        <Link to="/products" className='title-link'>Shop All &gt;</Link>

                    )
                }
            </div>
        </>

    )
}