import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar.component';
import Sidebar from '../components/sidebar/sidebar.component';
import Hero from '../components/heroSection/hero.component';
import Info from '../components/infoSection/info.component';
import { homeObjOne, homeObjTwo } from '../components/infoSection/info.data';
import Services from '../components/services/services.component';
import Footer from '../components/footer/footer.component';
import PricesAndPlans from '../components/prices-and-plans/prices-and-plans.component';

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <PricesAndPlans/>
            <Info {...homeObjOne}/>
            <Services/>
            <Info {...homeObjTwo}/>
            <Footer />
        </>
    )
};

export default Home;