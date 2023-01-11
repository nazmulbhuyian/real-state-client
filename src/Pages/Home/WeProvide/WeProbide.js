import React, { useState } from 'react';
import './weProvide.css'
import { HiHome } from "react-icons/hi";
import { HiPhoneIncoming } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { motion } from "framer-motion";

const WeProbide = () => {

    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);

    return (
        <div className='lg:p-24 provide py-5'>
            <div>
                <h1 className='text-center lg:text-5xl text-3xl mb-12 text-white'>We Provide Those Services</h1>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-8 mx-12'>
                    
                        <motion.button
                            initial={false}
                            animate={[isHover ? "hover" : "rest"]}
                            whileTap="press"
                            variants={buttonVariants}
                            onHoverStart={() => setIsHover(true)}
                            onHoverEnd={() => setIsHover(false)}
                            className="star"
                        >
                            <motion.span><div className='lg:p-12 p-2 text-center text-white service'><h3><HiOutlineShoppingCart className='ml-8 lg:ml-14 mb-3' size={50}></HiOutlineShoppingCart>Looking To Buy</h3></div></motion.span>
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
                            <motion.span><div className='lg:p-12 p-2 text-center text-white service'><HiHome className='ml-8 lg:ml-14 mb-3' size={50}></HiHome><h3>SELL YOUR HOME</h3></div></motion.span>
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
                            <motion.span><div className='lg:p-12 p-2 text-center text-white service'><HiOutlineReceiptTax className='ml-8 lg:ml-14 mb-3' size={50}></HiOutlineReceiptTax><h3>RENT A PLACE</h3></div></motion.span>
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
                        <motion.span><div className='lg:p-12 p-2 text-center text-white service'><HiPhoneIncoming className='ml-8 lg:ml-14 mb-3' size={50}></HiPhoneIncoming> <h3>NEED HELP?</h3></div></motion.span>
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

export default WeProbide;