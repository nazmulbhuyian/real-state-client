import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Modal from './Modal';
import SingleBookings from './SingleBookings';

const AllBooking = () => {

    const [items, setItems] = useState([])

    const { isLoading, refetch, data: bookings = [] } = useQuery({
        queryKey: ['/allBookings'],
        queryFn: async () => {
            const res = await fetch('https://real-state-server.vercel.app/allBookings')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-bold underline text-primary'>All Booking Products In Your Website Is Here</h1>
            <div className="overflow-x-auto">
                <table className="table w-full my-16">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Details</th>
                            <th>Done</th>
                            <th>User Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <SingleBookings setItems={setItems} i={i} booking={booking} refetch={refetch}></SingleBookings>)
                        }
                    </tbody>
                </table>
            </div>
            {
                items &&
                <Modal items={items}></Modal>
            }
        </div>
    );
};

export default AllBooking;