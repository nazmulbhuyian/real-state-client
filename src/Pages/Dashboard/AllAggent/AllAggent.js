import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Aggent from './Aggent';

const AllAggent = () => {

    const { isLoading, refetch, data: aggents = [] } = useQuery({
        queryKey: ['/allAggent'],
        queryFn: async () => {
            const res = await fetch('https://real-state-server.vercel.app/allAggent')
            const data = await res.json()
            return data
        }
    })

    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-primary mb-12 mt-8'>Our All Aggent Is Here</h1>
            <div className='grid grid-cols-2 gap-12'>
                {
                    aggents?.map(aggent => <Aggent aggent={aggent} key={aggent._id}></Aggent>)
                }
            </div>
        </div>
    );
};

export default AllAggent;