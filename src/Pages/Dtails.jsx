import React, { forwardRef, use, useEffect, useState } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Dtails = () => {

    const  item  = useLoaderData()
    const [data, setData] = useState(item?.data)

    // console.log(data);
    useEffect(() => {
        document.title = "Details";
    }, []);

    const { user } = use(AuthContext)
    // modal
    const [openmodal, setOpenmodal] = useState(false)
    const handleModal = () => {
        document.getElementById('my_modal_5')
        setOpenmodal(true)
    }
    const closeModal = () => {
        setOpenmodal(false)
    }
    // date picker
    const [selectedDate, setSelectedDate] = useState(new Date());
    const formated = selectedDate.toISOString().split('T')[0]
    const ExampleCustomInput = forwardRef(
        ({ value, onClick, className }, ref) => (
            <button type='button' className={className} onClick={onClick} ref={ref}>
                {value}
            </button>
        ),
    );
    // handle recovered
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const recoverdData = Object.fromEntries(formData.entries())
        const allData = { ...recoverdData, recoverdDate: formated }
        // console.log(allData);

        Swal.fire({
            title: "Are you sure?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, recover it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${import.meta.env.VITE_BASE_URL}/recovered/${data?._id}`, allData)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.insertedId){
                            Swal.fire({
                                title: "recovered",
                                text: "This item has been Recovered successfully",
                                icon: "success"
                            });
                            setData((prev)=> ({...prev, status: "recovered"}))
                        }

                    }).catch(error => {
                        toast.error(error.message)
                    })
            }
        });
    }

    return (
        <div className='pt-16'>
            <div className="max-w-3xl mx-auto bg-base-100 p-6 my-10 rounded-xl shadow-lg">
                {/* Thumbnail */}
                <img
                    src={data?.thumbnail}
                    alt={data?.title}
                    className="w-full h-80 object-cover rounded-lg mb-5 border"
                />
                {/* Title */}
                <h2 className="text-3xl font-bold mb-3">{data?.title}</h2>

                {/* Post Type & Category */}
                <div className="flex gap-3 mb-4">
                    <span className="px-4 py-1 rounded-full bg-blue-100 text-[#2C7BE5] font-semibold">
                        {data?.type}
                    </span>
                    <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                        {data?.category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-500 mb-5">{data?.description}</p>

                {/* Location */}
                <p className="text-md mb-2">
                    <strong>Location:</strong> {data?.location}
                </p>

                {/* Date */}
                <p className="text-md mb-2">
                    <strong>Date:</strong> {data?.date}
                </p>

                {/* Contact Information */}
                <div className="mt-5 p-4 border border-gray-300 rounded-lg bg-base-200">
                    <h3 className="text-lg font-semibold mb-2">Contact Information:</h3>
                    <p><strong>Name:</strong> {data?.name}</p>
                    <p><strong>Email:</strong> {data?.email}</p>
                </div>
                <div className="card-actions justify-end mt-4">

                    <button 
                    onClick={handleModal} 
                    className="btn bg-[#28A745] hover:rounded-4xl text-white">
                        {data?.type === 'Lost' ? 'Found This!' : 'This is mine'},
                    </button>

                    {
                        openmodal &&
                        (<div id="my_modal_5" className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
                            <div className={`p-5 bg-base-300 rounded-lg min-w-[400px]  bg-[url(../assets/hero_img.jpg)] space-y-4`}>

                                <div className='flex justify-between'>
                                    <h3 className="text-2xl">Recover form</h3>
                                    <label className='z-[999]'>
                                        <button className='btn btn-warning' onClick={closeModal}><RiCloseLargeFill size={20} /></button>
                                    </label>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Post Type</legend>
                                        <select className="input w-full" defaultValue={data?.type} name="type" id="day" required readOnly>
                                            <option disabled={true}>Select A Type</option>
                                            <option value="Lost">Lost</option>
                                            <option value="Found">Found</option>
                                        </select>
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Thumbnail (Image URL)</legend>
                                        <input type="text" name='thumbnail' defaultValue={data?.thumbnail} className="input w-full " placeholder="Thumbnail (Image URL)" required readOnly />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Title</legend>
                                        <input type="text" name='title' defaultValue={data?.title} className="input w-full " required placeholder="Title" readOnly />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Description</legend>
                                        <input type="text" name='description' defaultValue={data?.description} className="input w-full " required placeholder="Description" readOnly />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Category</legend>
                                        <select className="input w-full" defaultValue={data?.category} name="category" id="day" required readOnly>
                                            <option disabled={true}>Select A Category</option>
                                            <option value="Human">Human</option>
                                            <option value="Gadgets">Gadgets</option>
                                            <option value="Pets">Pets</option>
                                            <option value="Documants">Documants</option>
                                        </select>
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Location</legend>
                                        <input type="text" name='location' defaultValue={data?.location} className="input w-full " required placeholder="Location" readOnly />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Date</legend>
                                        <input type="date"
                                            name='date'
                                            defaultValue={data?.date}
                                            className="input w-full "
                                            required placeholder="RecoveredDate" readOnly />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Contact</legend>
                                        <input type="email" name='email' defaultValue={data?.email} className="input w-full " required placeholder="RecoveredDate" readOnly />
                                        <input type="text" name='name' defaultValue={data?.name} className="input w-full " required placeholder="RecoveredDate" readOnly />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">RecoveredLocation</legend>
                                        <input type="text" name='recoveredLocation' className="input w-full " required placeholder="RecoveredLocation" />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">RecoveredDate</legend>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            customInput={<ExampleCustomInput className="input w-full" />}
                                        />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Recovered person info </legend>
                                        <input type="email" name='recoveredemail' value={user?.email || ''} className="input w-full " placeholder="User Email" readOnly />
                                        <input type="text" name='recoveredname' value={user?.displayName || ''} className="input w-full " placeholder="User Email" readOnly />
                                        <input type="text" name='recoveredphoto' value={user?.photoURL || ''} className="input w-full " placeholder="User Email" readOnly />
                                    </fieldset>

                                    <button
                                        type='submit'
                                        disabled={data?.status === "recovered"}
                                        className={`btn bg-[#28A745] hover:rounded-4xl text-white mt-3
                                        ${data?.status === "recovered" ? "cursor-not-allowed" : ""}
                                        `}
                                    >
                                        {data?.status === "recovered" ? "Already Recovered" : "Mark as Recovered"}
                                    </button>
                                </form>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dtails;