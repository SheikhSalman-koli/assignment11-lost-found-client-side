import React, { useState } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useLoaderData } from 'react-router';

const Dtails = () => {

    const { data } = useLoaderData()
    // console.log(data);
    const [openmodal, setOpenmodal] = useState(false)
    const handleModal = () => {
        document.getElementById('my_modal_5')
        setOpenmodal(true)
    }
    const closeModal = () => {
        setOpenmodal(false)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('okokoko');
    }

    return (
        <div>
            <div className="max-w-3xl mx-auto bg-white p-6 my-10 rounded-xl shadow-lg">
                {/* Thumbnail */}
                <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="w-full h-80 object-cover rounded-lg mb-5 border"
                />
                {/* Title */}
                <h2 className="text-3xl font-bold mb-3">{data.title}</h2>

                {/* Post Type & Category */}
                <div className="flex gap-3 mb-4">
                    <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                        {data.type}
                    </span>
                    <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                        {data.category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-5">{data.description}</p>

                {/* Location */}
                <p className="text-md mb-2">
                    <strong>Location:</strong> {data.location}
                </p>

                {/* Date */}
                <p className="text-md mb-2">
                    <strong>Date:</strong> {data.date}
                </p>

                {/* Contact Information */}
                <div className="mt-5 p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <h3 className="text-lg font-semibold mb-2">Contact Information:</h3>
                    {/* <p><strong>Name:</strong> {data.contact.name}</p> */}
                    <p><strong>Email:</strong> {data.email}</p>
                </div>
                <div className="card-actions justify-end mt-4">

                    <button onClick={handleModal} className="btn btn-primary">{data.type === 'Lost' ? 'Found This!' : 'This is mine'}</button>

                    {
                        openmodal &&
                        (<div id="my_modal_5" className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
                            <div className={`p-5 bg-white rounded-lg min-w-[400px]  bg-[url(../assets/hero_img.jpg)] space-y-4`}>

                                <h2 className="text-xl font-bold mb-2">{data.title}</h2>

                                <img
                                    src={data.thumbnail}
                                    alt={data.title}
                                    className="w-full h-40 object-cover rounded mb-3"
                                />

                                <div className="flex gap-2 mb-3">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                        {data.type}
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                        {data.category}
                                    </span>
                                </div>
                                <p className="text-sm mb-1"><strong>Location:</strong> {data.location}</p>
                                <p className="text-sm mb-1">
                                    <strong>Date:</strong> {(data.date)}
                                </p>
                                <p className="text-sm mb-3">{data.description.slice(0, 80)}...</p>
                                <div className="text-sm text-gray-600">
                                    <p><strong>Contact:</strong> {data.email}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <button onClick={handleSubmit} type='submit' className='btn btn-primary'>Submit</button>
                                <label className='z-[999]'>
                                    <button className='btn btn-warning' onClick={closeModal}><RiCloseLargeFill size={30} /></button>
                                </label>
                                </div>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dtails;