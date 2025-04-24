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
                        <a href="#" className='title-link'>Shop All &gt;</a>

                    )
                }
            </div>
        </>

    )
}