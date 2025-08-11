import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiCloseLargeFill, RiInstagramFill } from 'react-icons/ri';
import logo from '../assets/lostfound-logo.jpg'
import { Link } from 'react-router';
import FAQsModal from './modals/FAQsModal';
import VulenteerModal from './modals/VulenteerModal';
import TermsModal from './modals/TermsModal';
import PrivacyPolicy from './modals/PrivacyPolicy';
import HelpModal from './modals/HelpModal';
import ContactModal from './modals/ContactModal';

const Footer = () => {
    const [openFAQ, setOpenFAQ] = useState(false)
    const [openVulenteer, setOpenVulenteer] = useState(false)
    const [openTerms, setOpenTerms] = useState(false)
    const [openPrivacy, setOpenPrivacy] = useState(false)
    const [openHelp, setOpenHelp] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    const handleFAQs = () => {
        setOpenFAQ(true)
    }

    const handleVulenteer = () => {
        setOpenVulenteer(true)
    }

    const handleTerms=()=>{
        setOpenTerms(true)
    }

    const handlePraivacy =()=>{
        setOpenPrivacy(true)
    }

    const handleHelp =()=>{
        setOpenHelp(true)
    }

    const handleContact=()=> {
        setOpenContact(true)
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
                    <button onClick={() => document
                        .getElementById('saifty-tips')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                        className="link link-hover">Safety Tips
                    </button>
                    {/* <Link to="/home#saifty-tips" className="link link-hover">Safety Tips</Link> */}
                    <button onClick={() => document
                        .getElementById('success')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                        className="link link-hover">Success Stories
                    </button>
                    <button type='button' onClick={handleVulenteer} className="link link-hover">Be Volunteer</button>
                    <Link to='blogs' className="link link-hover">Blogs</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Support</h6>
                    <button onClick={handleTerms} className="link link-hover">Terms of Service</button>
                    <a onClick={handlePraivacy} className="link link-hover">Privacy Policy</a>
                    <a onClick={handleHelp} className="link link-hover">Help Center</a>
                    <a onClick={handleContact} className="link link-hover">Contacts</a>
                </nav>

            </footer>
            {
                openFAQ &&
                <FAQsModal
                    onClose={() => setOpenFAQ(false)}
                />
            }
            {
                openVulenteer &&
                <VulenteerModal
                    onClose={() => setOpenVulenteer(false)}
                />
            }
            {
                openTerms && 
                <TermsModal
                onClose={() => setOpenTerms(false)}
                />
            }
            {
                openPrivacy && 
                <PrivacyPolicy 
                onClose={() => setOpenPrivacy(false)}
                />
            }
            {
                openHelp && 
                <HelpModal 
                 onClose={() => setOpenHelp(false)}
                />
            }
            {
                openContact && 
                <ContactModal 
                 onClose={() => setOpenContact(false)}
                />
            }
        </div>

    );
};

export default Footer;