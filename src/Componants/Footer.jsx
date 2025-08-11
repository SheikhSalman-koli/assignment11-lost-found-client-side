import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiCloseLargeFill, RiInstagramFill } from 'react-icons/ri';
import logo from '../assets/lostfound-logo.jpg'
import { Link } from 'react-router';

const Footer = () => {
    const [openFAQ, setOpenFAQ] = useState(false)

    const handleFAQs = () => {
        setOpenFAQ(true)
    }

    const closeFAQs = () => {
        setOpenFAQ(false)
    }

    return (
        <div className=''>
            <footer className="footer sm:footer-horizontal bg-[#2C7BE5] text-white p-10">
                <nav>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10 h-10 rounded-full border-2 border-white' src={logo} alt="empty for now" />
                        <p className="text-2xl font-bold">Lost & Found Hub</p>
                    </div>
                    <p className="">Helping you reunite with what matters most.</p>
                    <h3 className='text-[20px] font-bold'>Stay Connected</h3>
                    <div className='flex gap-1 items-center'>
                        <a href='https://www.facebook.com' target='_blank'> <FaFacebook size={20} /></a>
                        <a href='https://www.twitter.com' target='_blank'><FaTwitter size={20} /></a>
                        <a href='https://www.youtube.com' target='_blank'><FaYoutube size={20}></FaYoutube></a>
                        <a href='https://www.instagram.com' target='_blank'><RiInstagramFill size={20} /></a>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to='/reportitem' className="link link-hover">Report Lost Item</Link>
                    <Link to='/reportitem' className="link link-hover">Report Found Item</Link>
                    <Link to='/allitem' className="link link-hover">Browse Items</Link>
                    <button onClick={handleFAQs} className="link link-hover">FAQs</button>
                </nav>

                <nav>
                    <h6 className="footer-title">Community</h6>
                    <a className="link link-hover">Safety Tips</a>
                    <a className="link link-hover">Success Stories</a>
                    <a className="link link-hover">Volunteer</a>
                    <a className="link link-hover">Blogs</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Contacts</a>
                </nav>

            </footer>


            {
                openFAQ &&
                <div id="my_modal_5" className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
                    <div className={`p-5 bg-base-100 rounded-lg min-w-[400px]  space-y-2`}>

                        <div className='flex justify-between'>
                            <h3 className="text-2xl">FAQs</h3>
                            <label className='z-[999]'>
                                <button className='btn btn-warning' onClick={closeFAQs}><RiCloseLargeFill size={20} /></button>
                            </label>
                        </div>

                        <div className="space-y-2">
                            {/* Q1 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" defaultChecked />
                                <div className="collapse-title font-semibold">
                                    How do I post a lost or found item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Click on the "Add Item" button, fill in the details such as category, description, and location, then submit.
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    Do I need to create an account to post an item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Yes, creating an account helps verify posts and allows you to manage or edit your listings.
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    Is it free to post a lost or found item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Yes, posting items on our platform is completely free.
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    What should I include when reporting a lost item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Include a clear description, location where it was lost, date, and any identifiable marks. A photo is highly recommended.
                                </div>
                            </div>

                            {/* Q5 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I search for my lost item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Use the search bar or browse by category. You can also filter by location and date.
                                </div>
                            </div>

                            {/* Q6 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    I found something, what should I do?
                                </div>
                                <div className="collapse-content text-sm">
                                    Post it on the site with details about where and when you found it, but avoid sharing overly specific identifiers so the rightful owner can prove it’s theirs.
                                </div>
                            </div>

                            {/* Q7 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I confirm the rightful owner of a found item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Ask the person to describe specific details or provide proof of ownership before returning the item.
                                </div>
                            </div>

                            {/* Q8 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I contact someone who posted an item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Use the messaging system or contact form provided on their listing. Do not share personal information until necessary.
                                </div>
                            </div>

                            {/* Q9 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I remove my listing once my item is found?
                                </div>
                                <div className="collapse-content text-sm">
                                    Go to your dashboard, find your listing, and click “Remove” or “Mark as Resolved.”
                                </div>
                            </div>

                            {/* Q10 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    Is the platform responsible for the items listed?
                                </div>
                                <div className="collapse-content text-sm">
                                    No, we only provide the platform for connecting people. All exchanges are the responsibility of the individuals involved.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>

    );
};

export default Footer;