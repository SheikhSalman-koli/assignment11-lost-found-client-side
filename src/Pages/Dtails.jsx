import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Dtails = () => {

    const { data } = useLoaderData()
    // console.log(data);
    
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
                 
                    <button className="btn btn-primary">{data.type === 'Lost' ? 'Found This!' : 'This is mine'}</button>
                   
               </div>
            </div>
        </div>
    );
};

export default Dtails;