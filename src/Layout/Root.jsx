import React from 'react';
import Header from '../Componants/Header';
import { Outlet } from 'react-router';
import Footer from '../Componants/Footer';

const Root = () => {
    return (
        <div className='bg-base-200'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;