import React from 'react';
import Address from './Address';
import Overview from './Overview';
import Comments from './Comments'
import Information from './Information';
import Booking from '../Booking/Booking';

const AllOverview = ({ detail, type, head, address, comments, refetch, information, _id }) => {
    const types = head?.name;
    return (
        <div className='flex mt-12'>
            <div className='w-4/5'>
                <Overview detail={detail} type={type}></Overview>
                <Address detail={detail} type={type} head={head} address={address}></Address>
                <Comments comments={comments} refetch={refetch} types={types}></Comments>
                <Information information={information}></Information>
            </div>
            <div className='2/5'>
                <Booking type={type} head={head} detail={detail} refetch={refetch} _id={_id}></Booking>
            </div>
        </div>
    );
};

export default AllOverview;