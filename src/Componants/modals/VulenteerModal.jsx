import React from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const VulenteerModal = ({ onClose }) => {

    const handleVulenteer = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Registration Successful!',
           text: 'Your account has been created. You can now log in and start helping the community.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        onClose()
    }


    return (
        <div  className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
            <div className={`p-5 bg-base-100 rounded-lg min-w-[400px]  space-y-2`}>

                <div className='flex justify-between'>
                    <h3 className="text-2xl">Vulenteer Registrtion</h3>
                    <label className='z-[999]'>
                        <button type='button' className='btn btn-outline' onClick={onClose}><RiCloseLargeFill size={20} /></button>
                    </label>
                </div>
                <form onSubmit={handleVulenteer} className="space-y-3">
                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Availability</span>
                        </label>
                        <select
                            name="availability"
                            className="select select-bordered w-full"
                            required
                            defaultValue=''
                        >
                            <option value="" disabled>
                                Select availability
                            </option>
                            <option value="weekdays">Weekdays</option>
                            <option value="weekends">Weekends</option>
                            <option value="both">Both</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Why do you want to volunteer?</span>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Write a short message..."
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div>
                        <button type="submit" className="btn bg-[#28A745] text-white">Submit</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default VulenteerModal;