import React from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { MdEmail, MdPhone } from "react-icons/md";

const TermsModal = ({onClose}) => {
    return (
        <div className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
            <div className={`p-5 bg-base-100 rounded-lg max-w-[400px] space-y-2`}>

                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold mb-6">    Terms of Service
                    </h1>
                    <label className='z-[999]'>
                        <button className='btn btn-outline' onClick={onClose}><RiCloseLargeFill size={20} /></button>
                    </label>
                </div>

                <p className="mb-4 text-gray-500">
                    Welcome to <strong>Lost & Found</strong>! By using our platform, you
                    agree to follow these rules and guidelines.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    User Responsibilities
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Users must provide accurate information when posting lost or found items.
                    Posting false or misleading information is prohibited.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Account Terms
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Users are responsible for maintaining the security of their accounts.
                    Please keep your login details confidential.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Posting Rules
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Posts should be relevant to lost and found items only. We reserve the right
                    to remove any posts that violate our guidelines.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Liability Disclaimer
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Lost & Found only provides a platform to connect users. We are not
                    responsible for any loss, damage, or disputes related to items listed.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Termination
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    We may suspend or terminate accounts that violate these terms.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Privacy
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Please review our Privacy Policy to understand how your data is handled.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Changes to Terms
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    We reserve the right to update these terms at any time. Please check
                    periodically for updates.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Contact Information
                </h2>
                <p className="text-gray-500 dark:text-gray-300">
                    If you have questions, contact us at{" "}
                    <a
                        href="mailto:support@lostfound.com"
                        className="inline-flex items-center text-blue-600 hover:underline mr-4"
                    >
                        <MdEmail className="mr-1" /> support@lostfound.com
                    </a>
                    <br />
                    <a
                        href="tel:+1234567890"
                        className="inline-flex items-center text-blue-600 hover:underline"
                    >
                        <MdPhone className="mr-1" /> +1 (234) 567-890
                    </a>
                    .
                </p>

            </div>
        </div>
    );
};

export default TermsModal;