import React from 'react';

const Information = ({ information }) => {
    const { img, name, phone, wats_app } = information;

    return (
        <div className='mt-5'>

            <div className='bg-white p-8'>
                <h3 className='text-xl font-semibold'>Contact Owner</h3>
                <div className='divider'></div>
                <div className='flex items-center mb-8'>
                    <div className="avatar mr-8">
                        <div className="w-24 rounded-full">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>{name}</h4>
                        <h4>Phone: <strong>{phone}</strong></h4>
                        <p>WatsApp: <strong>{wats_app}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;