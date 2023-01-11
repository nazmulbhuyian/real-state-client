import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer my-12">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar">
                        <div className="hidden lg:block">
                            <ul className="menu p-4 w-full ml-56 flex flex-row">
                                <li className='text-3xl font-bold text-primary mb-8 mr-3'><Link to='/dashboard'>All Bookings</Link></li>
                                <li className='text-3xl font-bold text-primary mb-8 mr-3'><Link to='/dashboard/allAggent'>All Aggents</Link></li>
                                <li className='text-3xl font-bold text-primary mb-8 mr-3'><Link to='/dashboard/allUser'>All User</Link></li>
                                <li className='text-3xl font-bold text-primary mb-8'><Link to='/dashboard/addAppartment'>Add Appartment</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
               
            </div>
            <Footer></Footer>

        </div>
    );
};

export default DashboardLayout;