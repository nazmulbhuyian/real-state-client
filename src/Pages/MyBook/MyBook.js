import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SingleBook from './SingleBook';

const MyBook = () => {

    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/myBooking', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://real-state-server.vercel.app/myBooking?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    return (
        <div className='my-16 mx-12'>
            <h1 className='text-center font-bold text-4xl mb-12 text-emerald-500'>See Which Proparty You Buy.</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    products?.map(product => <SingleBook refetch={refetch} product={product} key={product._id}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default MyBook;