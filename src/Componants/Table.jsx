import React, { forwardRef, use, useState } from 'react';
import { BsVectorPen } from 'react-icons/bs';
import { RiCloseLargeFill, RiDeleteBin3Fill } from 'react-icons/ri';
import { AuthContext } from '../Context/AuthContext';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';


const Table = ({ item, index, items, setItems }) => {

    console.log(item);
    const { user } = use(AuthContext)
    const [update, setUpdate] = useState(item)
    // modal
    const [openmodal, setOpenmodal] = useState(false)
    const handleModal = () => {
        document.getElementById('my_modal_5')
        setOpenmodal(true)
    }
    const closeModal = () => {
        setOpenmodal(false)
    }
    // datePicker
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const formated = selectedDate.toLocaleDateString('en-GB')
    // const ExampleCustomInput = forwardRef(
    //     ({ value, onClick, className }, ref) => (
    //         <button type='button' className={className} onClick={onClick} ref={ref}>
    //             {value}
    //         </button>
    //     ),
    // );
    // handle update
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updated = Object.fromEntries(formData.entries())
        // const updated = { ...data, date: formated }
        axios.put(`http://localhost:3000/myitem/${item._id}`, updated)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your file has been updated",
                        icon: "success"
                    });
                }
                setUpdate(update)
                // console.log(res.data);
            }).catch(error => {
                toast.error(error.message)
            })
    }

    // handle delete
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/myitem/${item._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        const remainingItems = items.filter(i => i._id !== item._id)
                        setItems(remainingItems)
                    }).catch(error => {
                        toast.error(error.message)
                    })
            }
        });
    }

    return (
        <tr>
            <th className='hidden lg:block'>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={update.thumbnail}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div className="font-bold">{update.title}</div>
                    </div>
                </div>
            </td>
            <td>{update.type}</td>
            <td>{update.location}</td>
            <th className='flex items-center flex-col lg:flex-row gap-1'>

                <button onClick={handleModal} className="btn btn-secondary btn-xs"><BsVectorPen size={20} /></button>

                {
                    openmodal &&
                    (<div id="my_modal_5" className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
                        <div className={`p-5 bg-white rounded-lg min-w-[400px]  bg-[url(../assets/hero_img.jpg)] space-y-2`}>

                            <div className='flex justify-between'>
                                <h3 className="text-2xl">Update Item</h3>
                                <label className='z-[999]'>
                                    <button className='btn btn-warning' onClick={closeModal}><RiCloseLargeFill size={20} /></button>
                                </label>
                            </div>

                            <form onSubmit={handleUpdate}>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Post Type</legend>
                                    <select className="input w-full" defaultValue={item.type} name="type" id="day" required>
                                        <option disabled={true}>Select A Type</option>
                                        <option value="Lost">Lost</option>
                                        <option value="Found">Found</option>
                                    </select>
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Thumbnail (Image URL)</legend>
                                    <input type="text" name='thumbnail' defaultValue={item.thumbnail} className="input w-full " placeholder="Thumbnail (Image URL)" required />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Title</legend>
                                    <input type="text" name='title' defaultValue={item.title} className="input w-full " required placeholder="Title" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Description</legend>
                                    <input type="text" name='description' defaultValue={item.description} className="input w-full " required placeholder="Description" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Category</legend>
                                    <select className="input w-full" defaultValue={item.category} name="category" id="day" required>
                                        <option disabled={true}>Select A Category</option>
                                        <option value="Human">Human</option>
                                        <option value="Gadgets">Gadgets</option>
                                        <option value="Pets">Pets</option>
                                        <option value="Documants">Documants</option>
                                    </select>
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Location</legend>
                                    <input type="text" name='location' defaultValue={item.location} className="input w-full " required placeholder="Location" />
                                </fieldset>

                                {/* <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Date</legend>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                        
                                        customInput={<ExampleCustomInput className="input w-full" />}
                                    />
                                </fieldset> */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Date</legend>
                                    <input type="date"
                                        name='date'
                                        defaultValue={item.date}     
                                        className="input w-full "
                                        required placeholder="RecoveredDate" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Contact </legend>
                                    <input type="email" name='email' value={user?.email || ''} className="input w-full " placeholder="User Email" readOnly />
                                </fieldset>

                                <button type='submit' className='btn bg-[#28A745] hover:rounded-4xl text-white mt-3'>Update</button>

                            </form>

                        </div>
                    </div>)
                }

                <button onClick={handleDelete} className="btn btn-warning btn-xs"><RiDeleteBin3Fill size={20} /></button>

            </th>
        </tr>
    );
};

export default Table;