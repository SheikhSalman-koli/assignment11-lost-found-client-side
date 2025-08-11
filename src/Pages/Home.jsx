import React, { useEffect } from 'react';
import Slider from '../Componants/Slider';
import LatestItems from '../Componants/LatestItems';
import Extra1 from '../Componants/Extra1';
import Extra2 from '../Componants/Extra2';
import HowItWorks from '../Componants/HowItWorks';


const Home = () => {

     useEffect(() => {
            document.title = "Home";
        },[]);
    
    return (
        <div className='space-y-15 py-16'>
            <Slider></Slider>
            <LatestItems></LatestItems>
            <Extra1></Extra1>
            <Extra2></Extra2>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;