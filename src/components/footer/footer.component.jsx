import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './footer.styles';
import { 
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Servicios</FooterLinkTitle>
                                <FooterLink to='/'>Tu Sitio Web O Tienda Virtual</FooterLink>
                                <FooterLink to='/'>Hosting Premium</FooterLink>
                                <FooterLink to='/'>Agencia De Noticias</FooterLink>
                                <FooterLink to='/'>Online Marketing</FooterLink>
                                <FooterLink to='/'>Dominios</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Información</FooterLinkTitle>
                                <FooterLink to='/'>Contáctenos</FooterLink>
                                <FooterLink to='/'>Atención al Cliente</FooterLink>
                                <FooterLink to='/'>Términos de Uso y Política de Privacidad</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                TODOSITIOS
                            </SocialLogo>
                            <WebsiteRights>TodoSitios™  {new Date().getFullYear()} Derechos reservados.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='https://www.facebook.com/todositios' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                                <SocialIconLink href='https://www.instagram.com/todositios/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                                <SocialIconLink href='https://twitter.com/aldofgutierrez' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                                <SocialIconLink href='https://www.linkedin.com/company/todositios/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>    
        </>
    )
};

export default Footer;
