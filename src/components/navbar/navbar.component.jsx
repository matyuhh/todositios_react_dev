import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink 
} from './navbar.styles';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>TODOSITIOS</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='planes' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Planes y Precios</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='dominios' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Busque su dominio</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='servicios' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Servicios</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='referencias' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Referencias</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/contactenos'>Contactenos</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
    )
};

export default Navbar;
