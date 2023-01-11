import React, { useContext } from 'react';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import image from './pexels-max-vakhtbovych-7031413.jpg'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className='back p-5'>
            <div className='lg:mx-24'>
                <div className="navbar">

                    <div className="flex-1">
                        <div className="avatar">
                            <div className="w-12 rounded-xl">
                                <img src={image} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="flex-none">

                        <ul className="menu menu-horizontal px-1 lg:contents hidden text-white">
                            <li className='hover:text-blue-600 text-xl font-bold'><Link to='/'>Home</Link></li>
                            <li className='hover:text-blue-600 text-xl font-bold'><Link to='/myBook'>My Book</Link></li>

                            <li className='hover:text-blue-600 text-xl font-bold'><Link to='/contact'>Contact</Link></li>
                            <li className='hover:text-blue-600 text-xl font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                            {
                                user ?
                                    <li className='hover:text-blue-600 text-xl font-bold'><Link onClick={handleLogOut}>Sign Out</Link></li>
                                    :
                                    <>
                                        <li className='hover:text-blue-600 text-xl font-bold'><Link to='/login'>Login</Link></li>
                                    </>
                            }
                        </ul>




                        <div className="dropdown lg:hidden  dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="btn m-1"><HiMenu></HiMenu></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='hover:text-blue-600 text-xl font-bold'><Link to='/'>Home</Link></li>
                                <li className='hover:text-blue-600 text-xl font-bold'><Link to='/myBook'>My Book</Link></li>

                                <li className='hover:text-blue-600 text-xl font-bold'><Link to='/contact'>Contact</Link></li>
                                <li className='hover:text-blue-600 text-xl font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                                {
                                    user ?
                                        <li className='hover:text-blue-600 text-xl font-bold'><Link onClick={handleLogOut}>Sign Out</Link></li>
                                        :
                                        <>
                                            <li className='hover:text-blue-600 text-xl font-bold'><Link to='/login'>Login</Link></li>
                                        </>
                                }
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;