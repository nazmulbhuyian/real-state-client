import React from 'react';
import image from '../pexels-pixabay-269874.jpg'

const Overview = ({ detail, type }) => {
    const { bathroom, built, garage, length, about } = detail;
    const descriv = about.slice(0, 1000)
    return (
        <div>
            <div className='bg-white p-8'>
                <h1 className='text-xl font-semibold'>Overview</h1>
                <div className="divider"></div>

                <div className='flex mt-8'>
                    <div className='grid grid-cols-3 items-center justify-between w-3/5'>
                        <div className='mb-5'>
                            <h3><strong>{type}</strong></h3>
                            <h3>Property Type</h3>
                        </div>
                        <div className='mb-5'>
                            <h3><strong>{bathroom}</strong></h3>
                            <h3>Bathroom</h3>
                        </div>
                        <div className='mb-5'>
                            <h3><strong>{garage}</strong></h3>
                            <h3>Garage</h3>
                        </div>
                        <div>
                            <h3><strong>{length}</strong></h3>
                            <h3>Sq Ft</h3>
                        </div>
                        <div>
                            <h3><strong>{built}</strong></h3>
                            <h3>Year Built</h3>
                        </div>
                    </div>

                    <div>
                        <img src={image} alt="" width='250px' className='ml-24' />
                    </div>

                </div>

            </div>

            <div className='mt-5'>
                <div className='bg-white p-8'>
                    <h3 className='text-xl font-semibold'>Description</h3>
                    <div className='divider'></div>
                    {descriv}
                </div>
            </div>

        </div>
    );
};

export default Overview;