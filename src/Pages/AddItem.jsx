import React, { forwardRef, use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { toast } from 'react-toastify';

const AddItem = () => {

    const { user, isLoading } = use(AuthContext)

    const [selectedDate, setSelectedDate] = useState(new Date());
    const formated = selectedDate.toISOString().split('T')[0]
    const ExampleCustomInput = forwardRef(
        ({ value, onClick, className }, ref) => (
            <button type='button' className={className} onClick={onClick} ref={ref}>
                {value}
            </button>
        ),
    );

     useEffect(() => {
            document.title = "Add Item";
        },[]);

    const handleAdd =(e)=>{
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newItem = Object.fromEntries(formData.entries())
        const data = {...newItem, date:formated}
        // console.log(data);

        axios.post('https://lost-found-server-two.vercel.app/additem',data)
        .then(res=>{
            // console.log(res.data);
            if(res?.data?.insertedId){
                toast.success('An Item Added Successfully!')
            }
        }) 
        .catch(error=>{
            toast.error(error.message)
        })
    }


    return (
        <div className='mb-10 max-w-11/12 mx-auto pt-16'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl text-[#2C7BE5]">Add Item</h1>
            </div>
            <form onSubmit={handleAdd} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Post type */}
                    <fieldset className="fieldset  border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Post Type</label>
                        <select className="input w-full " name="type" id="day" required>
                            <option disabled={true}>Select A Type</option>
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </fieldset>
                    {/* Thumbnail*/}
                    <fieldset className="fieldset border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Thumbnail (Image URL)</label>
                        <input type="text" name='thumbnail' className="input w-full " placeholder="Thumbnail (Image URL)" required />
                    </fieldset>

                    {/* title*/}
                    <fieldset className="fieldset  border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Title</label>
                        <input type="text" name='title' className="input w-full " required placeholder="Title" />
                    </fieldset>

                    {/*  Description*/}
                    <fieldset className="fieldset  border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Description</label>
                        <input type="text" name='description' className="input w-full " required placeholder="Description" />
                    </fieldset>

                    {/* Category */}
                    <fieldset className="fieldset border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Category</label>
                        <select className="input w-full " name="category" id="day" required>
                            <option disabled={true}>Select A Category</option>
                            <option value="Human">Human</option>
                            <option value="Gadgets">Gadgets</option>
                            <option value="Pets">Pets</option>
                            <option value="Documants">Documants</option>
                        </select>
                    </fieldset>
                    {/* location */}
                    <fieldset className="fieldset   border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Location</label>
                        <input type="text" name='location' className="input w-full " required placeholder="Location" />
                    </fieldset>
                    {/*  Date */}
                    <fieldset className="fieldset  border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Date</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            customInput={<ExampleCustomInput className="input w-full" />}
                        />
                         <input type="text" name='status' className="input w-full " required placeholder="status" />
                    </fieldset>

                    {/* Contact Information   */}
                    <fieldset className="fieldset  border-2 border-[#2C7BE5] rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Contact Information</label>
                        {
                            isLoading ?
                                (<span className="loading loading-bars loading-lg"></span>)
                                :
                                <>
                                <input type="email" name='email' value={user?.email || ''} className="input w-full " placeholder="User Email" readOnly />
                                <input type="text" name='name' value={user?.displayName || ''} className="input w-full " placeholder="User Email" readOnly />
                                </>
                        }
                    </fieldset>
                </div>

                <input type="submit" className='btn w-full mt-5 text-white text-[18px] bg-[#2C7BE5] hover:rounded-4xl' value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;