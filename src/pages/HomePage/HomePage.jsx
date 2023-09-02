import { useEffect, useState, useContext } from 'react'
import Cards from '../../components/CardsHome/CardsHome'
import CarouselHome from '../../components/CarouselHome/CarouselHome'
import FooterMain from '../../components/FooterMain/FooterMain'
import NavbarMain from '../../components/NavbarMain/NavbarMain'
import HeaderCompany from '../../components/HeaderCompany/HeaderCompany'
import OutTeamMain from '../../components/OurTeamMain/OurTeamMain'

import AsideMenu from '../../components/AsideMenu/AsideMenu'
import axios from 'axios';

//context
import { AuthContext } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'
import { ProductContext } from '../../context/ProductContext'

/*
const CardsData = [{
    nameProduct: "Office 365 Home edition",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    description: `License Office 365 Home edition with lifetime, with out support, his principal use ist for a 
    home costumer.`,
    price: 10
}, {
    nameProduct: "Office 365 Home edition",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    description: `License Office 365 Home edition with lifetime, with out support, his principal use ist for a 
    home costumer.`,
    price: 20
}, {
    nameProduct: "Office 365 Home edition",
    img: "https://cdn-icons-png.flaticon.com/512/2415/2415292.png",
    description: `License Office 365 Home edition with lifetime, with out support, his principal use ist for a 
    home costumer.`,
    price: 30
}]*/

const carouselData = [{
    src: "https://imgs.search.brave.com/DhZ08alk6eRZuS4j5NkvQTGR9ENMJvCqYfdM9L0QqQg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w",
    alt: "first service",
    h5: "First slide label",
    p: "First slide label vitae elit libero, a pharetra augue mollis interdum"
}, {
    src: "https://imgs.search.brave.com/6SLGFTv4SNxjp44N2gWpvtSEjSFNvWJovBC38iTMpcE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8yMi8wMi9t/b3VudGFpbi1sYW5k/c2NhcGUtMjAzMTUz/OV82NDAuanBn",
    alt: "first service",
    h5: "First slide label",
    p: "Second slide label vitae elit libero, a pharetra augue mollis interdum"
}, {
    src: "https://imgs.search.brave.com/6SLGFTv4SNxjp44N2gWpvtSEjSFNvWJovBC38iTMpcE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8yMi8wMi9t/b3VudGFpbi1sYW5k/c2NhcGUtMjAzMTUz/OV82NDAuanBn",
    alt: "first service",
    h5: "First slide label",
    p: "Second slide label vitae elit libero, a pharetra augue mollis interdum"
}]

const HomePage = () => {
    //Navbar
    const [expanded, setExpanded] = useState(false);
    //offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //context
    const { products, setMyProducts } = useContext(ProductContext);
    const { token, setMyToken } = useContext(AuthContext);
    const { cart, setMyCart } = useContext(CartContext);


    return (<>
        <HeaderCompany />
        <NavbarMain setExpanded={setExpanded} expanded={expanded} handleShow={handleShow} companyName="Company" />
        <AsideMenu show={show} handleClose={handleClose} placement="end" name="end" cart={cart}>
        </AsideMenu>
        <CarouselHome props={carouselData} />
        <Cards props={products}></Cards>
        <OutTeamMain />
        <FooterMain />
    </>)
}

export default HomePage