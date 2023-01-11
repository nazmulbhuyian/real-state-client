import React from 'react';
import { Link } from 'react-router-dom';

const Aggent = ({ aggent }) => {
    const { information, head, _id, type } = aggent;
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={information?.img} className="max-w-sm rounded-lg" alt='' width='350px' />
                <div>
                    <div className=''>
                        <h3 className='font-bold text-xl'>{information?.name}</h3>
                        <h3 className=''>Aggent Of: <strong>{head?.name}</strong></h3>
                        <h3 className=''>Proparty-Type: <strong>{type}</strong></h3>
                    </div>
                    <p className="py-2 text-gray-400">Phone: {information?.phone}</p>
                    <p className='text-gray-400'>Wats-App: {information?.wats_app}</p>
                    <div className='mt-3'>
                        <Link to={`/singleDetail/${_id}`}><button className='btn btn-primary'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aggent;