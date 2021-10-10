import React, { useState } from 'react';
import HeroSection from '../components/Hero';
import InfoArea from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import NavBar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Services from '../components/Services';
import FooterSection from '../components/Footer';

const Home = () => {

    const [isOpen,setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <NavBar handleToggle={handleToggle}/>
            <SideBar isOpen={isOpen} handleToggle={handleToggle} />
            <HeroSection />
            <InfoArea {...homeObjOne}/>
            <InfoArea {...homeObjTwo}/>
            <Services/>
            <InfoArea {...homeObjThree}/>
            <FooterSection />
        </>
    )
}

export default Home
