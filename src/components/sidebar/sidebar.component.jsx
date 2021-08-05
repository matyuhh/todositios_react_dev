import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
 } from './sidebar.styles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='prices' onClick={toggle}>Planes y Precios</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>Busque su dominio</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Servicios</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Referencias</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Contactenos</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar;