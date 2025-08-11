import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/lostfound-logo.jpg'
import { Tooltip } from 'react-tooltip';
import { RiLogoutCircleRLine } from "react-icons/ri";


const Header = () => {

    const { user, logOut } = use(AuthContext)

    // const [theme, setTheme] = useState(
    //     localStorage.getItem("theme") || "light"
    // );

    // useEffect(() => {
    //     document.documentElement.setAttribute("data-theme", theme);
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    // const toggleTheme = () => {
    //     setTheme(theme === "light" ? "synthwave" : "light");
    // };

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
        <li><NavLink to='/reportitem'>Report Item</NavLink></li>
        <li> <NavLink to={`/myitem/${user?.email}`}>My-Item</NavLink></li>
        <li> <NavLink to={`/recovered/${user?.email}`}>Recovered</NavLink></li>
    </>

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-base-100  shadow-sm'>
            <div className="navbar max-w-11/12  mx-auto px-0">

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
                            <li> <NavLink to='/blogs'>Blogs</NavLink></li>

                            {user && isUser}
                        </ul>
                    </div>
                    <img className='hidden lg:block w-10 h-10 rounded-full border-2 border-white' src={logo} alt="empty for now" />

                      <label className="swap swap-rotate ml-4">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />
                        {/* sun icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                      
                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
              
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li> <NavLink to='/allitem'>All-Item</NavLink></li>
                        <li> <NavLink to='/blogs'>Blogs</NavLink></li>
                        {user && isUser}

                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <div className='flex gap-2.5'>

                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="">
                                        <img className='w-10 h-10 rounded-full border-2 border-white' src={user?.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} />
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
                            <div className='space-x-3'>
                                <NavLink to='/signin' className='btn btn-outline'>Login</NavLink>
                                <NavLink to='/signup' className='btn btn-outline'>Register</NavLink>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;