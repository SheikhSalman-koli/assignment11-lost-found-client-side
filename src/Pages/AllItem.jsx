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
    const [sortOption, setSortOption] = useState('')

    // const [sortType, setSortType] = useState("");
    // const [sortValue, setSortValue] = useState("");
    // const [openMenu, setOpenMenu] = useState(false);
    // const [openSubMenu, setOpenSubMenu] = useState(null);
    // console.log(sortType);
    // console.log(sortValue);
    // const categoryOptions = ["Human", "Documents", "Gadgets"];
    // const statusOptions = ["Lost", "Found", "Recovered"];

    // console.log(search);
    useEffect(() => {
        document.title = "All Item";
    }, []);

    useEffect(() => {
        setLoader(true)
        axios(`https://lost-found-server-two.vercel.app/allitem?searchParams=${search}&sortParams=${sortOption}`)
            .then(res => {
                setItems(res.data)
                setLoader(false)
            }).catch(error => {
                toast.error(error.message)
            })
    }, [search, sortOption])

    // useEffect(() => {
    //     setLoader(true)
    //     fetchItems();
    //     setLoader(false)
    // }, [search, sortType, sortValue]);


    // const fetchItems = async () => {
    //     try {
    //         const res = await axios.get(`https://lost-found-server-two.vercel.app/allitem?searchParams=${search}&sortType=${sortType}&sortValue=${sortValue}`);
    //         setItems(res?.data);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // const handleSortClick = (type, value) => {
    //     setSortType(type);
    //     setSortValue(value);
    //     setOpenMenu(false);
    //     setOpenSubMenu(null);
    // };


    return (
        <div className='my-10 max-w-11/12 mx-auto pt-16'>
            <h2 className="text-6xl text-center text-[#2C7BE5] mb-4">All Item</h2>

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
                loader ? (<Spinner></Spinner>)
                    :
                    (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            items?.map(item => <div key={item?._id} className="card bg-base-100 shadow-md rounded-2xl overflow-hidden p-4 space-y-3">
                                <figure>
                                    <img className='w-full h-48 object-cover rounded-xl border-1 border-gray-300'
                                        src={item?.thumbnail}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body p-0">
                                    <h2 className="font-bold">{item?.title}</h2>
                                    <p>
                                        {item?.description?.split(" ").slice(0, 20).join(" ")}
                                        {item?.description?.split(" ").length > 20 && "..."}
                                    </p>
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