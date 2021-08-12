import React from 'react'
import Icon1 from '../../assets/svg-1.png';
import Icon2 from '../../assets/svg-2.png';
import Icon3 from '../../assets/svg-3.png';
import { Button } from '../button/button.component';
import { 
    PricesAndPlansContainer, 
    PricesAndPlansH1,
    PricesAndPlansWrapper,
    PricesAndPlansCard,
    PricesAndPlansIcon,
    PricesAndPlansH2,
    PricesAndPlansP,
    PricesAndPlansPrice
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
                        <PricesAndPlansP>SSL Gratis</PricesAndPlansP>
                        <PricesAndPlansP>Email Ilimitado</PricesAndPlansP>
                        <PricesAndPlansP>100% Responsive</PricesAndPlansP>
                        <PricesAndPlansP>Full Administrable</PricesAndPlansP>
                        <PricesAndPlansP>Transf. Ilimitada</PricesAndPlansP>
                        <PricesAndPlansP>Armado en 4 días</PricesAndPlansP>
                        <PricesAndPlansPrice>$1950/anual*</PricesAndPlansPrice>
                        <Button to={{ pathname: "https://secure.2checkout.com/order/product.php?PRODS=32671492&QTY=1&LANG=es" }} target="_blank" primary='true' dark='true'>Lo quiero!</Button>
                    </PricesAndPlansCard>
                    <PricesAndPlansCard>
                        <PricesAndPlansIcon src={Icon2}/>
                        <PricesAndPlansH2>Tu Sitio o Tienda Full</PricesAndPlansH2>
                        <PricesAndPlansP>1 Website</PricesAndPlansP>
                        <PricesAndPlansP>SSL Gratis</PricesAndPlansP>
                        <PricesAndPlansP>Email Ilimitado</PricesAndPlansP>
                        <PricesAndPlansP>100% Responsive</PricesAndPlansP>
                        <PricesAndPlansP>Full Administrable</PricesAndPlansP>
                        <PricesAndPlansP>Transf. Ilimitada</PricesAndPlansP>
                        <PricesAndPlansP>Armado en 4 días</PricesAndPlansP>
                        <PricesAndPlansPrice>$3400/unico pago*</PricesAndPlansPrice>
                        <Button to={{ pathname: "https://secure.2checkout.com/order/product.php?PRODS=32658871&QTY=1&LANG=es" }} target="_blank" primary='true' dark='true'>Lo quiero!</Button>
                    </PricesAndPlansCard>
                    <PricesAndPlansCard>
                        <PricesAndPlansIcon src={Icon3}/>
                        <PricesAndPlansH2>Inmobiliaria Gold</PricesAndPlansH2>
                        <PricesAndPlansP>1 Website</PricesAndPlansP>
                        <PricesAndPlansP>SSL Gratis</PricesAndPlansP>
                        <PricesAndPlansP>Email Ilimitado</PricesAndPlansP>
                        <PricesAndPlansP>100% Responsive</PricesAndPlansP>
                        <PricesAndPlansP>Full Administrable</PricesAndPlansP>
                        <PricesAndPlansP>Transf. Ilimitada</PricesAndPlansP>
                        <PricesAndPlansP>Armado en 4 días</PricesAndPlansP>
                        <PricesAndPlansPrice>$800/mes*</PricesAndPlansPrice>
                        <Button to={{ pathname: "https://secure.2checkout.com/order/product.php?PRODS=32671492&QTY=1&LANG=es" }} target="_blank" primary='true' dark='true'>Lo quiero!</Button>
                    </PricesAndPlansCard>
                    <PricesAndPlansCard>
                        <PricesAndPlansIcon src={Icon3}/>
                        <PricesAndPlansH2>Agencia de Noticias</PricesAndPlansH2>
                        <PricesAndPlansP>1 Website</PricesAndPlansP>
                        <PricesAndPlansP>SSL Gratis</PricesAndPlansP>
                        <PricesAndPlansP>Email Ilimitado</PricesAndPlansP>
                        <PricesAndPlansP>100% Responsive</PricesAndPlansP>
                        <PricesAndPlansP>Full Administrable</PricesAndPlansP>
                        <PricesAndPlansP>Transf. Ilimitada</PricesAndPlansP>
                        <PricesAndPlansP>Armado en 4 días</PricesAndPlansP>
                        <PricesAndPlansPrice>$1950/mes*</PricesAndPlansPrice>
                        <Button to={{ pathname: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084715f257601717567930a0086" }} target="_blank" primary='true' dark='true'>Lo quiero!</Button>
                    </PricesAndPlansCard>
                </PricesAndPlansWrapper>
            </PricesAndPlansContainer>
        </>
    )
}

export default PricesAndPlans
