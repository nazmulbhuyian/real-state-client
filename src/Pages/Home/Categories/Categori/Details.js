
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {

    // const location = useLocation()
    // const newId = location?.state;

    // const pathname = location.pathname
    // const id = pathname.slice(9)

    const { id } = useParams()
    // console.log(id);

    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/details/:id'],
        queryFn: async () => {
            const res = await fetch(`https://real-state-server.vercel.app/details/${id}`)
            const data = await res.json()
            return data
        }
    })



    return (
        <div className='lg:w-3/5 mx-auto my-16'>
            <button className='btn btn-primary mb-3'><Link to='/'>Go Back</Link></button>
            {/* <h1 className='text-4xl'>{type}</h1> */}
            <h3 className='text-gray-400 lg:ml-24 mt-8 text-xl'>{products?.length} Properties</h3>
            <div className=''>
                {
                    products?.map(detail => <Detail allDetail={detail} key={detail._id}></Detail>)
                }
            </div>
        </div>
    );
};

export default Details;