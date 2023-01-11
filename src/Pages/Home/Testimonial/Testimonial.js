import React from 'react';
import one from '../OurAggent/pexels-andrea-piacquadio-762080.jpg'
import two from '../OurAggent/pexels-andrea-piacquadio-845457.jpg'
import three from '../OurAggent/pexels-andrea-piacquadio-859265.jpg'
import './testimonial.css'

const Testimonial = () => {


    return (
        <div className='my-16'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl'>Testimonials</h1>
                <p className='text-gray-600 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-36'>


                <div className="card w-96 bg-base-100 shadow-xl py-8 testi">
                    <div className="card-body">

                        <p className='text-gray-400'>Really good Theme. We can't understand how we've been living without Houzez.</p>
                        <div className="card-actions justify-start flex mt-3">
                            <div className="avatar mr-3">
                                <div className="w-24 rounded-full">
                                    <img src={one} alt='' />
                                </div>
                            </div>
                            <div>
                                <h2>By, <strong className='font-bold'>Kathleen Peterson</strong></h2>
                                <p>Sales Manager, Envato</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl py-8 testi">
                    <div className="card-body">

                        <p className='text-gray-400'>Really good Theme. We can't understand how we've been living without Houzez.</p>
                        <div className="card-actions justify-start flex mt-3">
                            <div className="avatar mr-3">
                                <div className="w-24 rounded-full">
                                    <img src={two} alt='' />
                                </div>
                            </div>
                            <div>
                                <h2>By, <strong className='font-bold'>Kathleen Peterson</strong></h2>
                                <p>Sales Manager, Envato</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl py-8 testi">
                    <div className="card-body">

                        <p className='text-gray-400'>Really good Theme. We can't understand how we've been living without Houzez.</p>
                        <div className="card-actions justify-start flex mt-3">
                            <div className="avatar mr-3">
                                <div className="w-24 rounded-full">
                                    <img src={three} alt='' />
                                </div>
                            </div>
                            <div>
                                <h2>By, <strong className='font-bold'>Kathleen Peterson</strong></h2>
                                <p>Sales Manager, Envato</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Testimonial;