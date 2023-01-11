import React, { useState } from 'react';
import image from './pexels-matthis-volquardsen-2305190.jpg'
import './header.css'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const Header = () => {

    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);

    return (
        <div className="lg:w-full w-96 image-full card p-0">
            <div className='carousel-img'>
                <figure><img src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body lg:mx-auto p-0">
                <div>
                    <h2 className="card-title lg:text-7xl text-2xl lg:mt-24 lg:font-bold">Welcome <Typewriter words={[' To Our Real State', ' To Our Real State', ' To Our Real State', ' To Our Real State', ' To Our Real State']} loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000} /></h2>
                    <p className='text-gray-300 mt-3 text-xl lg:mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, placeat porro. Voluptatum <br /> quis maxime, nulla molestias nemo facilis odit nihil delectus vero sapiente!</p>
                </div>


                <div className='lg:flex lg:flex-row flex-col lg:gap-5 mt-12 hidden'>

                    <motion.button
                        initial={false}
                        animate={[isHover ? "hover" : "rest"]}
                        whileTap="press"
                        variants={buttonVariants}
                        onHoverStart={() => setIsHover(true)}
                        onHoverEnd={() => setIsHover(false)}
                        className="star"
                    >
                        <motion.span><div className="w-96 back text-primary-content h-52">
                            <div className='text-center'>
                                <h2 className="card-title mt-5 ml-24 mb-8">Easy to get started</h2>
                                <p className='mx-8 mb-4'>Get ready to launch your realty site in minutes without any previous experience</p>
                                <Link className='text-primary underline'>Learn More</Link>
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
                            <div className="w-96 back text-primary-content h-52">
                                <div className='text-center'>
                                    <h2 className="card-title mt-5 ml-24 mb-8">Highly customizable</h2>
                                    <p className='mx-8 mb-4'>Customize the site to your expectations by using all of the theme features</p>
                                    <Link className='text-primary underline'>Learn More</Link>
                                </div>
                            </div></motion.span>
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
                            <div className="w-96 back text-primary-content h-52">
                                <div className='text-center'>
                                    <h2 className="card-title mt-5 ml-24 mb-8">Drag-and-drop based</h2>
                                    <p className='mx-8 mb-4'>design your page by simply dragging the features using Elementor page builder</p>
                                    <Link className='text-primary underline'>Learn More</Link>
                                </div>
                            </div>
                        </motion.span>
                    </motion.button>

                </div>

            </div>





        </div>
    );
};

const buttonVariants = {
    hover: {
        scale: 1.1
    }
}

export default Header;