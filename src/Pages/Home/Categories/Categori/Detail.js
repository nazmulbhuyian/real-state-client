import React from 'react';
import { Link } from 'react-router-dom';

const Detail = ({ allDetail }) => {

    const _id = allDetail._id

    return (
        <div className="hero mt-8">
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={allDetail?.head?.img} className="max-w-sm rounded-lg" alt='' />
                <div>
                    <div className='flex justify-between'>
                        <button className='btn btn-sm'>{allDetail?.head?.role}</button>
                        <h3 className='font-bold text-xl'>$ {allDetail?.detail?.price}</h3>
                    </div>
                    <h1 className="font-bold mt-5">{allDetail?.head?.name}</h1>
                    <p className="py-2 text-gray-400">{allDetail?.head?.address}</p>
                    <p className='text-gray-400'>Type: {allDetail?.type}</p>
                    <div className='flex justify-between mt-3'>
                        <p className='text-gray-400'>Build: {allDetail?.head?.time}</p>
                        <Link to={`/singleDetail/${_id}`}><button className='btn btn-primary'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;