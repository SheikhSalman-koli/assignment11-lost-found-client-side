import React, { useEffect } from 'react';
import Slider from '../Componants/Slider';
import LatestItems from '../Componants/LatestItems';
import Extra1 from '../Componants/Extra1';
import Extra2 from '../Componants/Extra2';


const Home = () => {

     useEffect(() => {
            document.title = "Home";
        },[]);
    
    return (
        <div>
            <Slider></Slider>
            <LatestItems></LatestItems>
            <Extra1></Extra1>
            <Extra2></Extra2>
        </div>
    );
};

export default Home;