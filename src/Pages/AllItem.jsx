import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Spinner from '../Componants/Spinner';

const AllItem = () => {

    const [loader, setLoader] = useState(false)
    const [items, setItems] = useState()
    const [search, setSearch] = useState('')
    // console.log(search);
    useEffect(() => {
        document.title = "All Item";
    }, []);

    useEffect(() => {
        setLoader(true)
        axios(`https://lost-found-server-two.vercel.app/allitem?searchParams=${search}`)
            .then(res => {
                setItems(res.data)
                setLoader(false)
            }).catch(error => {
                toast.error(error.message)
            })
    }, [search])


    return (
        <div className='my-10 max-w-11/12 mx-auto pt-16'>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input 
                type="search" 
                required 
                placeholder="Search" 
                onChange={(e)=>setSearch(e.target.value)}
                />
            </label>
            <h2 className="text-6xl text-center text-[#2C7BE5] mb-4">All Item</h2>
            {
                loader ? (<Spinner></Spinner>)
                    :
                    (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            items?.map(item => <div key={item?._id} className="card bg-base-100  border-2 border-[#2C7BE5] shadow-sm">
                                <figure>
                                    <img className='h-[200px] w-full'
                                        src={item?.thumbnail}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item?.title}</h2>
                                    <p>{item?.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${item?._id}`}> <button className="btn bg-[#28A745] text-white hover:rounded-4xl"><FcViewDetails /> Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>)
            }
        </div>
    );
};

export default AllItem;