import React, { use } from 'react';
import { NavLink } from 'react-router';
import './header.css'
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/lostfound-logo.jpg'

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

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                {/* <div className="navbar-start gap-5">
                    <img className='w-14 h-14 rounded-full' src={logo} alt="empty for now" />
                </div> */}

            <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> 
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
        <li>
         <NavLink to='/allgroup'>All Groups</NavLink>
        </li>
        <li> <NavLink to='/create'>Create Group</NavLink></li>
      </ul>
    </div>
 <img className='w-14 h-14 rounded-full' src={logo} alt="empty for now" />
  </div>



  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
        <li>
         <NavLink to='/allgroup'>All Groups</NavLink>
        </li>
        <li> <NavLink to='/create'>Create Group</NavLink></li>
    </ul>
  </div>



                {/* <div className="navber-end lg:navbar-center ">
                    <div className="hidden lg:flex items-center">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allgroup'>All Groups</NavLink>
                        <NavLink to='/create'>Create Group</NavLink>
                        <NavLink to='/mygroup'>My Groups</NavLink>
                        {
                            user ? <>
                                <button onClick={handleLogout} className='text-[12px] font-bold'>logout</button>
                            </>
                                :
                                <>
                                    <NavLink to='/signin'>Login</NavLink>
                                    <NavLink to='/signup'>Register</NavLink>
                                </>
                        }

                    </div>
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"> */}
                            {/* {user && <div className="tooltip" data-tip={user.displayName}>
                                <img className='w-10 h-10 rounded-full mr-1' src={user.photoURL} alt="" />
                            </div>} */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 right-0 mt-3 w-52 p-0 shadow">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/allgroup'>All Groups</NavLink>
                            <NavLink to='/create'>Create Group</NavLink>
                            <NavLink to='/mygroup'>My Groups</NavLink>
                            {
                                user ? <>
                                    <button onClick={handleLogout} className='text-[12px] font-bold'>logout</button>
                                </>
                                    :
                                    <>
                                        <NavLink to='/signin'>Login</NavLink>
                                        <NavLink to='/signup'>Register</NavLink>
                                    </>
                            }
                        </ul>
                    </div>
                </div> */}

                <div className="navbar-end">
                    {
                                user ? <>
                                    <button onClick={handleLogout} className='text-[12px] font-bold'>logout</button>
                                </>
                                    :
                                    <>
                                        <NavLink to='/signin'>Login</NavLink>
                                        <NavLink to='/signup'>Register</NavLink>
                                    </>
                            }
                </div>
            </div>
        </div>
    );
};

export default Header;