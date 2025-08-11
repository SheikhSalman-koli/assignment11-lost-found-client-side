import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { RiCloseLargeFill } from 'react-icons/ri';

const HelpModal = ({onClose}) => {
    return (
        <div className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
            <div className={`p-5 bg-base-100 rounded-lg max-w-[400px] space-y-2`}>

                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold mb-6">Help Center
                    </h1>
                    <label className='z-[999]'>
                        <button className='btn btn-outline' onClick={onClose}><RiCloseLargeFill size={20} /></button>
                    </label>
                </div>


                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Need assistance? Our support team is here to help you with any questions
                    or issues you might have.
                </p>

                <h2 className="text-xl font-semibold mb-3  dark:text-gray-100">
                    Contact Support
                </h2>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                    Reach out to us anytime via email or phone:
                </p>

                <p className="text-gray-500 dark:text-gray-300 mb-2">
                    Email:{" "}
                    <a
                        href="mailto:support@lostfound.com"
                        className="text-blue-600 hover:underline"
                    >
                       <MdEmail className="mr-1" />  support@lostfound.com
                    </a>
                </p>

                <p className="text-gray-500 dark:text-gray-300">
                    Phone:{" "}
                    <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                        <MdPhone className="mr-1" />  +1 (234) 567-890
                    </a>
                </p>

            </div>
        </div>
    );
};

export default HelpModal;