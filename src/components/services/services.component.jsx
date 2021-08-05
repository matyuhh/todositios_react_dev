import React from 'react'
import Icon1 from '../../assets/svg-1.png';
import Icon2 from '../../assets/svg-2.png';
import Icon3 from '../../assets/svg-3.png';
import { 
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './services.styles'

const Services = () => {
    return (
        <>
            <ServicesContainer id='servicios'>
                <ServicesH1>Nuestros Servicios</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Dominios & Emails</ServicesH2>
                        <ServicesP>Todos los planes incluyen un servicio único y a medida, atencion exclusiva y personalizada</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Monetización y Ads</ServicesH2>
                        <ServicesP>Somos Partners de Google y de las mejores Empresas del mercado, promocionamos 100% tu negocio</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Paneles de Control</ServicesH2>
                        <ServicesP>Contamos con Paneles de Control propios para que puedas desarrollar y tener control de tu sitio.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Alta Velocidad</ServicesH2>
                        <ServicesP>Todo nuestro hosting, está optimizado para wordpress, joomla, prestashop y otros CMS</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
