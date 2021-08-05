import React, { useState } from 'react';
import Video from '../../assets/video.mp4';
import { Button } from '../button/button.component';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './hero.styles';

const Hero = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>                
            </HeroBg>
            <HeroContent>
                <HeroH1>Sitio Web o Tienda</HeroH1>
                <HeroP>
                    Diseño y armado en solo 4 días!
                </HeroP>
                <HeroP>
                    Full Administrable, con Certificado SSL Gratis. 100% Responsive. 1 año de Hosting Optimizado y veloz.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/contactenos' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        COMENZAR AHORA! {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
