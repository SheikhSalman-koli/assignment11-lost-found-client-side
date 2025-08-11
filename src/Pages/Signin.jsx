import React, { use, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Signin = () => {

    const { login, setUser, googleSign } = use(AuthContext)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const upperCase = /(?=.*[A-Z])/
        const lower = /(?=.*[a-z])/
        const minimum = /.{6,}/

        if (!upperCase.test(password) === true) {
            // setShowError()
            toast.error("Must have an Uppercase letter in the password!")
            return
        }
        if (!lower.test(password) === true) {
            // setShowError()
            toast.error("Must have a Lowercase letter in the password!")
            return
        }
        if (!minimum.test(password) === true) {
            // setShowError()
            toast.error("Password Length must be at least 6 character!")
            return
        }

        login(email, password)
            .then((result) => {
                const usser = result.user
                // console.log(usser);
                setUser(usser)
                Swal.fire('loggged in successfully')
                navigate('/')
                // navigate(`${ location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

 useEffect(() => {
            document.title = "Signin";
        },[]);

    const googleSignin =()=>{
        googleSign()
        .then(result => {
            const usser = result.user
            setUser(usser)
            navigate('/')
            Swal.fire({
                title: 'logged in successfully',
                icon: 'success'
            })
        })
         .catch((error)=>{
           toast.error(error.message)
        })  
    }

    return (
        <div>
            <div className='my-5 pt-16'>
                <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 border-2 border-[#2C7BE5] font-light">
                    <div className="card-body">
                        <h2 className='text-2xl font-bold'>Login</h2>
                        <form onSubmit={handleLogin} className="fieldset space-y-5">
                           
                            <input 
                            name='email'
                            type="email"
                              required
                            className="border-b-1 text-[16px] font-semibold border-gray-200 focus:outline-none"
                             placeholder="Email"
                           
                            />

                            <input name='password' type="password" className="border-b-1  text-[16px] font-semibold border-gray-200 focus:outline-none" placeholder="Password" />

                            <button type='submit' className="btn btn-ghost text-[20px] font-bold bg-[#28A745] text-white hover:rounded-4xl  mt-4">Login</button>
                            {/* {showError && <p className='text-[18px] font-bold text-red-500 italic'>{showError}</p>} */}
                            <p className='text-center  text-[16px] font-semibold'>don't have an acount? <Link to='/signup'><span className='text-[#2C7BE5]  text-[16px] font-semibold'>create an acount</span></Link></p>
                        </form>
                    </div>
                </div>

                <div className='max-w-sm mx-auto text-center  mt-4'>
                    <div className="divider divider-default">or</div>
                    <div className='flex flex-col space-y-3'>
                        {/* onClick={signWithGoogle} */}
                        <button onClick={googleSignin}  className="btn bg-white rounded-4xl   text-[16px] font-semibold text-black border-black">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        {/* <button className="btn bg-white rounded-4xl text-black   text-[16px] font-semibold border-black">
                            <span className='p-1 bg-blue-500 rounded-full'> <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg></span>
                            Login with Facebook
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;