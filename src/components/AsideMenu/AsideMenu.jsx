import CardCart from "./CardCart"
import './AsideMenu.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

function AsideMenu({ show, handleClose, placement, name, amountitem1, setAmountitem1, props }) {
    console.log("inside AsideMenu")

    const itemsCar = props.map((item, id) => {
        console.log(item, id)
        return (<CardCart key={id} header={item.header} img={item.img} title={item.title}
            text={item.text} footer={item.footer} amountitem1={amountitem1}
            setAmountitem1={setAmountitem1}></CardCart>)
    })

    return (<>
        <Offcanvas show={show} onHide={handleClose} placement={placement} name={name}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="mt-2">{itemsCar}</div>
                
            </Offcanvas.Body>
        </Offcanvas>
    </>)
}

export default AsideMenu