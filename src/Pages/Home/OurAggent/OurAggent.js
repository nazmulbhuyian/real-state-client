import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import one from './pexels-andrea-piacquadio-762080.jpg'
import two from './pexels-andrea-piacquadio-845457.jpg'
import three from './pexels-andrea-piacquadio-859265.jpg'
import four from './pexels-hasibullah-zhowandai-819530.jpg'
import { motion } from "framer-motion";

const OurAggent = () => {

    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);

    return (
        <div className='my-16 text-center'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl'>Meet Our Agents</h1>
                <p className='text-gray-600 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-2 lg:mx-12'>

                <motion.button
                    initial={false}
                    animate={[isHover ? "hover" : "rest"]}
                    whileTap="press"
                    variants={buttonVariants}
                    onHoverStart={() => setIsHover(true)}
                    onHoverEnd={() => setIsHover(false)}
                    className="star"
                >
                    <motion.span><div className="card card-compact lg:w-64 w-44 bg-base-100 shadow-xl">
                        <div className="avatar lg:ml-20 ml-8">
                            <div className="w-24 rounded-full">
                                <img src={one} alt='' />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title lg:ml-8 text-sky-500">Samuel Palmer</h2>
                            <h4>Company Agent , Modern House Real Estate</h4>
                            <p className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...</p>
                            <div className="card-actions justify-center">
                                <Link className="text-primary">View Profile</Link>
                            </div>
                        </div>
                    </div></motion.span>
                </motion.button>




                <motion.button
                    initial={false}
                    animate={[isHover2 ? "hover" : "rest"]}
                    whileTap="press"
                    variants={buttonVariants}
                    onHoverStart={() => setIsHover2(true)}
                    onHoverEnd={() => setIsHover2(false)}
                    className="star"
                >
                    <motion.span>
                        <div className="card card-compact lg:w-64 w-44 bg-base-100 shadow-xl">
                            <div className="avatar lg:ml-20 ml-8">
                                <div className="w-24 rounded-full">
                                    <img src={two} alt='' />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title lg:ml-8 text-sky-500">Vincent Fuller</h2>
                                <h4>Company Agent , Country House Real Estate</h4>
                                <p className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...</p>
                                <div className="card-actions justify-center">
                                    <Link className="text-primary">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </motion.span>
                </motion.button>


                <motion.button
                    initial={false}
                    animate={[isHover3 ? "hover" : "rest"]}
                    whileTap="press"
                    variants={buttonVariants}
                    onHoverStart={() => setIsHover3(true)}
                    onHoverEnd={() => setIsHover3(false)}
                    className="star"
                >
                    <motion.span>
                        <div className="card card-compact lg:w-64 w-44 bg-base-100 shadow-xl">
                            <div className="avatar lg:ml-20 ml-8">
                                <div className="w-24 rounded-full">
                                    <img src={three} alt='' />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title lg:ml-8 text-sky-500">Brittany Watkins</h2>
                                <h4>Company Agent , Country House Real Estate</h4>
                                <p className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...</p>
                                <div className="card-actions justify-center">
                                    <Link className="text-primary">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </motion.span>
                </motion.button>


                <motion.button
                    initial={false}
                    animate={[isHover4 ? "hover" : "rest"]}
                    whileTap="press"
                    variants={buttonVariants}
                    onHoverStart={() => setIsHover4(true)}
                    onHoverEnd={() => setIsHover4(false)}
                    className="star"
                >
                    <motion.span>
                        <div className="card card-compact lg:w-64 w-44 bg-base-100 shadow-xl">
                            <div className="avatar lg:ml-20 ml-8">
                                <div className="w-24 rounded-full">
                                    <img src={four} alt='' />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title lg:ml-8 text-sky-500">Michelle Ramirez</h2>
                                <h4>Company Agent , Country House Real Estate</h4>
                                <p className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...</p>
                                <div className="card-actions justify-center">
                                    <Link className="text-primary">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </motion.span>
                </motion.button>

            </div>

        </div>
    );
};

const buttonVariants = {
    hover: {
        scale: 1.1
    }
}

export default OurAggent;