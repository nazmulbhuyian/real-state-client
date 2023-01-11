import React from 'react';

const Heading = ({head, detail}) => {

    const { name, role, address} = head;
    const {price, img} = detail;

    return (
        <div>
            <div className='flex items-center justify-between mb-2'>
                <h1 className='text-3xl'>{name}</h1>
                <h1 className='text-3xl font-bold'>{price} $</h1>
            </div>
            <button className='btn btn-sm mb-2 hover:text-blue-500'>{role}</button>
            <p>{address}</p>
            <img src={img} alt="" className='mt-5' />
        </div>
    );
};

export default Heading;