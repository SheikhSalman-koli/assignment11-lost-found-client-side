import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Spinner from '../Componants/Spinner';
import RecoveredCard from '../Componants/RecoveredCard';
import RecoveredTable from '../Componants/RecoveredTable';

const AllRecoveredItem = () => {

    const [loader, setLoader] = useState(false)
    const [recovereds, setRecovereds] = useState()
    const [search, setSearch] = useState('')
    const [sortOption, setSortOption] = useState('')

    useEffect(() => {
        document.title = "All Item";
    }, []);

    useEffect(() => {
        setLoader(true)
        axios(`${import.meta.env.VITE_BASE_URL}/allRecoveredItem?searchParams=${search}&sortParams=${sortOption}`)
            .then(res => {
                setRecovereds(res?.data)
                setLoader(false)
            }).catch(error => {
                toast.error(error.message)
            })
    }, [search, sortOption])

      const [layout, setLayout] = useState('card')
    
        const handleLayout = () => {
            setLayout(layout === 'card' ? 'table' : 'card')
        }

    return (
        <div className='my-10 max-w-11/12 mx-auto pt-16'>
            <h2 className="text-6xl text-center text-[#2C7BE5] mb-4">All Recovered Item</h2>

            <div className='mb-10 flex flex-col lg:flex-row lg:justify-between gap-3'>
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
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>

                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="" disabled>
                        Sort by
                    </option>
                    <option value="latest">Latest Items</option>
                    <option value="oldest">Oldest Items</option>
                    <option value="alphabetical">Alphabetical</option>
                </select>


            </div>
            
          {
            loader ? <Spinner></Spinner>
                    :
                    <div>
                        <div className='flex justify-end mb-4'>
                            <button
                                className='btn bg-[#28A745] text-white hover:rounded-4xl'
                                onClick={handleLayout}
                            >
                                {layout === "card" ? "Switch to Table View" : "Switch to Card View"}
                            </button>
                        </div>

                        
                        {
                            layout === 'card' ?
                                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                                    {
                                        recovereds?.map(item => <RecoveredCard
                                            key={item?._id}
                                            item={item}
                                        ></RecoveredCard>)
                                    }
                                </div>)
                                :
                                (
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th className='hidden lg:block'>No.</th>
                                                    <th>photo</th>
                                                    <th>Category</th>
                                                    <th>Lost At</th>
                                                    <th>Recovered At</th>
                                                    <th>Recovered On</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    recovereds?.map((recovered, index) => <RecoveredTable
                                                        key={recovered?._id}
                                                        recovered={recovered}
                                                        index={index}
                                                    ></RecoveredTable>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                )
                        }
                    </div>
}
        </div>
    );
};

export default AllRecoveredItem;