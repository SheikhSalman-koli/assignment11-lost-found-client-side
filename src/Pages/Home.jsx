import React, { useEffect } from 'react';


const Home = () => {

     useEffect(() => {
            document.title = "Home";
        },[]);
    
    return (
        <div>
            this is home
        </div>
    );
};

export default Home;