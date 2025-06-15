import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Spinner from '../Componants/Spinner';

const AllItem = () => {

    const [loader, setLoader] = useState(false)
    const [items, setItems] = useState()
    // console.log(items);
     useEffect(() => {
            document.title = "All Item";
        },[]);

    useEffect(() => {
        setLoader(true)
        axios('http://localhost:3000/allitem')
            .then(res => {
                setItems(res.data)
                setLoader(false)
            }).catch(error => {
                toast.error(error.message)
            })
    }, [])


    return (
        <div className='my-10'>
            <h2 className="text-6xl text-center text-[#F4B400] mb-4">All Item</h2>
            {
                loader ? (<Spinner></Spinner>)
                :
                ( <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                items?.map(item => <div key={item._id} className="card bg-base-100  border-2 border-[#2C7BE5] shadow-sm">
                    <figure>
                        <img className='h-[200px] w-full'
                            src={item.thumbnail}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/details/${item._id}`}> <button className="btn bg-[#28A745] text-white hover:rounded-4xl"><FcViewDetails /> Details</button></Link>
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