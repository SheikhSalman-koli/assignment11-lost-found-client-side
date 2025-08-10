import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/lostfound-logo.jpg'
import { Tooltip } from 'react-tooltip';
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = () => {

    const { user, logOut } = use(AuthContext)

    // console.log(user, logOut);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire('user logged out successfully!')
            }).catch((error) => {
                toast.error(error.message)
            });
    }

    const isUser = <>
        <li><NavLink to='/additem'>Add Item</NavLink></li>
        <li> <NavLink to={`/myitem/${user?.email}`}>My-Item</NavLink></li>
        <li> <NavLink to={`/recovered/${user?.email}`}>Recovered</NavLink></li>
    </>

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-[#5096f1] shadow-sm'>
            <div className="navbar max-w-11/12 mx-auto px-0">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            {/* <img className='w-10 h-10 rounded-full border-2 border-[#2C7BE5]' src={logo} alt="empty for now" /> */}
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li> <NavLink to='/allitem'>All-Item</NavLink></li>

                              {user && isUser}
                        </ul>
                    </div>
                    <img className='hidden lg:block w-10 h-10 rounded-full border-2 border-[#2C7BE5]' src={logo} alt="empty for now" />
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li> <NavLink to='/allitem'>All-Item</NavLink></li>

                        {user && isUser}

                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <div className='flex gap-2.5'>
                                
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="">
                                        <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} />
                                        <Tooltip id="my-tooltip" />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 right-0 p-2 shadow space-y-3">
                                    
                                          {user && isUser}
                                          <button onClick={handleLogout} className='btn btn-outline text-[16px] font-bold'>logout <RiLogoutCircleRLine /></button>
                                    </ul>
                                </div>

                            </div>
                        </>
                            :
                            <>
                                <NavLink to='/signin' className='btn btn-outline'>Login</NavLink>
                                <NavLink to='/signup' className='btn btn-outline'>Register</NavLink>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;