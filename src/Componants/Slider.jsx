import React from 'react';
import found1 from '../assets/found-walet.jpg'
import found2 from '../assets/found-child.jpg'
import lost1 from '../assets/missing-person-t.jpg'
import lost2 from '../assets/found-cact.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Slider = () => {
    return (
        <div className='my-10'>
            <Splide
                options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: true,
                    perPage: 1,
                }}          
            >
                <SplideSlide >
                    <div className='relative'>
                        <img className=' w-full h-[250px] lg:h-[450px] ' src={found1} alt="Image 1" />
                    <h2 className='top-8 lg:top-20 left-8 text-5xl absolute text-amber-400'>found a men's leather wallet</h2>
                    </div>
                </SplideSlide>
                  <SplideSlide >
                    <div className='relative'>
                        <img className=' w-full h-[250px] lg:h-[450px] ' src={lost2} alt="Image 1" />
                    <h2 className='top-8 lg:top-20 left-8 text-5xl absolute '>found a cat</h2>
                    </div>
                </SplideSlide>
                 <SplideSlide >
                    <div className='relative'>
                        <img className=' w-full h-[250px] lg:h-[450px] object-cover' src={found2} alt="Image 1" />
                    <h2 className='top-8 lg:top-20 left-8 text-5xl absolute text-amber-400'>found a girl on street</h2>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <img className='w-full h-[250px] lg:h-[450px] object-center' src={lost1} alt="Image 1" />
                </SplideSlide>
                {/* <SplideSlide>
                    <img className='w-full h-[250px] lg:h-[450px]' src={notFound} alt="Image 1" />
                </SplideSlide> */}
            </Splide>
        </div>
    );
};

export default Slider;