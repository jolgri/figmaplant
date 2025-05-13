import './componentsStyle/secondTitle.scss';

export default function SecondTitle({ big, small }) {
    return (
        <div className="light-bg">
            <div className="wrapper">

                <h2 className="second-title">
                    <span className="second-title-big">{big}</span>
                    <span className="second-title-small">{small}</span>

                </h2>
            </div>
        </div>

    )
}