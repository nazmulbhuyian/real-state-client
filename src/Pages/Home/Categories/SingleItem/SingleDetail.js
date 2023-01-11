import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Heading from './Heading';
import { useQuery } from '@tanstack/react-query';
import AllOverview from './Overview/AllOverview';

const SingleDetail = () => {
    const { head, detail, type, address, information, _id } = useLoaderData();
    const co = head?.name

    const { isLoading, refetch, data: comments = [] } = useQuery({
        queryKey: ['/comments/:co'],
        queryFn: async () => {
            const res = await fetch(`https://real-state-server.vercel.app/comments/${co}`)
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='bg-base-200'>
            <div className='py-12 mx-auto w-4/5'>
                {/* <button className='btn btn-primary mb-3'><Link to='/details/:id'>Go Back</Link></button> */}
                <Heading refetch={refetch} head={head} detail={detail}></Heading>
                <AllOverview _id={_id} refetch={refetch} detail={detail} type={type} head={head} address={address} comments={comments} information={information}></AllOverview>
            </div>
        </div>
    );
};

export default SingleDetail;