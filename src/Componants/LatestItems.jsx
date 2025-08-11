import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import { Link } from 'react-router';
import { FcViewDetails } from 'react-icons/fc';
import { FaArrowRightLong } from "react-icons/fa6";

const LatestItems = () => {

    const [loader, setLoader] = useState(false)
    const [latest, setLatest] = useState([])

    // console.log(latest);
    useEffect(() => {
        setLoader(true)
        axios('https://lost-found-server-two.vercel.app/latest')
            .then(res => {
                setLatest(res.data)
                setLoader(false)
            }).catch(error => {
                toast.error(error.message)
            })
    }, [])

    return (
        <div className='space-y-5  max-w-11/12 mx-auto '>
            <h1 className="text-3xl lg:text-7xl text-center text-[#2C7BE5]">Latest Lost & Found Items</h1>
            {
                loader ? (<Spinner></Spinner>)
                    :
                    (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            latest?.map(item => <div
                                key={item._id}
                                className="card bg-base-100 shadow-md rounded-2xl overflow-hidden p-4 space-y-3"
                            >
                                <figure>
                                    <img className='w-full h-48 object-cover rounded-xl border-1 border-gray-300'
                                        src={item.thumbnail}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body p-0">
                                    <h2 className="font-bold mb-3">{item.title}</h2>
                                      <p>
                                        {item?.description?.split(" ").slice(0,20).join(" ")}
                                         {item?.description?.split(" ").length > 20 && "..."}
                                        </p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${item._id}`}> <button className="btn bg-[#28A745] text-white hover:rounded-4xl"><FcViewDetails /> Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>)
            }
             <Link to='/allitem' className='btn bg-[#28A745] w-full text-white hover:rounded-4xl px-0'>See All <FaArrowRightLong /></Link>
        </div>
    );
};

export default LatestItems;