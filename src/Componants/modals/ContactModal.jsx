import React from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';

const ContactModal = ({onClose}) => {
    return (
        <div className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
            <div className={`p-5 bg-base-100 rounded-lg max-w-[400px] space-y-2`}>

                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold mb-6">Contacts
                    </h1>
                    <label className='z-[999]'>
                        <button className='btn btn-outline' onClick={onClose}><RiCloseLargeFill size={20} /></button>
                    </label>
                </div>

                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    For general questions please see our Help Center.
                </p>

            </div>
        </div>
    );
};

export default ContactModal;