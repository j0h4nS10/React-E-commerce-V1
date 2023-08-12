import SingleCard from '../CardsHome/SingleCard'
import './CardsHome.css'

function Cards({ props }) {
    return (<><div className="container">
        <div className="row row-cols-1 row-cols-lg-3">
            {props.map((element, index) => <div className="col">
                <SingleCard key={index} header={element.header} img={element.img} title={element.title}
                text={element.text} btntext={element.btntext} footer={element.footer}></SingleCard></div>)}
        </div>
    </div>
    </>
    )
}

export default Cards