import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import logo from '../assets/lostfound-logo.jpg'

const Footer = () => {

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
                        <a href='https://www.twitter.com' target='_blank'><FaTwitter size={20}/></a>
                        <a href='https://www.youtube.com' target='_blank'><FaYoutube size={20}></FaYoutube></a>
                        <a href='https://www.instagram.com' target='_blank'><RiInstagramFill size={20}/></a>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Report Lost Item</a>
                    <a className="link link-hover">Report Found Item</a>
                    <a className="link link-hover">Browse Items</a>
                    <a className="link link-hover">FAQs</a>
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
        </div>

    );
};

export default Footer;