import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { RiCloseLargeFill } from 'react-icons/ri';

const PrivacyPolicy = ({onClose}) => {
    return (
        <div className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
            <div className={`p-5 bg-base-100 rounded-lg max-w-[400px] space-y-2`}>

                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                    <label className='z-[999]'>
                        <button className='btn btn-outline' onClick={onClose}><RiCloseLargeFill size={20} /></button>
                    </label>
                </div>

                <p className="mb-4 text-gray-500 ">
                    At <strong>Lost & Found</strong>, we respect your privacy and are committed
                    to protecting your personal information.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Information We Collect
                </h2>
                <p className="mb-4 text-gray-500 ">
                    We collect information such as your name, email, phone number, and any
                    details you provide when posting lost or found items. We may also collect
                    information through cookies and analytics tools.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    How We Use Information
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Your information is used to provide and improve our services, communicate
                    with you, and ensure the safety and security of our platform.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Information Sharing and Disclosure
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    We do not sell your personal data to third parties. We may share
                    information with trusted service providers who help us operate the
                    platform, or as required by law.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Data Security
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    We implement reasonable security measures to protect your data from
                    unauthorized access or disclosure.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    User Rights
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    You have the right to access, correct, or delete your personal information.
                    Please contact us if you wish to exercise these rights.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Cookies and Tracking
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    We may use cookies and similar technologies to improve user experience and
                    analyze site usage.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Children’s Privacy
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Our services are not intended for children under 13. We do not knowingly
                    collect personal information from children under 13.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Changes to This Policy
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    We may update this policy from time to time. Please review it periodically
                    for any changes.
                </p>

                <h2 className="text-xl font-semibold mb-2  dark:text-gray-100">
                    Contact Information
                </h2>
                <p className="text-gray-500 dark:text-gray-300">
                    If you have any questions about this Privacy Policy, contact us at :
                    <br />
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

export default PrivacyPolicy;