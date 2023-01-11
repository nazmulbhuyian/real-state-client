import React from 'react';

const Address = ({ detail, type, head, address }) => {

    const { bathroom, built, garage, length, price, garage_size } = detail;
    const { role } = head;

    const { address: addres, area, city, country, state, zip } = address;

    return (
        <div className='mt-5'>

            <div className='bg-white p-8'>
                <h3 className='text-xl font-semibold'>Details</h3>
                <div className='divider'></div>

                <div className='grid grid-cols-2 border-2 bg-base-200 p-5'>

                    <div className='mr-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Property Type:</h3>
                            <h3>{type}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Property Status:</h3>
                            <h3>{role}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div className='mr-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Price:</h3>
                            <h3>{price}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Property Size:</h3>
                            <h3>{length}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div className='mr-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Garage:</h3>
                            <h3>{garage}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Garage Size:</h3>
                            <h3>{garage_size}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div className='mr-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Year Built:</h3>
                            <h3>{built}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Bathroom:</h3>
                            <h3>{bathroom}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>

                </div>

            </div>


            <div className='bg-white p-8 mt-5'>
                <h3 className='text-xl font-semibold'>Address</h3>
                <div className='divider'></div>
                <div className='grid grid-cols-2 border-2 bg-base-200 p-5'>

                    <div className='mr-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Address:</h3>
                            <h3>{addres}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Zip-Code:</h3>
                            <h3>{zip}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div className='mr-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>City:</h3>
                            <h3>{city}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Area:</h3>
                            <h3>{area}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div className='mr-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>State:</h3>
                            <h3>{state}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Country:</h3>
                            <h3>{country}</h3>
                        </div>
                        <div className='divider'></div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Address;