import React from 'react'
import Icon1 from '../../assets/svg-1.png';
import Icon2 from '../../assets/svg-2.png';
import Icon3 from '../../assets/svg-3.png';
import { 
    PricesAndPlansContainer, 
    PricesAndPlansH1,
    PricesAndPlansWrapper,
    PricesAndPlansCard,
    PricesAndPlansIcon,
    PricesAndPlansH2,
    PricesAndPlansP
} from './prices-and-plans.styles'

const PricesAndPlans = () => {
    return (
        <>
            <PricesAndPlansContainer id='planes'>
                <PricesAndPlansH1>Planes y Precios</PricesAndPlansH1>
                <PricesAndPlansWrapper>
                    <PricesAndPlansCard>
                        <PricesAndPlansIcon src={Icon1}/>
                        <PricesAndPlansH2>Hosting Premium</PricesAndPlansH2>
                        <PricesAndPlansP>1 Website</PricesAndPlansP>
                    </PricesAndPlansCard>
                    <PricesAndPlansCard>
                        <PricesAndPlansIcon src={Icon2}/>
                        <PricesAndPlansH2>Tu Sitio o Tienda Full</PricesAndPlansH2>
                        <PricesAndPlansP>1 Website</PricesAndPlansP>
                    </PricesAndPlansCard>
                    <PricesAndPlansCard>
                        <PricesAndPlansIcon src={Icon3}/>
                        <PricesAndPlansH2>Inmobiliaria Gold</PricesAndPlansH2>
                        <PricesAndPlansP>1 Website</PricesAndPlansP>
                    </PricesAndPlansCard>
                    <PricesAndPlansCard>
                        <PricesAndPlansIcon src={Icon3}/>
                        <PricesAndPlansH2>Agencia de Noticias</PricesAndPlansH2>
                        <PricesAndPlansP>1 Website</PricesAndPlansP>
                    </PricesAndPlansCard>
                </PricesAndPlansWrapper>
            </PricesAndPlansContainer>
        </>
    )
}

export default PricesAndPlans
