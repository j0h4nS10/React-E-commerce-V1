import { useState } from 'react'
import Cards from '../../components/CardsHome/CardsHome'
import CarouselHome from '../../components/CarouselHome/CarouselHome'
import FooterMain from '../../components/FooterMain/FooterMain'
import NavbarMain from '../../components/NavbarMain/NavbarMain'
import HeaderCompany from '../../components/HeaderCompany/HeaderCompany'
import OutTeamMain from '../../components/OurTeamMain/OurTeamMain'
import './HomePage.css'
import AsideMenu from '../../components/AsideMenu/AsideMenu'
import { Button } from 'react-bootstrap'

const CardsData = [{
    header: "texto",
    title: "texto",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    text: `texto With supporting text below as a natural lead-in to 
    additional content. texto With supporting text below as a natural lead-in to additional content.
    texto With supporting text below as a natural lead-in to additional content.`,
    btntext: "button texto",
    footer: "footer"
}, {
    header: "texto",
    title: "texto",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    text: `texto With supporting text below as a natural lead-in to additional content
    additional content. texto With supporting text below as a natural lead-in to additional content.
    texto With supporting text below as a natural lead-in to additional content.`,
    btntext: "button texto",
    footer: "footer"
}, {
    header: "texto",
    title: "texto",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    text: `texto With supporting text below as a natural lead-in to additional content.
    additional content. texto With supporting text below as a natural lead-in to additional content.
    texto With supporting text below as a natural lead-in to additional content.`,
    btntext: "button texto",
    footer: "footer"
}]

const shoppingCar = [{
    header: "header",
    title: "title",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    text: `item description`,
    footer: "footer"
},{
    header: "header",
    title: "title",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    text: `item description`,
    footer: "footer"
}]

const HomePage = () => {
    //Navbar
    const [expanded, setExpanded] = useState(false);
    //offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // items cart
    //const [cart] = useState([])
    const [amountitem1, setAmountitem1] = useState(0);


    return (<><HeaderCompany></HeaderCompany>
        <NavbarMain setExpanded={setExpanded} expanded={expanded} handleShow={handleShow} />
        <AsideMenu show={show} handleClose={handleClose} placement="end" name="end"
            amountitem1={amountitem1} setAmountitem1={setAmountitem1} props={shoppingCar}></AsideMenu>
        <div className='centercontainer'><CarouselHome />
        </div>
        <Cards props={CardsData}></Cards>
        <OutTeamMain />
        <FooterMain />
    </>)
}

export default HomePage